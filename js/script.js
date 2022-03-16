const input = document.querySelectorAll('.input')
const box = document.querySelectorAll('.box')
const priceAI = document.querySelectorAll('.price__AI')
const totalLiters = document.querySelector('.total__liters')
const totalPrice = document.querySelector('.total-price')
const petrolType = document.querySelector('.type span')
const totalLiter = document.querySelector('.total-liter span')
const onLiterPrice = document.querySelector('.price-liter span')
let ai95 = ''
let ai98 = ''
let ai100 = ''
let total = ''


box.forEach((item) => {
    item.addEventListener('click', () =>{
        box.forEach((item,i) => {
            item.classList.remove('show')
            clean()
            check()
        })
        item.classList.add('show')
    })

    totalLiters.addEventListener('input', () => {
        if (input[0].value === `${ai95 = 1.3}`) {
            petrolType.textContent = `${priceAI[0].textContent}`
            totalLiter.textContent = `${totalLiters.value}`
            onLiterPrice.textContent = `${ai95}$`
            totalPrice.textContent = `Total price: ${input[0].value * totalLiters.value * 0.05 + input[0].value *
            totalLiters.value }$`
        } else if (input[1].value === `${ai98 = 1.5}`) {
            onLiterPrice.textContent = `${ai98}$`
            petrolType.textContent = `${priceAI[1].textContent}`
            totalLiter.textContent = `${totalLiters.value}`
            totalPrice.textContent = `Total price: ${input[1].value * totalLiters.value * 0.05 + input[1].value *
            totalLiters.value }$`

        } else if (input[2].value === `${ai100 = 1.7}`) {
            petrolType.textContent = `${priceAI[2].textContent}`
            onLiterPrice.textContent = `${ai100}$`
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

}


// })
// function totalResult() {
//     totalPrice.textContent = `Total price: ${input[0].value * totalLiters.value * 0.05 + input[0].value *
//     totalLiters.value }$`
//     totalPrice.textContent = `Total price: ${input[1].value * totalLiters.value * 0.05 + input[1].value *
//     totalLiters.value }$`
//     totalPrice.textContent = `Total price: ${input[2].value * totalLiters.value * 0.05 + input[2].value *
//     totalLiters.value }$`
//
// }