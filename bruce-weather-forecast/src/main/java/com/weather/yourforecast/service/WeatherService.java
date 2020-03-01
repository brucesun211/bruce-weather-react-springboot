package com.weather.yourforecast.service;

import java.util.List;

import com.weather.yourforecast.model.WeatherRecord;

public interface WeatherService {
	
	public List<WeatherRecord> fetchWeatherRecoresByCity(String city);

}
