package com.example.railwaysreservation.entity;

import java.util.List;

public class SeatResponse {

	private boolean isError;
	private String message;
	private Seats seat;
	private List<Seats> seatList;
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
	public Seats getSeat() {
		return seat;
	}
	public void setSeat(Seats seat) {
		this.seat = seat;
	}
	public List<Seats> getSeatList() {
		return seatList;
	}
	public void setSeatList(List<Seats> seatList) {
		this.seatList = seatList;
	}

}
