package com.example.railwaysreservation.entity;

import java.io.Serializable;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@SuppressWarnings("serial")
@Entity
@Table(name = "station_info")
@JsonRootName("StationInfo")
@JsonInclude(content = Include.NON_NULL)
public class StationEntity implements Serializable {

	@Id
	@Column(name = "stationName")
	@JsonProperty
	private String stationName;

	@Column(name = "stationCode", unique = true)
	@JsonProperty
	private String stationCode;

	@Column(name = "arrives")
	@JsonProperty
	private LocalTime arrives;

	@Column(name = "departure")
	@JsonProperty
	private LocalTime departure;

	@Column(name = "halt")
	@JsonProperty
	private int halt;

	@Column(name = "distance")
	@JsonProperty
	private int distance;

	@Column(name = "trainCode")
	@JsonProperty
	private String trainCode;

//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "trainName")
//	private TrainEntity train;

//	@OneToOne(cascade=CascadeType.ALL) 
//	@JoinColumn(name="statusId")
//	private StatusEntity status;

	public String getStationName() {
		return stationName;
	}

	public String getTrainCode() {
		return trainCode;
	}

	public void setTrainCode(String trainCode) {
		this.trainCode = trainCode;
	}

	public LocalTime getArrives() {
		return arrives;
	}

	public void setArrives(LocalTime arrives) {
		this.arrives = arrives;
	}

	public LocalTime getDeparture() {
		return departure;
	}

	public void setDeparture(LocalTime departure) {
		this.departure = departure;
	}

	public int getHalt() {
		return halt;
	}

	public void setHalt(int halt) {
		this.halt = halt;
	}

	public int getDistance() {
		return distance;
	}

	public void setDistance(int distance) {
		this.distance = distance;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}

	public String getStationCode() {
		return stationCode;
	}

	public void setStationCode(String stationCode) {
		this.stationCode = stationCode;
	}

}
