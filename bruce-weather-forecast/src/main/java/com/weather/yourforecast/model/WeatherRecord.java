package com.weather.yourforecast.model;

public class WeatherRecord {
	
	private String dateTimeUtc;
	private String locationType;
	private String locationCode;
	private String locationName;
	private String windDirection;
	
	private String windSpeedKts;
	private String temperatureCelsius;
	private String cloudCoverPercentage;
	private String relativeHumidityPercentage;
	private String icon;
	private String precipitationChancePercentage;
	private String pressureHpa;
	public String getDateTimeUtc() {
		return dateTimeUtc;
	}
	public void setDateTimeUtc(String dateTimeUtc) {
		this.dateTimeUtc = dateTimeUtc;
	}
	public String getLocationType() {
		return locationType;
	}
	public void setLocationType(String locationType) {
		this.locationType = locationType;
	}
	public String getLocationCode() {
		return locationCode;
	}
	public void setLocationCode(String locationCode) {
		this.locationCode = locationCode;
	}
	public String getLocationName() {
		return locationName;
	}
	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}
	public String getWindDirection() {
		return windDirection;
	}
	public void setWindDirection(String windDirection) {
		this.windDirection = windDirection;
	}
	public String getWindSpeedKts() {
		return windSpeedKts;
	}
	public void setWindSpeedKts(String windSpeedKts) {
		this.windSpeedKts = windSpeedKts;
	}
	public String getTemperatureCelsius() {
		return temperatureCelsius;
	}
	public void setTemperatureCelsius(String temperatureCelsius) {
		this.temperatureCelsius = temperatureCelsius;
	}
	public String getCloudCoverPercentage() {
		return cloudCoverPercentage;
	}
	public void setCloudCoverPercentage(String cloudCoverPercentage) {
		this.cloudCoverPercentage = cloudCoverPercentage;
	}
	public String getRelativeHumidityPercentage() {
		return relativeHumidityPercentage;
	}
	public void setRelativeHumidityPercentage(String relativeHumidityPercentage) {
		this.relativeHumidityPercentage = relativeHumidityPercentage;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getPrecipitationChancePercentage() {
		return precipitationChancePercentage;
	}
	public void setPrecipitationChancePercentage(String precipitationChancePercentage) {
		this.precipitationChancePercentage = precipitationChancePercentage;
	}
	public String getPressureHpa() {
		return pressureHpa;
	}
	public void setPressureHpa(String pressureHpa) {
		this.pressureHpa = pressureHpa;
	}
	@Override
	public String toString() {
		return "WeatherRecord [dateTimeUtc=" + dateTimeUtc + ", locationName=" + locationName + ", windDirection="
				+ windDirection + ", windSpeedKts=" + windSpeedKts + ", temperatureCelsius=" + temperatureCelsius
				+ ", precipitationChancePercentage=" + precipitationChancePercentage + "]";
	}
	
	

}
