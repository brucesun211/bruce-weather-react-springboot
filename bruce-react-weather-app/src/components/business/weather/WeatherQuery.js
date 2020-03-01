import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SelectListGroup from '../../common/SelectListGroup';
import DatePickerGroup from '../../common/DatePickerGroup';

import CheckBox from '../../common/CheckBox';
import Table from '../../common/Table';
import { AUS_CITY_OPTIONS } from '../../utils/dataSource';


const WeatherQuery = () => {
  const KTS_KILO_RATE = 1.852;
  const CELSIUS_FAHRENHEIT_RATE = 32;
  const [city, setCity] = useState("");
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [kts, setKts] = useState(true);
  const [celsius, setCelsius] = useState(true);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    //console.log('start date: ' + startDate + "  end date: " + endDate);
    validateStartDateLessEqualsThanEndDate();
  }, [startDate, endDate]);



  useEffect(() => {
    if (city === '') { setWeatherDataList([]); } else {
      fetchWeatherRecordsByCity(city);
    }
  }, [city]);

  const setKMHAndFahrenheitAndDate = (list) => {
    if (list) {
      list.map(item => {
        item.kmh = (Number(item.windSpeedKts) * KTS_KILO_RATE).toFixed(2);
        item.fahrenheit = (Number(item.temperatureCelsius) * CELSIUS_FAHRENHEIT_RATE).toFixed(2);
        item.datetime = new Date(item.dateTimeUtc);
        return item;
      })
    }
    return list;
  }

  const handleCityChange = e => {

    setCity(e.target.value);
  }

  const handleDateChange = (e) => {
    if (e.target.name === 'startDate') {
      setStartDate(e.target.value);
    } else if (e.target.name === 'endDate') {
      setEndDate(e.target.value);
    }
  }

  const validateStartDateLessEqualsThanEndDate = () => {

    if (startDate && startDate.length > 0 && endDate && endDate.length > 0) {
      if (new Date(startDate + ' 00:00') > new Date(endDate + ' 23:59')) {
        setErrors({ dateRange: "Start date must be before End date" });
        return;
      } else {
        setErrors({});
        return;
      }
    }
    setErrors({});
  }




  const handleCheckBoxChange = e => {
    if (e.target.name === 'kts') {
      setKts(!kts);
    } else if (e.target.name === 'celsius') {
      setCelsius(!celsius);
    }
  }

  const fetchWeatherRecordsByCity = async (cityName) => {
    const response = await axios.get(`/api/weathers/cities/${cityName}`);
    setWeatherDataList(response.data ? setKMHAndFahrenheitAndDate(response.data) : []);
  }


  return (

    <div className="container">


      <div className="row">
        <div className="col-12 mt-3">
          <h4 className="display-5 text-center">AUSTRALIA WEATHER FORECAST</h4>
          <p className="text-center font-weight-light mt-3 mb-3">
            Bruce is providing Australia weather forecast to you.
             </p>
          <SelectListGroup
            name="city"
            value={city}

            options={AUS_CITY_OPTIONS}
            onChange={handleCityChange}
            info="Choose a city and then see weather forecast..."
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <DatePickerGroup
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            error={errors.dateRange}
            info="Select Start Date"
          />
        </div>
        <div className="col-md-6">
          <DatePickerGroup
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            error={errors.dateRange}
            info="Select End Date"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <CheckBox
            name="kts"
            value={kts}
            options={['KNOTS', 'KM/H']}
            info="On( KNOTS ),OFF( KM/H )"
            onChange={handleCheckBoxChange}
          />
        </div>
        <div className="col-md-6">
          <CheckBox
            name="celsius"
            value={celsius}
            options={['Celsius', 'Fahrenheit']}
            info="On( Celsius ),OFF( Fahrenheit )"
            onChange={handleCheckBoxChange}
          />
        </div>
      </div>
      <div className="row">
        <Table dataList={weatherDataList} isKTS={kts} isCelsius={celsius} startDate={startDate} endDate={endDate} hasError={Object.keys(errors).length > 0} />
      </div>

    </div>
  )
}

export default WeatherQuery
