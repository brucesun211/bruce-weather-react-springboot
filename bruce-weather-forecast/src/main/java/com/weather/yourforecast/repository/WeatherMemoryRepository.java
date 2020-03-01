package com.weather.yourforecast.repository;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.weather.yourforecast.model.WeatherRecord;

@Repository
public class WeatherMemoryRepository {

	private List<WeatherRecord> weatheRecords = new ArrayList<>();

	public WeatherMemoryRepository() {
		System.out.println("!!!!!!!!!!! ----------- Load Weather Memory DB -------------!!!!!!");
		try {
			InputStream inputStream = new FileInputStream("src/main/resources/data/weather_forecast_timeseries.csv");
			InputStreamReader reader = new InputStreamReader(inputStream);

			CSVReader csvReader = new CSVReaderBuilder(reader).withSkipLines(1).build();

			csvReader.readAll().forEach(row -> {
				WeatherRecord wRecord = new WeatherRecord();
				wRecord.setDateTimeUtc(row[0]);
				wRecord.setLocationType(row[1]);
				wRecord.setLocationCode(row[2]);
				wRecord.setLocationName(row[3]);
				wRecord.setWindDirection(row[4]);
				wRecord.setWindSpeedKts(row[5]);
				wRecord.setTemperatureCelsius(row[6]);
				wRecord.setCloudCoverPercentage(row[7]);
				wRecord.setRelativeHumidityPercentage(row[8]);
				wRecord.setIcon(row[9]);
				wRecord.setPrecipitationChancePercentage(row[10]);
				wRecord.setPressureHpa(row[11]);

				weatheRecords.add(wRecord);
			});

		} catch (Exception e) {
			e.printStackTrace();

		}

	}

	public List<WeatherRecord> fetchWeatherRecoresByCity(String city) {
		return this.weatheRecords.stream().filter(item -> item.getLocationName().equalsIgnoreCase(city))
				.collect(Collectors.toList());
	}

}
