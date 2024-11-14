let a = '';
let b = '';
let previos_b = '';
let sign = '';
let result = '';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['+', '-', '×', '/', '%'];


// * Отримання інпута

const out = document.querySelector('.calc-screen p');

// * Функції

function clearAll() {
    a = '';
    b = '';
    sign = '';
    result = '';
    finish = false;
    out.textContent = '0';
}

// * Головна функція 

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // * нажата не кнопка
    if (!event.target.classList.contains('btn')) return;

    // * нажата кнопка clearAll
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // * Получаю нажату кнопку
    const key = event.target.textContent;

    // * Нажата кнопка 0-9 або ,
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a)
            out.textContent = a;
        }  
        else if (a != '' && sign != '' && result != '') {
        // Переносимо результат в `a` і очищаємо `b`, щоб почати нову операцію
        a = result;
        b = '';  // Очищення другої змінної
        result = '';  // Скидання результату
        b += key;  // Продовжуємо введення нового числа для другої змінної
        out.textContent = b;
        console.log(a, sign, b);
    }
        else if (a != "" && sign != '') {
            b += key;
            console.log(a, sign, b)
            out.textContent = b;
        } 
    }

    // * Якщо нажато клавішу + - * / 
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a,sign)
        return;
    }

    if (key === '=') {
        if (b === '') {
            b = a;
            result = b;
        }
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                result = a;
                break;
            case "-":
                a = a - b;
                result = a;
                break;
            case "×":
                a = a * b;
                result = a;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Не ділити на 0';
                    a = '';
                    b = '';
                    sign = '';
                    result = '';
                    return;
                }
                a = a / b;
                result = a;
                break;
            case '%':
                a = (a / 100) * b;
                result = a;
                break
        }
        finish = true;
        out.textContent = result;
        console.table(a, sign, b, '=', );
    }
    }


