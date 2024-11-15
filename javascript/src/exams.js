import getMonths from './months.js';

const monthsData = getMonths(); 

const filteredMonths = monthsData.filter((month) => {
    return month.days === 30;
});

console.log(filteredMonths);

let toPrint = '';

filteredMonths.forEach(month => {
    toPrint += month.month + ', ';
});

document.getElementById('main').innerHTML = toPrint.toString;
