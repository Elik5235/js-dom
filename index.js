buttonElement.addEventListener('click', getAlert);
// 1 варіант: зареєстрували обробник події натискання миші на кнопку
// 2 варіант: навісили обробник натискання миші на кнопку


/*

Зробіть кнопку, додайте їй id
Напишіть функцію, яка виводить в консоль "привіт"
Навісити обробку події наведення миші на цю кнопку


*/

const secondButton = document.getElementById('second-btn');

function consoleHello() {
    console.log('Привіт');
}

secondButton.addEventListener('mouseenter', consoleHello);