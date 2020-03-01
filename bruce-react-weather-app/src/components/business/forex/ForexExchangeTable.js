import React from 'react';

const ForexExchangeTable = ({ exchangeTableData }) => {
  let forexExchageContent = null;
  if (exchangeTableData && exchangeTableData[0] && exchangeTableData[0].value) {
    let forexAUDAmount = exchangeTableData[0].value;
    forexExchageContent = exchangeTableData.map((item, index) => {
      const imgSrc = `/img/country/${item.abbrevation}.svg`;
      return (<tr key={`forex-${index + 1}`}>
        <th scope="row">{index + 1}</th>
        <td><img src="/img/country/AUD.svg" alt="" /> $ {" "}{forexAUDAmount}</td>
        <td><img src={imgSrc} alt="" /> {item.symbol}{" "}{item.value}</td>
        <td>{item.rate}</td>
      </tr >)

    });
    forexExchageContent.shift();
  }

  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FROM</th>
            <th scope="col">TO</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {forexExchageContent}
        </tbody>
      </table>
    </div>
  )
}

export default ForexExchangeTable 
