function display(tableData, btnDisplay, stocks) {
  const tableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');

  const head1 = document.createElement('th');
  head1.textContent = 'Date';
  tableHeadRow.appendChild(head1);
  const head2 = document.createElement('th');
  head2.textContent = 'Open';
  tableHeadRow.appendChild(head2);
  const head3 = document.createElement('th');
  head3.textContent = 'High';
  tableHeadRow.appendChild(head3);
  const head4 = document.createElement('th');
  head4.textContent = 'Low';
  tableHeadRow.appendChild(head4);
  const head5 = document.createElement('th');
  head5.textContent = 'Close';
  tableHeadRow.appendChild(head5);
  const head6 = document.createElement('th');
  head6.textContent = 'Adjusted Closing Price';
  tableHeadRow.appendChild(head6);
  const head7 = document.createElement('th');
  head7.textContent = 'Volume';
  tableHeadRow.appendChild(head7);

  tableHead.appendChild(tableHeadRow);

  const tableBody = document.createElement('tbody');

  let exist = false;

  btnDisplay.addEventListener('click', () => {
    clearElements(tableData);
    tableData.appendChild(tableHead);
    tableData.appendChild(tableBody);
    if (exist) {
      tableData.setAttribute('style', 'visibility: hidden');
      exist = false;
    } else {
      tableData.setAttribute('style', 'visibility: visible');
      exist = true;
    }
  });

  stocks.forEach((stock) => {
    let tableBodyRow = document.createElement('tr');
    let body1 = document.createElement('td');
    body1.textContent = stock.date;
    tableBodyRow.appendChild(body1);
    let body2 = document.createElement('td');
    body2.textContent = stock.open;
    tableBodyRow.appendChild(body2);
    let body3 = document.createElement('td');
    body3.textContent = stock.high;
    tableBodyRow.appendChild(body3);
    let body4 = document.createElement('td');
    body4.textContent = stock.low;
    tableBodyRow.appendChild(body4);
    let body5 = document.createElement('td');
    body5.textContent = stock.close;
    tableBodyRow.appendChild(body5);
    let body6 = document.createElement('td');
    body6.textContent = stock.adjClose;
    tableBodyRow.appendChild(body6);
    let body7 = document.createElement('td');
    body7.textContent = stock.volume;
    tableBodyRow.appendChild(body7);
    tableBody.appendChild(tableBodyRow);
  });
}

function clearElements(main) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

export default {
  display,
};
