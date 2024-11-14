let a = '';
let b = '';
let sign = '';
let result = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['+', '-', '×', '/', '%'];


// * Отримання інпута

const out = document.querySelector('.calc-screen p');

// * Функції

function clearAll() {
    a = '';
    b = '';
    sign = '';
    result = false;
    out.textContent = '';
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
        else if (a != "" && sign != '') {
            b += key;
            console.log(a,sign,b)
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
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "×":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Не ділити на 0';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case '%':
                a = (a / 100) * b;
                break
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
    }


