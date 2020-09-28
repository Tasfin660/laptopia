const productTitleContainer = document.querySelector('.product-title-container');

productTitleContainer.style.width = productTitleContainer.offsetWidth + 10 + 'px';

const date = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth, weekStartDay, weekEndDay;

currentMonth = month[date.getMonth()].substr(0, 3);

switch (true) {
    case date.getDate() >= 1 && date.getDate() <= 7:
        weekStartDay = '0' + 1;
        weekEndDay = '0' + 7;
        break;
    case date.getDate() >= 8 && date.getDate() <= 14:
        weekStartDay = '0' + 8;
        weekEndDay = 14;
        break;
    case date.getDate() >= 15 && date.getDate() <= 21:
        weekStartDay = 15;
        weekEndDay = 21;
        break;
    case date.getDate() >= 22 && date.getDate() <= 28:
        weekStartDay = 22;
        weekEndDay = 28;
        break;
    case date.getDate() >= 29 && date.getDate() <= 31:
        weekStartDay = 29;
        weekEndDay = 31;
        break;
}

document.getElementById('special-lottery').textContent = `01 ${currentMonth} — 30 ${currentMonth}`;
document.getElementById('weekly-lottery').textContent = `${weekStartDay} ${currentMonth} — ${weekEndDay} ${currentMonth}`;
