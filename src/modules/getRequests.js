import fetch from 'node-fetch';

const controller = new AbortController();
const signal = controller.signal;

const getStockData = async (name, start, end) => {
  const url = `https://stock-market-backend-v01.herokuapp.com/stock/${name}/${start}/${end}`;
  const response = await fetch(url, { signal });

  if (response.status !== 200) {
    let data = await response.json();

    console.log(response);
    console.log(JSON.stringify(data, null, 4));

    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};

export default {
  getStockData,
};
