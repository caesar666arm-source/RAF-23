document.addEventListener('DOMContentLoaded', () => {
    // Находим поле телефона
    const phoneInput = document.querySelector('input[type="tel"]');

    // Настройки маски
    const maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false // Маска видна сразу, когда нажимаешь на поле
    };

    // Применяем маску
    const mask = IMask(phoneInput, maskOptions);

    // Уникальная фишка: при наведении на поле, оно слегка "подсвечивается" золотом
    phoneInput.addEventListener('focus', () => {
        phoneInput.style.borderBottomColor = '#c5a059';
    });
});


// Плавное появление элементов при скролле
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.coffee-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease-out";
    observer.observe(item);
});

// Мобильное меню (бургер)
const menu = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Нужно добавить стили для .active
    menu.classList.toggle('is-active');
});
const token = 'ТВОЙ_ТОКЕН_БОТА';
const chatId = 'ТВОЙ_ID_ЧАТА';

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Логика сбора данных из полей
    alert('Заявка принята! Мы свяжемся с вами в течение 5 минут.');
});
document.addEventListener('DOMContentLoaded', () => {

    // 1. УДАЛЕНИЕ ЛОАДЕРА (Уникальный вход на сайт)
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000); // Задержка в 1 секунду для красоты
    });

    // 2. МОБИЛЬНОЕ МЕНЮ (Адаптация)
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active'); // Нужно будет добавить пару строк в CSS ниже
        menuToggle.classList.toggle('is-active');
    });

    // 3. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ (Для SEO и красоты)
    // Элементы появляются плавно, когда до них докручиваешь
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Указываем, какие элементы анимировать
    const animElements = document.querySelectorAll('.coffee-item, .gallery-item, .section-title');
    animElements.forEach(el => {
        el.classList.add('fade-out'); // Начальное состояние
        observer.observe(el);
    });

    // 4. ОБРАБОТКА ФОРМЫ (Практичность)
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Эффект нажатия на кнопку
        const btn = orderForm.querySelector('.btn-submit');
        const originalText = btn.innerText;
        btn.innerText = 'ОТПРАВЛЯЕМ...';
        btn.style.disabled = true;

        // Имитация отправки (здесь можно подключить Telegram API)
        setTimeout(() => {
            alert('Спасибо! Ваша заявка принята. XXIII свяжется с вами.');
            btn.innerText = originalText;
            btn.style.disabled = false;
            orderForm.reset();
        }, 1500);
    });
});
const menuToggle = document.getElementById('mobile-menu');
const logo = document.querySelector('.logo');

menuToggle.addEventListener('click', () => {
    // Переключаем классы для кнопки и меню
    menuToggle.classList.toggle('is-active');
    navList.classList.toggle('active');

    // Эффект для логотипа при открытом меню
    if (navList.classList.contains('active')) {
        logo.style.letterSpacing = "8px";
        
    } else {
        logo.style.letterSpacing = "3px";
        logo.style.opacity = "1";
    }
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navList.classList.remove('active');
        logo.style.letterSpacing = "3px";
        logo.style.opacity = "1";
    });
});
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Получаем данные из полей
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const coffee = this.querySelector('select').value;
    
    // 2. Твой номер телефона в формате 79XXXXXXXXX (без плюса)
    const myNumber = "79280235023"; 

    // 3. Формируем текст сообщения
    const message = `Здравствуйте! Заказ из сайта RAF XXIII:%0A%0A` +
                    `👤 *Имя:* ${name}%0A` +
                    `📞 *Телефон:* ${phone}%0A` +
                    `☕ *Заказ:* ${coffee}`;

    // 4. Ссылка на WhatsApp (проверит, мобилка это или ПК)
    const whatsappUrl = `https://wa.me/{myNumber}?text=${message}`;

    // 5. Визуальный эффект на кнопке перед переходом
    const btn = this.querySelector('.btn-submit');
    btn.innerText = 'ПЕРЕХОД...';
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank'); // Открывает чат
        btn.innerText = 'ОТПРАВИТЬ';
    }, 500);
});

