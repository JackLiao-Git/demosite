$(function() {
    const $heroCarousel = $('#heroCarousel');
    const $featuredArticles = $('#featuredArticles');
    const $allArticlesGrid = $('#allArticlesGrid');
    const $articleDetail = $('#articleDetail');

    // 1. 渲染輪播圖 (使用前 3 筆資料)
    if ($heroCarousel.length) {
        const carouselData = window.carData.slice(0, 3);
        const slidesHtml = carouselData.map(car => `
            <div class="carousel-item">
                <img src="${car.image}" alt="${car.title}">
                <div class="carousel-caption">
                    <span class="card-category">${car.category}</span>
                    <h2>${car.title}</h2>
                    <p>${car.summary}</p>
                    <a href="./article-detail.html?id=${car.id}" class="btn" style="margin-top: 1rem;">閱讀全文</a>
                </div>
            </div>
        `).join('');
        
        $heroCarousel.html(slidesHtml);

        // 輪播邏輯
        let currentIndex = 0;
        const totalItems = carouselData.length;

        const updateCarousel = () => {
            $heroCarousel.css('transform', `translateX(-${currentIndex * 100}%)`);
        };

        $('#nextBtn').on('click', function() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        $('#prevBtn').on('click', function() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        // 自動播放
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 5000);
    }

    // 2. 渲染首頁推薦卡片
    if ($featuredArticles.length) {
        renderCards(window.carData.slice(0, 3), $featuredArticles);
    }

    // 3. 渲染文章導覽頁所有卡片
    if ($allArticlesGrid.length) {
        renderCards(window.carData, $allArticlesGrid);
    }

    // 4. 渲染文章內頁詳情
    if ($articleDetail.length) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));
        const article = window.carData.find(a => a.id === articleId);

        if (article) {
            const detailHtml = `
                <img src="${article.image}" alt="${article.title}" class="detail-hero">
                <div class="container">
                    <div class="detail-header">
                        <span class="card-category">${article.category}</span>
                        <h1>${article.title}</h1>
                        <p style="color: #666;">發布日期：${article.date}</p>
                    </div>

                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">加速 (0-100)</span>
                            <span class="spec-value">${article.specs.speed}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">續航力 / 里程</span>
                            <span class="spec-value">${article.specs.range}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">最大馬力</span>
                            <span class="spec-value">${article.specs.power}</span>
                        </div>
                    </div>

                    <div class="detail-content">
                        <p>${article.content}</p>
                        <p style="margin-top: 1.5rem;">${article.content}</p>
                    </div>

                    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #eee;">
                        <a href="articles.html" class="btn">回到文章導覽</a>
                    </div>
                </div>
            `;
            $articleDetail.html(detailHtml);
        } else {
            $articleDetail.html('<div class="container"><h2>找不到該文章</h2><a href="index.html">回到首頁</a></div>');
        }
    }
});

// 通用卡片渲染函式 (使用 jQuery)
function renderCards(data, $container) {
    const cardsHtml = data.map(car => `
        <article class="card">
            <div class="card-img">
                <img src="${car.image}" alt="${car.title}">
            </div>
            <div class="card-content">
                <span class="card-category">${car.category}</span>
                <h3 class="card-title">${car.title}</h3>
                <p class="card-summary">${car.summary}</p>
                <a href="./article-detail.html?id=${car.id}" class="btn">詳細介紹</a>
            </div>
        </article>
    `).join('');
    $container.html(cardsHtml);
}
