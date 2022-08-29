/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector('.forecast-btn');
const forecastTitle = document.querySelector('.current-forecast h1');
const forecastProbability = document.querySelector('.current-forecast p');
const forecastContainer = document.querySelector('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

const firstForecast = 'Совсем скоро все наладится!';
const secondForecast = 'Сегодня тебя ждет хорошая новость ❤';
const thirdForecast = 'Тебя ожидают новые знакомства ✿';
const fourthForecast = 'Ты хорошо постаралась! Твои труды приведут к отличному результату ✓';
const fifthForecast = 'Тебе предстоит принять важное решение ★';

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addForecastByTemplate() {
    const yourForecast = forecastTemplate.content.cloneNode(true);

    yourForecast.querySelector('h3').textContent = forecastTitle.textContent;
    yourForecast.querySelector('p').textContent = forecastProbability.textContent;

    return yourForecast;
}

button.addEventListener('click', function() {
    if (forecastTitle.textContent && forecastProbability.textContent) {
        const yourForecasts = addForecastByTemplate();
        forecastContainer.prepend(yourForecasts);
    }

    let random = getRandomValue(0, 5);

    switch (random) {
        case 0:
            forecastTitle.textContent = firstForecast
            break;
        case 1:
            forecastTitle.textContent = secondForecast
            break;
        case 2:
            forecastTitle.textContent = thirdForecast
            break;
        case 3:
            forecastTitle.textContent = fourthForecast
            break;
        case 4:
            forecastTitle.textContent = fifthForecast
            break;
    }

    let procent = getRandomValue(0, 101);
    forecastProbability.textContent = 'Вероятность: ' + procent + '%';
})