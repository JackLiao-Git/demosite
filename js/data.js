const carData = [
    {
        id: 1,
        title: "未來之光：全新電動跑車 E-Vision",
        summary: "這款全新的 E-Vision 展示了電動車在性能與美學上的極致平衡。",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        date: "2026-04-10",
        category: "電動車",
        specs: {
            speed: "0-100km/h 2.8s",
            range: "750km",
            power: "800HP"
        },
        content: "E-Vision 是我們對未來的展望。它不僅僅是一輛車，更是一件藝術品。搭載了最新的固態電池技術，提供前所未有的續航力與動力輸出。內裝採用環保再生材質，完美契合永續發展理念。"
    },
    {
        id: 2,
        title: "越野霸主：探險家 G-Series",
        summary: "專為極端地形設計，G-Series 帶你征服每一座山脈。",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        date: "2026-04-15",
        category: "SUV",
        specs: {
            speed: "0-100km/h 5.5s",
            range: "600km",
            power: "450HP"
        },
        content: "G-Series 擁有同級最強的涉水深度與差速鎖系統。無論是沙漠還是雪地，都能如履平地。車內空間寬敞，適合全家出遊或極地探險。"
    },
    {
        id: 3,
        title: "都會優雅：City-Sprint 2026",
        summary: "簡約不簡單，最適合繁忙城市的都會代步首選。",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        date: "2026-04-20",
        category: "房車",
        specs: {
            speed: "0-100km/h 7.2s",
            range: "500km",
            power: "200HP"
        },
        content: "City-Sprint 針對都會停車與狹窄街道進行了優化。自動停車輔助系統讓您在繁忙街道也能輕鬆自如。極致的燃油效率（或電耗）是它的最大亮點。"
    },
    {
        id: 4,
        title: "經典傳承：Heritage-90",
        summary: "復古外型下的現代心臟，獻給熱愛駕駛的你。",
        image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        date: "2026-03-25",
        category: "經典款",
        specs: {
            speed: "0-100km/h 4.2s",
            range: "450km",
            power: "380HP"
        },
        content: "Heritage-90 完美復刻了 90 年代的經典線條，但內部換裝了最先進的動力系統。純粹的機械感與現代的安全科技完美融合。"
    }
];

// 將資料暴露給全域，方便其他腳本存取
window.carData = carData;
