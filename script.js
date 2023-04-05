let money = 0;
let autoclickers = 0;
let multiplier = 1;
let autoclickerInterval;
let autoclickerSpeed = 1000;

const moneyValue = document.getElementById("money-value");
const autoclickersValue = document.getElementById("autoclickers-value");
const clickerBtn = document.getElementById("clickerBtn");
const cabangValue = document.getElementById("cabang-value");
const multiplierButton = document.getElementById("multiplier-button");

clickerBtn.addEventListener("click", function() {
  if (money >= 10) {
    money -= 10;
    autoclickers += 1;
    autoclickersValue.value = autoclickers;
    if (autoclickers === 1) {
      autoclickerInterval = setInterval(function() {
        money += multiplier;
        moneyValue.value = money;
      }, autoclickerSpeed);
    } else {
      clearInterval(autoclickerInterval);
      autoclickerSpeed = autoclickerSpeed / autoclickers;
      autoclickerInterval = setInterval(function() {
        money += multiplier;
        moneyValue.value = money;
      }, autoclickerSpeed);
    }
  } else {
    alert('Uang Tidak Cukup Untuk Membeli Auto Clicker');
  }
});


multiplierButton.addEventListener("click", function() {
  if (money >= 50) {
    money -= 50;
    multiplier += 1;
    cabangValue.value = multiplier - 1;
  } else {
    alert('Uang Tidak Cukup Untuk Membeli Multiplier')
  }   
});

const getMoneyValue = document.getElementById("getMoneyValue");
const image = document.getElementById("image");
let clicked = false;

getMoneyValue.addEventListener("click", function() {
    if (!clicked) {
      image.src = "images/telur-menetas.png";
      clicked = true;
    } else {
      image.src = "images/ayamtelur.png.png";
      clicked = false;
    }
    money += 1 * multiplier;
    moneyValue.value = money;
});

