import chart from './modules/chart.js';

const inputStock = document.querySelector('.inputName');
const inputStartDate = document.querySelector('.startDate');
const inputEndDate = document.querySelector('.endDate');
const inputSearch = document.querySelector('.searchStock');

let name = 'AAPL';
let startDate = '2020-11-20';
let endDate = '2021-10-06';

await chart.createChart(name, startDate, endDate);

inputSearch.addEventListener('click', async () => {
  name = inputStock.value;
  startDate = inputStartDate.value;
  endDate = inputEndDate.value;

  if (startDate === '') {
    let newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() - 1);
    startDate = newDate.toISOString().split('T')[0];
  }

  if (endDate === '') {
    endDate = new Date().toISOString().split('T')[0];
  }

  await chart.createChart(name, startDate, endDate);
});
