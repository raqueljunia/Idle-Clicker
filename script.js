const money = document.getElementById('money-value')
let currentMoneyValue = parseInt(money.value)

const clickers = document.getElementById('autoclickers-value')
const clickerBtn = document.getElementById('clickerBtn')
const cabangValue = document.getElementById('cabang-value')
const multiplierBtn = document.getElementById('multiplier-button')
const image = document.getElementById('image')
const getMoneyValueBtn = document.getElementById('getMoneyValue')
const autoClickerBtn = document.getElementById('autoclickerBtn')



clickerBtn.addEventListener('click', () => {
    let clickerCost = 10
    if(currentMoneyValue >= clickerCost) {
        let currentClickersValue = parseInt(clickers.value)
        currentClickersValue++;
        clickers.value = currentClickersValue
        currentMoneyValue = currentMoneyValue -= clickerCost
        autoClickerBtn.style.display = "block"
        clickerCost.innerHTML = clickerCost * currentClickersValue
    }else{
        alert('Uang Tidak Cukup Untuk Membeli Auto Clicker')
    }
})

multiplierBtn.addEventListener ('click', () => {

    const multiplierCost = 50
    if(currentMoneyValue >= multiplierCost) {
        let currentCabangValue = parseInt(cabangValue.value)
        currentCabangValue++
        cabangValue.value = currentCabangValue
        currentMoneyValue = currentMoneyValue -= multiplierCost
      



    }else {
        alert('Uang Tidak Cukup Untuk Membeli Multiplier')
    }


    
})



getMoneyValueBtn.addEventListener('click', () => {

    image.src = 'assets/image/telur-menetas.png'

    currentMoneyValue += 1;

    money.value = currentMoneyValue

}) 


autoClickerBtn.addEventListener('click', () => {
    
   let newMoneyValue = currentMoneyValue

   newMoneyValue++;
   money.innerHTML = newMoneyValue;

})