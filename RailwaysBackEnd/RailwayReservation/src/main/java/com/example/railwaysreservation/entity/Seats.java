package com.example.railwaysreservation.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@Table(name = "Seats_Info")
@JsonRootName("SeatsInfo")
@JsonInclude(content = Include.NON_NULL)
public class Seats implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3285263772016711391L;

	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	@Column(name = "SeatId")
	@JsonProperty
	private int trainId;

	@Column(name = "TrainCode")
	@JsonProperty
	private String trainCode;

	@Column(name = "noOfSeats")
	@JsonProperty
	private int noOfSeats;

	@Column(name = "Compartment")
	@JsonProperty
	private String compartment;

	@Column(name = "seatType")
	@JsonProperty
	private String seatType;

	@JsonProperty
	private int sun;

	@JsonProperty
	private int  mon;

	@JsonProperty
	private int tue;

	@JsonProperty
	private int wed;

	@JsonProperty
	private int thur;

	@JsonProperty
	private int fri;

	@JsonProperty
	private int sat;



	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	public int getTrainId() {
		return trainId;
	}

	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}

	public String getTrainCode() {
		return trainCode;
	}

	public void setTrainCode(String trainCode) {
		this.trainCode = trainCode;
	}

	public String getCompartment() {
		return compartment;
	}

	public void setCompartment(String compartment) {
		this.compartment = compartment;
	}

	public String getSeatType() {
		return seatType;
	}

	public void setSeatType(String seatType) {
		this.seatType = seatType;
	}

	public int getSun() {
		return sun;
	}

	public void setSun(int sun) {
		this.sun = sun;
	}

	public int getMon() {
		return mon;
	}

	public void setMon(int mon) {
		this.mon = mon;
	}

	public int getTue() {
		return tue;
	}

	public void setTue(int tue) {
		this.tue = tue;
	}

	public int getWed() {
		return wed;
	}

	public void setWed(int wed) {
		this.wed = wed;
	}

	public int getThur() {
		return thur;
	}

	public void setThur(int thur) {
		this.thur = thur;
	}

	public int getFri() {
		return fri;
	}

	public void setFri(int fri) {
		this.fri = fri;
	}

	public int getSat() {
		return sat;
	}

	public void setSat(int sat) {
		this.sat = sat;
	}


}
