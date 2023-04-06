let money = 0;
let autoclickers = 0;
let multiplier = 1;
let autoclickerInterval;
let autoclickerSpeed = 1000;
const maxAutoclicker = 3;
const maxMultiplier = 11;

const moneyValue = document.getElementById("money-value");
const autoclickersValue = document.getElementById("autoclickers-value");
const clickerBtn = document.getElementById("clickerBtn");
const cabangValue = document.getElementById("cabang-value");
const multiplierButton = document.getElementById("multiplier-button");
const maxAutoclickerValue = document.getElementById("max-autoclicker");
const maxMultiplierValue = document.getElementById("max-multiplier");

clickerBtn.addEventListener("click", function() {
  if (money >= 10 && autoclickers < maxAutoclicker) {
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
    if (autoclickers === maxAutoclicker) {
      maxAutoclickerValue.innerText = '(max)';
      clickerBtn.disabled = true;
    }
  } else {
    alert('Uang Tidak Cukup Untuk Membeli Auto Clicker');
  }
});

multiplierButton.addEventListener("click", function() {
  if (money >= 50 && multiplier < maxMultiplier) {
    money -= 50;
    multiplier += 1;
    cabangValue.value = multiplier - 1;
    if (multiplier === maxMultiplier) {
      maxMultiplierValue.innerText = '(max)';
      multiplierButton.disabled = true;
    }
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

// Upgrade Items
const firstUpgradeButton = document.getElementById("first-upgrade-btn");
const secondUpgradeButton = document.getElementById("second-upgrade-btn");
const thirdUpgradeButton = document.getElementById("third-upgrade-btn");
