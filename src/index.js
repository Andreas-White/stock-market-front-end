import chart from './modules/chart.js';

const inputStock = document.querySelector('.inputName');
const inputStartDate = document.querySelector('.startDate');
const inputEndDate = document.querySelector('.endDate');
const inputSearch = document.querySelector('.searchStock');

let sessionStorage = window.sessionStorage;

// Get saved data from sessionStorage
let stockName = sessionStorage.getItem('stockName');
let stockStartDate = sessionStorage.getItem('stockStartDate');
let stockEndDate = sessionStorage.getItem('stockEndDate');

let name = stockName;
let initStartDate = stockStartDate;
let initEndDate = stockEndDate;

if (name !== '' && name !== null) {
  sessionStorage.removeItem('stockName');
} else {
  name = 'AAPL';
}

if (initStartDate !== '' && initStartDate !== null) {
  sessionStorage.removeItem('stockStartDate');
} else {
  initStartDate = getStartDate();
}

if (initEndDate !== '' && initEndDate !== null) {
  sessionStorage.removeItem('stockEndDate');
} else {
  initEndDate = getEndDate();
}

await chart.createChart(name, initStartDate, initEndDate);

inputSearch.addEventListener('click', async () => {
  let name = inputStock.value;
  let startDate = inputStartDate.value;
  let endDate = inputEndDate.value;

  sessionStorage.setItem('stockName', name);
  sessionStorage.setItem('stockStartDate', startDate);
  sessionStorage.setItem('stockEndDate', endDate);

  location.reload();
});

function getStartDate() {
  let newDate = new Date();
  newDate.setFullYear(newDate.getFullYear() - 1);
  return newDate.toISOString().split('T')[0];
}

function getEndDate() {
  return new Date().toISOString().split('T')[0];
}
