package com.weather.yourforecast.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weather.yourforecast.model.WeatherRecord;
import com.weather.yourforecast.repository.WeatherMemoryRepository;
import com.weather.yourforecast.service.WeatherService;

@Service
public class WeatherServiceImpl implements WeatherService {

	@Autowired
	private WeatherMemoryRepository weatherMemoryRepository;

	@Override
	public List<WeatherRecord> fetchWeatherRecoresByCity(String city) {
		return this.weatherMemoryRepository.fetchWeatherRecoresByCity(city);
	}

}
