package com.weather.yourforecast.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weather.yourforecast.model.WeatherRecord;
import com.weather.yourforecast.service.WeatherService;

@RestController
@RequestMapping("/api/weathers")
public class WeatherController {
	@Autowired
	private WeatherService weatherService;

	@GetMapping("/cities/{city_name}")
	public List<WeatherRecord> findWeatherRecordsByCityName(@PathVariable String city_name) {
		return this.weatherService.fetchWeatherRecoresByCity(city_name);
	}

}
