package com.example.railwaysreservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwaysreservation.entity.SeatResponse;
import com.example.railwaysreservation.entity.Seats;
import com.example.railwaysreservation.entity.StationEntity;
import com.example.railwaysreservation.entity.StationResponse;
import com.example.railwaysreservation.entity.TicketPrice;
import com.example.railwaysreservation.entity.TicketPriceResponse;
import com.example.railwaysreservation.entity.TrainEntity;
import com.example.railwaysreservation.entity.TrainResponse;
import com.example.railwaysreservation.services.TrainService;

/**
 * @author vijmunag Train Controller
 */
@RestController
@CrossOrigin("*")
public class TrainController {

	@Autowired
	private TrainService service;

	/**
	 * this method is to add the Train
	 * 
	 * @param train
	 * @return TrainResponse
	 */
	@PostMapping(path = "/addTrain")
	public TrainResponse addTrain(@RequestBody TrainEntity train) {
		boolean isAdded = service.serviceAddTrain(train);
		TrainResponse trainResponse = new TrainResponse();

		if (isAdded) {
			trainResponse.setError(false);
			trainResponse.setMessage("train record added successfully");
		} else {
			trainResponse.setError(true);
			trainResponse.setMessage("Record id not added");
		}
		return trainResponse;
	}

	/**
	 * this method is used to get the train details by the trainName
	 * 
	 * @param trainName
	 * @return TrainResponse
	 */
	@GetMapping(path = "/gettrain/{trainName}")
	public TrainResponse getTrainByName(@PathVariable String trainName) {
		TrainEntity info = service.serviceGetTrain(trainName);
		TrainResponse trainResponse = new TrainResponse();

		if (info != null) {
			trainResponse.setError(false);
			trainResponse.setMessage("Got the record");
			trainResponse.setTrain(info);
		} else {
			trainResponse.setError(true);
			trainResponse.setMessage("train id is not present");
			trainResponse.setTrain(info);
		}
		return trainResponse;
	}// End of getAdminById()

	/**
	 * this method is used to update the details of train
	 * 
	 * @param train
	 * @return trainResponse
	 */
	@PutMapping(path = "/updatetrain")
	public TrainResponse updateTrain(@RequestBody TrainEntity train) {
		boolean isUpdated = service.serviceUpdateTrain(train);
		TrainResponse trainResponse = new TrainResponse();

		if (isUpdated) {
			trainResponse.setError(false);
			trainResponse.setMessage("train record updated successfully");
		} else {
			trainResponse.setError(true);
			trainResponse.setMessage("train is not updated");
		}
		return trainResponse;
	}

	/**
	 * This method is used to delete the train t=details
	 * 
	 * @param trainName
	 * @return TrainResponse
	 */
	@DeleteMapping(path = "/deletetrain/{trainName}")
	public TrainResponse deleteTrain(@PathVariable String trainName) {
		boolean isDeleted = service.serviceDeleteTrain(trainName);
		TrainResponse stationResponse = new TrainResponse();

		if (isDeleted) {
			stationResponse.setError(false);
			stationResponse.setMessage("Train record deleted successfully");
		} else {
			stationResponse.setError(true);
			stationResponse.setMessage("Record id not deleted");
		}
		return stationResponse;
	}

	/**
	 * this method is used to get all the trains details
	 * 
	 * @return TrainResponse
	 */
	@GetMapping(path = "/getalltrain")

	public TrainResponse getAllTrains() {
		List<TrainEntity> list = service.serviceGetAllTrain();
		TrainResponse trainResponse = new TrainResponse();
		if (list != null) {
			trainResponse.setError(false);
			trainResponse.setMessage("All train record");
			trainResponse.setTrainList(list);
		} else {
			trainResponse.setError(true);
			trainResponse.setMessage("train record is not present");
			trainResponse.setTrainList(list);
		}
		return trainResponse;
	}

	/**
	 * this method is used to get the station details of train
	 * 
	 * @param trainCode
	 * @return
	 */
	@GetMapping(path = "/gettrainstations/{trainCode}")
	public StationResponse getTrainStation(@PathVariable String trainCode) {
		List<StationEntity> info = service.serviceGetTrainStation(trainCode);
		StationResponse trainResponse = new StationResponse();

		if (info != null) {
			trainResponse.setError(false);
			trainResponse.setMessage("Got the record");
			trainResponse.setStationList(info);
		} else {
			trainResponse.setError(true);
			trainResponse.setMessage("train code is not present");
			trainResponse.setStationList(info);
		}
		return trainResponse;
	}

	/**
	 * this method is used to get the details of train based on the code
	 * 
	 * @param trainCode
	 * @return TrainResponse
	 */
	@GetMapping(path = "/gettrainbycode/{trainCode}")
	public TrainResponse getTrain(@PathVariable String trainCode) {
		TrainEntity info = service.serviceGetTrainByCode(trainCode);
		TrainResponse trainResponse = new TrainResponse();

		if (info != null) {
			trainResponse.setError(false);
			trainResponse.setMessage("Got the record");
			trainResponse.setTrain(info);
		} else {
			trainResponse.setError(true);
			trainResponse.setMessage("train code is not present");
			trainResponse.setTrain(info);
		}
		return trainResponse;
	}

	/**
	 * This method is used to add the seats
	 * 
	 * @param seat
	 * @return SeatResponse
	 */
	@PostMapping(path = "/addseat")
	public SeatResponse addSeats(@RequestBody Seats seat) {
		boolean isAdded = service.serviceAddTrain(seat);
		String trainCode = seat.getTrainCode();
		System.out.println(trainCode);

		SeatResponse seatResponse = new SeatResponse();

		if (isAdded) {

			seatResponse.setError(false);
			seatResponse.setMessage("Station record added successfully");
		} else {
			seatResponse.setError(true);
			seatResponse.setMessage("Record id not added");
		}
		return seatResponse;
	}

	/**
	 * this method is used to get all the seats details
	 * @return SeatResponse
	 */
	@GetMapping(path = "/getallsetdetails")

	public SeatResponse getAllSeats() {
		List<Seats> list = service.getAllSeats();
		SeatResponse seatResponse = new SeatResponse();
		if (list != null) {
			seatResponse.setError(false);
			seatResponse.setMessage("All train record");
			seatResponse.setSeatList(list);
		} else {
			seatResponse.setError(true);
			seatResponse.setMessage("train record is not present");
			seatResponse.setSeatList(list);
		}
		return seatResponse;
	}

	/**
	 * 
	 * this method is used to get the seat details of particular train
	 * @param trainCode
	 * @return SeatResponse
	 */
	@GetMapping(path = "/gettrainseats/{trainCode}")
	public SeatResponse getTrainSeats(@PathVariable int trainCode) {
		Seats info = service.getTrainSeats(trainCode);
		SeatResponse seatResponse = new SeatResponse();

		if (info != null) {
			seatResponse.setError(false);
			seatResponse.setMessage("Got the record");
			seatResponse.setSeat(info);
		} else {
			seatResponse.setError(true);
			seatResponse.setMessage("train code is not present");
			seatResponse.setSeat(info);
		}
		return seatResponse;
	}// End of getAdminById()

	/**
	 * this method is used to update the seat details
	 * @param seat
	 * @return SeatResponse
	 */
	@PutMapping(path = "/updateseat")
	public SeatResponse updateSeat(@RequestBody Seats seat) {
		boolean isUpdated = service.updateSeat(seat);
		SeatResponse seatResponse = new SeatResponse();

		if (isUpdated) {
			seatResponse.setError(false);
			seatResponse.setMessage("train record updated successfully");
		} else {
			seatResponse.setError(true);
			seatResponse.setMessage("train is not updated");
		}
		return seatResponse;
	}

	/**
	 * this method is used to add price 
	 * @param price
	 * @return TicketPriceResponse
	 */
	@PostMapping(path = "/addprice")
	public TicketPriceResponse addPrice(@RequestBody TicketPrice price) {
		boolean isAdded = service.addPrice(price);

		TicketPriceResponse ticketPriceResponse = new TicketPriceResponse();

		if (isAdded) {

			ticketPriceResponse.setError(false);
			ticketPriceResponse.setMessage("price record added successfully");
		} else {
			ticketPriceResponse.setError(true);
			ticketPriceResponse.setMessage("Record id not added");
		}
		return ticketPriceResponse;
	}

	/**
	 *  this method is used to get the price of ticket based on trainCode, compartment,seatType
	 * @param trainCode
	 * @param compartment
	 * @param seatType
	 * @return TicketPrice
	 */
	@GetMapping(path = "/getprice/{trainCode}/{compartment}/{seatType}")
	public TicketPriceResponse getTrainSeats(@PathVariable String trainCode, @PathVariable String compartment,
			@PathVariable String seatType) {
		System.out.println(trainCode + "" + compartment + "" + seatType);

		TicketPrice info = service.getPrice(trainCode, compartment, seatType);
		TicketPriceResponse ticketPriceResponse = new TicketPriceResponse();

		if (info != null) {
			ticketPriceResponse.setError(false);
			ticketPriceResponse.setMessage("Got the record");
			ticketPriceResponse.setTicket(info);
		} else {
			ticketPriceResponse.setError(true);
			ticketPriceResponse.setMessage("train code is not present");
			ticketPriceResponse.setTicket(info);
		}
		return ticketPriceResponse;
	}// End of getAdminById()

}
