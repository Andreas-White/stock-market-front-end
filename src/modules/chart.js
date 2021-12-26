import request from './getRequests.js';
import table from './displayTableData.js';
import ApexCharts from 'apexcharts';

async function createChart(name, startDate, endDate) {
  let response = await request.getStockData(name, startDate, endDate);
  let data = await response.json();

  if (data.length === 0) {
    alert('Check if you have entered a valid stock acronym');
  }

  let stocks = [];
  let counter = 0;
  parseFloat;
  data.forEach((element) => {
    stocks[counter++] = {
      date: element.date,
      open: element.open,
      high: element.high,
      low: element.low,
      close: element.close,
      adjClose: parseFloat(element.adjClose),
      volume: parseFloat(element.volume),
    };
  });

  let tickNumber = 0;

  if (stocks.length >= 20) {
    tickNumber = 20;
  } else {
    tickNumber = stocks.length;
  }

  let dataPoints = [];
  const tableData = document.querySelector('.tableData');
  tableData.setAttribute('style', 'visibility: hidden');
  const btnDisplay = document.querySelector('.btnDisplay');

  table.display(tableData, btnDisplay, stocks);

  stocks.forEach((stock) => {
    dataPoints.push({
      x: new Date(
        Date.UTC(
          parseInt(stock.date.split('-')[0]),
          parseInt(stock.date.split('-')[1] - 1),
          parseInt(stock.date.split('-')[2]),
        ),
      )
        .toISOString()
        .split('T')[0],

      y: [
        parseFloat(stock.open),
        parseFloat(stock.high),
        parseFloat(stock.low),
        parseFloat(stock.close),
      ],
    });
  });

  let options = {
    series: [
      {
        data: dataPoints,
      },
    ],
    chart: {
      type: 'candlestick',
      height: 450,
      redrawOnParentResize: true,
    },
    title: {
      text: `${name.toUpperCase()} Chart`,
      align: 'left',
    },
    xaxis: {
      type: 'date',
      tickAmount: tickNumber,
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  clearElements(document.querySelector('#chartContainer'));

  let chart = new ApexCharts(
    document.querySelector('#chartContainer'),
    options,
  );
  chart.render();
}

function clearElements(main) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

export default {
  createChart,
};
