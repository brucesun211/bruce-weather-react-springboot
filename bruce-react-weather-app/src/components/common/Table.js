import React from 'react';

//TODO: Refact code ,too long
const filterDataListByDateRange = (dataList, startDate, endDate) => {
  if (startDate === '' && endDate === '') {
    return dataList;
  }

  if (startDate && startDate.length > 0 && endDate && endDate.length > 0) {
    const sDate = new Date(startDate + ' 00:00');
    const eDate = new Date(endDate + ' 23:59')
    if (sDate <= eDate) {
      const filteredDataList = dataList.filter(item => {
        if ((item.datetime >= sDate) && (item.datetime <= eDate)) {
          return item;
        }
      });
      return filteredDataList;
    }
    return dataList;
  } else if ((startDate && startDate.length > 0) && endDate === '') {
    const sDate = new Date(startDate + ' 00:00');
    const filteredDataList = dataList.filter(item => {
      if ((item.datetime >= sDate)) {
        return item;
      }
    });
    return filteredDataList;
  } else if ((endDate && endDate.length > 0) && startDate === '') {
    const eDate = new Date(endDate + ' 23:59');
    const filteredDataList = dataList.filter(item => {
      if ((item.datetime <= eDate)) {
        return item;
      }
    });
    return filteredDataList;
  }

}

const Table = ({ dataList, isKTS, isCelsius, startDate, endDate, hasError }) => {
  const filteredByDateRangeDataList = filterDataListByDateRange(dataList, startDate, endDate);
  const rows = (!hasError) ? filteredByDateRangeDataList.map(item => {
    return (
      <tr key={item.locationName + item.dateTimeUtc}>
        <td>{item.locationName}</td>
        <td>{item.dateTimeUtc}</td>
        <td>{item.precipitationChancePercentage}</td>
        <td>{isCelsius ? item.temperatureCelsius + " C" : item.fahrenheit + " F"}</td>
        <td>{isKTS ? item.windSpeedKts + " Knots" : item.kmh + " KM/H"}</td>
        <td>{item.windDirection}</td>
      </tr>
    );
  }) : null;
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">DateTime</th>
          <th scope="col">Precipitation Chance</th>
          <th scope="col">Temperature</th>
          <th scope="col">Wind Speed</th>
          <th scope="col">Wind Direction</th>
        </tr>
      </thead>
      <tbody>
        {rows && rows.length > 0 ? rows : (<tr>
          <td colSpan="6" className="text-danger">No Weather Data</td>
        </tr>)}

      </tbody>
    </table>
  )
}

export default Table;
