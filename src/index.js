import chart from './modules/chart.js';

const inputStock = document.querySelector('.inputName');
const inputStartDate = document.querySelector('.startDate');
const inputEndDate = document.querySelector('.endDate');
const inputSearch = document.querySelector('.searchStock');

let name = 'AAPL';
let initStartDate = getStartDate();
let initEndDate = getEndDate();

await chart.createChart(name, initStartDate, initEndDate);

inputSearch.addEventListener('click', async () => {
  let name = inputStock.value;
  let startDate = inputStartDate.value;
  let endDate = inputEndDate.value;

  if (startDate === '') {
    startDate = getStartDate();
  }

  if (endDate === '') {
    endDate = getEndDate();
  }

  await chart.createChart(name, startDate, endDate);
});

function getStartDate() {
  let newDate = new Date();
  newDate.setFullYear(newDate.getFullYear() - 1);
  return newDate.toISOString().split('T')[0];
}

function getEndDate() {
  return new Date().toISOString().split('T')[0];
}
