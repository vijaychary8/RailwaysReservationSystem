package com.example.railwaysreservation.entity;

import java.util.List;

public class StationResponse {
	
	private boolean isError;
	private String message;
	private StationEntity station;
	private List<StationEntity> stationList;
	public boolean isError() {
		return isError;
	}
	public void setError(boolean isError) {
		this.isError = isError;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public StationEntity getStation() {
		return station;
	}
	public void setStation(StationEntity station) {
		this.station = station;
	}
	public List<StationEntity> getStationList() {
		return stationList;
	}
	public void setStationList(List<StationEntity> stationList) {
		this.stationList = stationList;
	}
	
	


}
