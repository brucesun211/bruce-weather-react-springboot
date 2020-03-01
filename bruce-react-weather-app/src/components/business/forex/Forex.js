import React, { useState, useEffect } from 'react';
import './css/forex.css';
//import Currency from './models/Currency.ts';
import CurrencyItem from './CurrencyItem';
import axios from 'axios';
import classnames from 'classnames';

import ForexExchangeTable from './ForexExchangeTable';

import Chart from "react-apexcharts";

const Forex = () => {
  const [ausDollorAmount, setAusDollorAmount] = useState(0);
  const [currencyRateDate, setCurrencyRateDate] = useState('');
  const [error, setError] = useState(null);
  const [exchangeTableData, setExchangeTableData] = useState([]);
  const [currencyList, setCurrencyList] = useState([{
    name: 'US Dollar',
    rate: 0,
    symbol: '$',
    abbrevation: 'USD',
    value: 0,
    flag: 'http://www.geonames.org/flags/l/us.gif'
  },
  {
    name: 'British Pound',
    rate: 0,
    symbol: '£',
    abbrevation: 'GBP',
    value: 0,
    flag: 'http://www.geonames.org/flags/l/uk.gif'
  },
  {
    name: 'Canadian Dollar',
    rate: 0,
    symbol: '$',
    abbrevation: 'CAD',
    value: 0,
    flag: 'http://www.geonames.org/flags/l/ca.gif'
  },
  {
    name: 'Euro',
    rate: 0,
    symbol: '€',
    abbrevation: 'EUR',
    value: 0,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'
  }
    ,
  {
    name: 'New Zealand Dollar',
    rate: 0,
    symbol: '$',
    abbrevation: 'NZD',
    value: 0,
    flag: 'http://www.geonames.org/flags/l/nz.gif'
  },
  {
    name: 'Swiss Franc',
    rate: 0,
    symbol: '₣',
    abbrevation: 'CHF',
    value: 0,
    flag: 'https://www.geonames.org/flags/x/ch.gif'
  },
  {
    name: 'Singapore',
    rate: 0,
    symbol: '$',
    abbrevation: 'SGD',
    value: 0,
    flag: 'https://www.geonames.org/flags/x/sg.gif'
  }
  ]);

  const [seriesData, setSeriesData] = useState([{
    data: [0, 0, 0, 0, 0, 0, 0, 0]
  }]);
  const [chartOptions, setChartOptions] = useState(
    {

      chart: {
        type: 'bar',
        height: 380
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      colors: ['#33b2df', '#d4526e', '#13d8aa', '#f9a3a4', '#90ee7e',
        '#f48024', '#ff0018', '#f9a3a4'
      ],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['Australia', 'USA', 'United Kingdom', 'Canada', 'Europe', 'New Zealand', 'Swiss', 'Singapore'
        ],
        labels: {
          show: true,
          style: {

            colors: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']

          }
        }

      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: 'Custom DataLabels',
        align: 'center',
        floating: true
      },
      subtitle: {
        text: 'Category Names as DataLabels inside bars',
        align: 'center',
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }
    }
  );

  const updateCurrencyList = (responseData) => {
    if (responseData && responseData.rates) {
      const audRate = responseData.rates["AUD"];
      const newCurrencyList = [...currencyList];
      newCurrencyList.forEach(currency => {
        let currencyRate;
        if (currency.abbrevation === 'EUR') {
          currencyRate = 1;
        } else {
          currencyRate = responseData.rates[currency.abbrevation];
        }
        currency.rate = (currencyRate / audRate).toFixed(2);
        currency.value = (ausDollorAmount * currencyRate / audRate).toFixed(2);
      });

      setCurrencyList(newCurrencyList);
      const newChartSeries = newCurrencyList.map(item => item.value);
      newChartSeries.unshift(Number(ausDollorAmount).toFixed(2));

      setSeriesData([{
        data: newChartSeries
      }]);

      const tmpCurrencyList = [...newCurrencyList];
      tmpCurrencyList.unshift({
        name: 'AUS Dollar',
        rate: 1,
        symbol: '$',
        abbrevation: 'AUD',
        value: Number(ausDollorAmount).toFixed(2),
      });
      setExchangeTableData(tmpCurrencyList);

    }

  }

  const validateInput = () => {
    if (isNaN(ausDollorAmount) || ausDollorAmount < 0) {
      setError("* Must be positive number");
      return false;
    }
    setError(null);
    return true;
  }

  const fetchCurrencyData = async () => {
    const response = await axios.get('https://api.exchangeratesapi.io/latest');
    (response.data && response.data.date) ?
      setCurrencyRateDate(response.data.date) : setCurrencyRateDate("");
    updateCurrencyList(response.data);
  }


  useEffect(() => { if (validateInput()) { fetchCurrencyData(); } }, [ausDollorAmount]);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <div className="my-container pr-2">
            <div className="header">
              <h3>AUD Converter</h3>
            </div>
            <div className="date">{currencyRateDate}</div>
            <ul className="currencies"><li className="currency base-currency" id="AUD">
              <img src="http://www.geonames.org/flags/l/au.gif" className="flag" alt="" />
              <div className="info">
                <div className="input"><span className="currency-symbol">$</span><input placeholder="0.0000" value={ausDollorAmount} onChange={e => setAusDollorAmount(e.target.value.trim())} className={classnames('', {
                  'invalid-input': error
                })} />
                  {error ? <div style={{ color: 'red', marginLeft: '4rem' }}>{error}</div> : null}
                </div>

                <p className="currency-name">AUD - Australian Dollar</p>
                <p className="base-currency-rate">1 AUD = 1 AUD</p>
              </div>
              <span className="close">×</span>
            </li>
              {currencyList.map(currency => <CurrencyItem key={currency.abbrevation} currency={currency} />)}
            </ul>

            <ul className="add-currency-list"></ul>
          </div >
        </div>
        <div className="col-md-7 col-sm-12">
          <div>
            <Chart
              options={chartOptions}
              series={seriesData}
              type="bar"
            />
          </div>
          <div className="ml-4 mt-4">
            <ForexExchangeTable exchangeTableData={exchangeTableData} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Forex; 
