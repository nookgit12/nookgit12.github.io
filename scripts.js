let croissants = 0;
let autoClickerCost = 10;
let upgradeCost = 50;
let autoClickers = 0;
let clickPower = 1;

function clickButton() {
  croissants += clickPower;
  document.getElementById('clickCount').innerText = croissants;
}

function buyAutoClicker() {
  if (croissants >= autoClickerCost) {
    autoClickers++;
    croissants -= autoClickerCost;
    autoClickerCost = Math.ceil(autoClickerCost * 1.5);
    document.getElementById('clickCount').innerText = croissants;
    document.getElementById('autoClickers').innerText = autoClickers;
    document.getElementById('autoClickerCost').innerText = autoClickerCost;
    startAutoClicker();
  } else {
    alert("Not enough croissants to buy a bakery!");
  }
}

function startAutoClicker() {
  setInterval(function() {
    croissants += autoClickers * clickPower;
    document.getElementById('clickCount').innerText = croissants;
  }, 1000);
}

function upgrade() {
  if (croissants >= upgradeCost) {
    clickPower++;
    croissants -= upgradeCost;
    upgradeCost = Math.ceil(upgradeCost * 2);
    document.getElementById('clickCount').innerText = croissants;
    document.getElementById('clickPower').innerText = clickPower;
    document.getElementById('upgradeCost').innerText = upgradeCost;
  } else {
    alert("Not enough croissants to hire a baker!");
  }
}
