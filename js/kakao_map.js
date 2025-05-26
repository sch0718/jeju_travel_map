// 카카오맵 API를 사용하기 위한 변수들
let map = null;
let markers = [];
let polylines = [];
let infoWindows = [];
let currentDay = 1;

// 페이지 로드 시 실행
window.onload = function() {
    try {
        // 지도 초기화
        initMap();
    } catch (error) {
        console.error('지도 초기화 중 오류 발생:', error);
        document.getElementById('error-message').classList.remove('hidden');
    }
};
// 지도 초기화 함수
function initMap() {
    // 지도 컨테이너 확인
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('지도 컨테이너(#map)를 찾을 수 없습니다.');
        return;
    }
    
    // 제주도 중심 좌표
    const jejuCenter = new kakao.maps.LatLng(33.3616, 126.5292);
    
    // 지도 옵션
    const mapOption = {
        center: jejuCenter,
        level: 10
    };
    
    // 지도 생성
    map = new kakao.maps.Map(mapContainer, mapOption);
    
    // 지도 컨트롤 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
    // 일차 버튼 클릭 이벤트 설정
    setupEventListeners();
    
    // 초기 데이터 로드 (1일차)
    loadDayData(currentDay);
    
    console.log('지도 초기화 완료');
}// 이벤트 리스너 설정 함수
function setupEventListeners() {
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const day = parseInt(this.getAttribute('data-day'));
            changeDay(day);
            
            // 활성 버튼 스타일 변경
            dayButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 일차별 데이터 로드 함수
function loadDayData(day) {
    // 기존 마커, 폴리라인, 정보창 제거
    clearMapObjects();
    
    // 해당 일차 데이터 가져오기
    const dayData = scheduleData.find(data => data.day === day);
    if (!dayData) return;
    
    // 일차 제목 업데이트
    document.getElementById('day-title').textContent = `${day}일차: ${dayData.title}`;
    
    // 장소 목록 업데이트
    updatePlacesList(dayData.places);
    
    // 마커 및 경로 표시
    displayMarkers(dayData.places);
    displayRoute(dayData.places);
    
    // 지도 영역 조정
    fitMapBounds(dayData.places);
}// 장소 목록 업데이트 함수
function updatePlacesList(places) {
    const placesList = document.getElementById('places');
    placesList.innerHTML = '';
    
    places.forEach(place => {
        const li = document.createElement('li');
        
        const timeSpan = document.createElement('span');
        timeSpan.className = 'place-time';
        timeSpan.textContent = place.time + ' ';
        li.appendChild(timeSpan);
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'place-name';
        nameSpan.textContent = place.name;
        li.appendChild(nameSpan);
        
        if (place.description) {
            const br = document.createElement('br');
            li.appendChild(br);
            
            const descSpan = document.createElement('span');
            descSpan.className = 'place-description';
            descSpan.textContent = place.description;
            li.appendChild(descSpan);
        }
        
        if (place.distance && place.duration) {
            const br = document.createElement('br');
            li.appendChild(br);
            
            const distanceSpan = document.createElement('span');
            distanceSpan.className = 'place-description';
            distanceSpan.textContent = `이동: ${place.distance} (${place.duration})`;
            li.appendChild(distanceSpan);
        }
        
        placesList.appendChild(li);
    });
}// 마커 표시 함수
function displayMarkers(places) {
    places.forEach((place, index) => {
        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(place.lat, place.lng);
        
        // 커스텀 마커 생성
        const content = `<div class="marker-number">${index + 1}</div>`;
        
        const customOverlay = new kakao.maps.CustomOverlay({
            position: markerPosition,
            content: content,
            yAnchor: 1
        });
        
        // 마커를 지도에 표시
        customOverlay.setMap(map);
        markers.push(customOverlay);
        
        // 인포윈도우 생성
        const infoContent = `
            <div class="info-window">
                <h3>${place.name}</h3>
                <p>${place.time}</p>
                <p>${place.description || ''}</p>
                ${place.distance ? `<p>이동: ${place.distance} (${place.duration})</p>` : ''}
            </div>
        `;
        
        const infoWindow = new kakao.maps.InfoWindow({
            content: infoContent,
            removable: true
        });
        
        // 마커 클릭 시 인포윈도우 표시
        kakao.maps.event.addListener(customOverlay, 'click', function() {
            infoWindow.open(map, markerPosition);
        });
        
        // 배열에 추가
        infoWindows.push(infoWindow);
    });
}// 경로 표시 함수
function displayRoute(places) {
    if (places.length < 2) return;
    
    const linePath = places.map(place => new kakao.maps.LatLng(place.lat, place.lng));
    
    const polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 3,
        strokeColor: '#f76707',
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
    });
    
    polyline.setMap(map);
    polylines.push(polyline);
}

// 지도 영역 조정 함수
function fitMapBounds(places) {
    if (places.length === 0) return;
    
    const bounds = new kakao.maps.LatLngBounds();
    
    places.forEach(place => {
        bounds.extend(new kakao.maps.LatLng(place.lat, place.lng));
    });
    
    map.setBounds(bounds, 50);
}

// 마커, 폴리라인, 정보창 제거 함수
function clearMapObjects() {
    // 마커 제거
    markers.forEach(marker => {
        marker.setMap(null);
    });
    markers = [];
    
    // 폴리라인 제거
    polylines.forEach(polyline => {
        polyline.setMap(null);
    });
    polylines = [];
    
    // 정보창 제거
    infoWindows.forEach(infoWindow => {
        infoWindow.close();
    });
    infoWindows = [];
}

// 일차 변경 함수
function changeDay(day) {
    currentDay = day;
    loadDayData(day);
}