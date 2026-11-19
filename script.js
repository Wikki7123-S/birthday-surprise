// Функция переключения экранов
function showScreen(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Показываем нужный
    document.getElementById(screenId).classList.add('active');
}

// Функция открытия подарка
function openGift() {
    // Прячем коробку
    document.getElementById('screen-box').classList.remove('active');

    // Запускаем цветы
    createFlowers();

    // Ждем 4 секунды, пока цветы заполняют экран, и показываем меню
    setTimeout(() => {
        showScreen('screen-menu');
        // Очищаем экран от цветов после показа меню
        document.getElementById('flower-container').innerHTML = '';
    }, 4000);
}

// Новая анимация цветов (крупные цветы)
function createFlowers() {
    const container = document.getElementById('flower-container');

    // Список картинок (УБЕДИСЬ, что у них прозрачный фон!)
        const flowersList = ['flower1.png.png', 'flower2.png.png', 'flower3.png.png', 'flower4.png.png'];

    // Создаем 35 цветов (меньше, но крупнее)
    for (let i = 0; i < 35; i++) {
        const flower = document.createElement('img');

        // Берем случайный цветок
        const randomFlower = flowersList[Math.floor(Math.random() * flowersList.length)];
        flower.src = randomFlower;

        // Добавляем класс анимации
        flower.classList.add('flower-pop');

        // Случайная позиция по всему экрану
        flower.style.left = Math.random() * 90 + 'vw'; // Чуть отступаем от краев
        flower.style.top = Math.random() * 90 + 'vh';

        // УВЕЛИЧИВАЕМ РАЗМЕР (от 150 до 350 пикселей)
        flower.style.width = (Math.random() * 200 + 150) + 'px';

        // Случайная задержка появления
        flower.style.animationDelay = Math.random() * 1.5 + 's';

        // Случайный угол поворота
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;

        container.appendChild(flower);
    }
}