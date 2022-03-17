const input = document.querySelectorAll('.input')
const box = document.querySelectorAll('.box')
const priceAI = document.querySelectorAll('.price__AI')
const totalLiters = document.querySelector('.total__liters')
const totalPrice = document.querySelector('.total-price')
const petrolType = document.querySelector('.type span')
const totalLiter = document.querySelector('.total-liter span')
const onLiterPrice = document.querySelector('.price-liter span')
const btn = document.querySelector(".count")
let ai95 = ''
let ai98 = ''
let ai100 = ''
let total = ''

box.forEach((item) => {
    item.addEventListener('click', () =>{
        box.forEach((item,i) => {
            item.classList.remove('show')
            clean()
        })
        item.classList.add('show')
    })
    btn.addEventListener('click', () => {
        if (input[0].value) {
            petrolType.textContent = 'AI95'   //тип топлива
            totalLiter.textContent = `${totalLiters.value}`  // инпут с литром
            onLiterPrice.textContent = `${input[0].value}$ `
            totalPrice.textContent = `Total price: ${input[0].value * totalLiters.value * 0.05 + input[0].value *
            totalLiters.value }$`
        } else if (input[1].value) {
            petrolType.textContent = 'AI98'
            onLiterPrice.textContent = `${input[1].value}$ `
            totalLiter.textContent = `${totalLiters.value}`
            totalPrice.textContent = `Total price: ${input[1].value * totalLiters.value * 0.05 + input[1].value *
            totalLiters.value }$`

        } else if (input[2].value) {
            petrolType.textContent = 'AI100'
            onLiterPrice.textContent = `${input[2].value}$ `
            totalLiter.textContent = `${totalLiters.value}`
            totalPrice.textContent = `Total price: ${input[2].value * totalLiters.value * 0.05 + input[2].value *
            totalLiters.value }$`
        }
    })
})
function clean() {
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
    totalLiters.value = ''
    petrolType.textContent = ''
    totalLiter.textContent = ''
    onLiterPrice.textContent = ''
    totalPrice.textContent = 'Total Price: 0$'
}


btn.addEventListener('click', ()=>{
    if(input.value === "" || totalLiters.value === "" ){
        alert("Заполните все данные")
        clean()
    }
})




totalLiters.addEventListener('keydown', function(event) {
    // Разрешаем: backspace, delete, tab и escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {

        // Ничего не делаем
        return;
    } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }
    }
});

input[0].addEventListener('keydown', function(event) {
    // Разрешаем: backspace, delete, tab и escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {

        // Ничего не делаем
        return;
    } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }
    }
});

input.forEach((item)=>{
    item.addEventListener('keydown', function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                // Разрешаем: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                // Разрешаем: home, end, влево, вправо
                (event.keyCode >= 35 && event.keyCode <= 39)) {

            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
})