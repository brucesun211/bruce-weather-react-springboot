import React from 'react';

const CurrencyItem = ({ currency }) => {
  return (
    <li className="currency " id={currency.abbrevation}>
      <img src={currency.flag} className="flag" alt="" />
      <div className="info">
        <p className="input"><span className="currency-symbol">{currency.symbol}</span><input placeholder="0.0000" value={currency.value} disabled /></p>
        <p className="currency-name">{currency.abbrevation} - {currency.name}</p>
        <p className="base-currency-rate">1 AUD = {currency.rate} {currency.abbrevation}</p>
      </div>
      <span className="close">×</span>
    </li>
  )
}

export default CurrencyItem;
