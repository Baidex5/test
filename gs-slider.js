(function() {
    console.log('[GS Mini] Инициализация слайдера...');

    // НАСТРОЙКИ: Вставь сюда свои прямые ссылки на картинки
    const images = [
        "https://gspics.org/images/2026/09/09/IGrWIR.png", 
        "https://files.facepunch.com/paddy/20241104/gesturepack_hero_01.jpg", 
        "https://files.facepunch.com/paddy/20240905/rust_202409_ttk_heroimage.jpg"
    ];

    const config = {
        status: true,
        autoplay: true,
        delay: 5000,
        height: 400
    };

    // Функция создания слайдера
    function createSlider() {
        if (!config.status) return;
        
        // Если слайдер уже есть - выходим, чтобы не дублировать
        if (document.querySelector('.gs-top-slider-container')) return;

        // 1. Подключаем Swiper Element, если нет
        if (!document.querySelector('script[src*="swiper-element"]')) {
            const swiperScript = document.createElement('script');
            swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js';
            document.head.appendChild(swiperScript);
        }

        // 2. Формируем HTML
        const html = `
            <div class="gs-top-slider-container" style="margin-bottom: 20px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <swiper-container class="gs-mySwiper" style="height: ${config.height}px;" navigation="true" pagination="true" autoplay="${config.autoplay}" autoplay-delay="\${config.delay}">
                    \${images.map((img, i) => `
                        <swiper-slide>
                            <img src="${img}" alt="Slide ${i+1}" style="width:100%; height:100%; object-fit:cover;">
                        </swiper-slide>
                    `).join('')}
                </swiper-container>
            </div>
        `;

        // 3. Вставляем в самое начало страницы (над всем)
        document.body.insertAdjacentHTML('afterbegin', html);
        console.log('[GS Mini] Слайдер успешно добавлен в body');
    }

    // Ждем полной загрузки страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSlider);
    } else {
        createSlider();
    }
})();
