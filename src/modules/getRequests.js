import fetch from 'node-fetch';

const getStockData = async (name, start, end) => {
  const url = `http://localhost:8080/stock/${name}/${start}/${end}`;
  const response = await fetch(url);

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
