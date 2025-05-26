// 제주도 여행 일정 데이터
const scheduleData = [
    // 1일차
    {
        day: 1,
        title: "제주공항 → 서부 → 서남부 (모슬포/사계 숙소)",
        places: [
            {
                name: "제주공항",
                description: "렌트카 픽업 (30분)",
                time: "09:00",
                lat: 33.5066778,
                lng: 126.4926875
            },
            {
                name: "애월 해지개 카페",
                description: "애월 해안도로에 위치한 오션뷰 카페",
                time: "09:30",
                distance: "약 25km",
                duration: "30분",
                lat: 33.4611,
                lng: 126.3095
            },
            {
                name: "랜디스도넛",
                description: "애월에서 유명한 수제 도넛 맛집",
                time: "11:00",
                distance: "약 1km",
                duration: "5분",
                lat: 33.4628,
                lng: 126.3105
            },
            {
                name: "협재해변",
                description: "에메랄드빛 바다와 하얀 모래사장이 아름다운 해변",
                time: "12:00",
                distance: "약 12km",
                duration: "20분",
                lat: 33.3940,
                lng: 126.2402
            },
            {
                name: "우진해장국",
                description: "점심: 담백한 해장국",
                time: "13:00",
                lat: 33.3930,
                lng: 126.2420
            },
            {
                name: "금오름",
                description: "완만한 경사로 쉽게 오를 수 있는 오름",
                time: "14:00",
                distance: "약 10km",
                duration: "15분",
                lat: 33.3548,
                lng: 126.3055
            },
            {
                name: "모슬포/사계 숙소",
                description: "숙소 체크인 및 휴식",
                time: "17:00",
                distance: "약 30km",
                duration: "40분",
                lat: 33.2167,
                lng: 126.2500
            },
            {
                name: "바다풍경",
                description: "저녁: 모슬포 고등어회 맛집",
                time: "19:00",
                lat: 33.2160,
                lng: 126.2520
            },
            {
                name: "수애기 베이커리 카페",
                description: "바다 전망이 아름다운 베이커리 카페, TWG 차와 맛있는 빵 제공",
                time: "21:00",
                distance: "약 5km",
                duration: "10분",
                lat: 33.2230,
                lng: 126.2450
            }
        ]
    },
    // 2일차
    {
        day: 2,
        title: "서남부 지역 관광 (모슬포/사계 숙소)",
        places: [
            {
                name: "모슬포/사계 숙소",
                description: "출발",
                time: "09:00",
                lat: 33.2167,
                lng: 126.2500
            },
            {
                name: "송악산",
                description: "제주 서남부 해안과 산방산을 조망할 수 있는 오름",
                time: "09:30",
                distance: "약 5km",
                duration: "10분",
                lat: 33.1987,
                lng: 126.2913
            },
            {
                name: "송악산항 선착장",
                description: "마라도 배 탑승",
                time: "11:30",
                distance: "약 3km",
                duration: "5분",
                lat: 33.2083,
                lng: 126.2917
            },
            {
                name: "마라도",
                description: "대한민국 최남단 섬",
                time: "12:00",
                lat: 33.1166,
                lng: 126.2666
            },
            {
                name: "마라도 짜장면",
                description: "점심: 마라도 짜장면",
                time: "13:00",
                lat: 33.1166,
                lng: 126.2670
            },
            {
                name: "가파도",
                description: "청보리 군락지로 유명한 작은 섬",
                time: "14:30",
                lat: 33.1693,
                lng: 126.2719
            },
            {
                name: "사계해변",
                description: "산방산을 배경으로 한 아름다운 해변, 일몰 명소",
                time: "17:00",
                distance: "배 이동 후 약 8km",
                duration: "30분",
                lat: 33.2336,
                lng: 126.3136
            },
            {
                name: "덕승식당",
                description: "저녁: 갈치조림과 우럭조림으로 유명한 현지인 맛집",
                time: "18:30",
                lat: 33.2167,
                lng: 126.2550
            }
        ]
    },
    // 3일차
    {
        day: 3,
        title: "서남부 → 남동부 (중문 숙소)",
        places: [
            {
                name: "모슬포/사계 숙소",
                description: "출발",
                time: "09:00",
                lat: 33.2167,
                lng: 126.2500
            },
            {
                name: "산방산",
                description: "거대한 종 모양의 화산암체",
                time: "09:30",
                distance: "약 5km",
                duration: "10분",
                lat: 33.2368,
                lng: 126.3130
            },
            {
                name: "용머리해안",
                description: "파도에 의해 침식된 독특한 지형의 해안가",
                time: "10:40",
                distance: "약 2km",
                duration: "5분",
                lat: 33.2344,
                lng: 126.3142
            },
            {
                name: "군산오름",
                description: "아름다운 풍경을 감상할 수 있는 오름",
                time: "11:45",
                distance: "약 15km",
                duration: "25분",
                lat: 33.2833,
                lng: 126.4000
            },
            {
                name: "더클리프",
                description: "바다 전망이 아름다운 레스토랑",
                time: "13:10",
                distance: "약 10km",
                duration: "15분",
                lat: 33.2414,
                lng: 126.4244
            },
            {
                name: "약천사",
                description: "아름다운 사찰로 평화로운 분위기의 명소",
                time: "14:55",
                distance: "약 20km",
                duration: "30분",
                lat: 33.2550,
                lng: 126.5550
            },
            {
                name: "새연교",
                description: "서귀포 새섬으로 연결되는 아름다운 다리",
                time: "16:10",
                distance: "약 15km",
                duration: "25분",
                lat: 33.2394,
                lng: 126.5583
            },
            {
                name: "정방폭포",
                description: "바다로 직접 떨어지는 해안 폭포",
                time: "17:05",
                distance: "약 3km",
                duration: "10분",
                lat: 33.2444,
                lng: 126.5727
            },
            {
                name: "허니문하우스",
                description: "아기자기한 카페",
                time: "17:45",
                distance: "약 5km",
                duration: "10분",
                lat: 33.2520,
                lng: 126.5800
            },
            {
                name: "중문 숙소",
                description: "숙소 체크인",
                time: "19:15",
                distance: "약 10km",
                duration: "20분",
                lat: 33.2536,
                lng: 126.4100
            },
            {
                name: "착한전복",
                description: "저녁: 중문에 위치한 전복요리 전문점",
                time: "20:00",
                lat: 33.2536,
                lng: 126.4120
            }
        ]
    },
    // 4일차
    {
        day: 4,
        title: "중문 → 성산 → 공항",
        places: [
            {
                name: "중문 숙소",
                description: "출발",
                time: "09:00",
                lat: 33.2536,
                lng: 126.4100
            },
            {
                name: "섭지코지",
                description: "성산일출봉을 배경으로 한 아름다운 해안가",
                time: "09:00",
                distance: "약 40km",
                duration: "50분",
                lat: 33.4312,
                lng: 126.9275
            },
            {
                name: "광치기해변",
                description: "성산일출봉이 보이는 아름다운 해변",
                time: "10:50",
                distance: "약 5km",
                duration: "10분",
                lat: 33.4585,
                lng: 126.9350
            },
            {
                name: "섭지코지로",
                description: "점심: 고등어쌈밥",
                time: "12:00",
                lat: 33.4320,
                lng: 126.9280
            },
            {
                name: "성산일출봉",
                description: "유네스코 세계자연유산",
                time: "13:00",
                distance: "약 5km",
                duration: "10분",
                lat: 33.4580,
                lng: 126.9400
            },
            {
                name: "해일리카페",
                description: "성산일출봉과 우도를 조망할 수 있는 오션뷰 카페",
                time: "14:40",
                distance: "약 2km",
                duration: "5분",
                lat: 33.4600,
                lng: 126.9350
            },
            {
                name: "제주공항",
                description: "렌터카 반납",
                time: "17:15",
                distance: "약 50km",
                duration: "1시간",
                lat: 33.5066778,
                lng: 126.4926875
            }
        ]
    }
];