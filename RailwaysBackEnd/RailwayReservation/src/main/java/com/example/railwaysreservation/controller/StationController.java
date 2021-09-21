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

import com.example.railwaysreservation.entity.StationEntity;
import com.example.railwaysreservation.entity.StationResponse;
import com.example.railwaysreservation.entity.TicketEntity;
import com.example.railwaysreservation.services.StationService;

/**
 * Station Controller
 * 
 * @author vijmunag
 *
 */
@RestController
@CrossOrigin("*")
public class StationController {
	@Autowired
	private StationService service;


	
	@PostMapping(path = "/addstation")
	public StationResponse addStation(@RequestBody StationEntity station) {
		boolean isAdded = service.serviceAddstation(station);
		StationResponse  stationResponse = new StationResponse();

		if (isAdded) {
			stationResponse.setError(false);
			stationResponse.setMessage("Station record added successfully");
		} else {
			stationResponse.setError(true);
			stationResponse.setMessage("Record id not added");
		}
		return stationResponse;
	}
	
	@GetMapping(path = "/getstation/{stationCode}")
	public StationResponse getStation( @PathVariable String  stationCode) {
		StationEntity info = service.serviceGetStation(stationCode);
		StationResponse stationResponse = new StationResponse();
		
		if(info!=null) {
			stationResponse.setError(false);
			stationResponse.setMessage("Got the record");
			stationResponse.setStation(info);
		}else {
			stationResponse.setError(true);
			stationResponse.setMessage("Admin id is not present");
			stationResponse.setStation(info);
		}
		return stationResponse;
	}// End of getAdminById()


	@PutMapping(path = "/updatestation")
	public StationResponse updateStation(@RequestBody StationEntity station) {
		boolean isUpdated = service.serviceUpdateStation(station);
		StationResponse stationResponse = new StationResponse();

		if (isUpdated) {
			stationResponse.setError(false);
			stationResponse.setMessage("station record updated successfully");
		} else {
			stationResponse.setError(true);
			stationResponse.setMessage("station is not updated");
		}
		return stationResponse;
	}
	
	/**
	 * @param stationName
	 * @return
	 */
	@DeleteMapping(path = "/deleteStation/{stationName}")
	public StationResponse deleteLandBySurveyNumber(@PathVariable String stationName) {
		boolean isDeleted = service.serviceDeleteLand(stationName);
		StationResponse stationResponse = new StationResponse();
		
			if (isDeleted) {
				stationResponse.setError(false);
				stationResponse.setMessage("station record deleted successfully");
			} else {
				stationResponse.setError(true);
				stationResponse.setMessage("Record id not deleted");
			}
			return stationResponse;
	}
	@GetMapping(path = "/getallstations")

	public StationResponse getAllStations() {
		List<StationEntity> list = service.serviceGetAllStations();
		StationResponse stationResponse = new StationResponse();
		if (list != null) {
			stationResponse.setError(false);
			stationResponse.setMessage("All stations record");
			stationResponse.setStationList(list);
		} else {
			stationResponse.setError(true);
			stationResponse.setMessage("Land record is not present");
			stationResponse.setStationList(list);
		}
		return stationResponse;
	}

	@PostMapping(path = "/addticket")
	public StationResponse addTicket(@RequestBody TicketEntity ticket) {
		boolean isAdded = service.addTicket(ticket);
		StationResponse  stationResponse = new StationResponse();

		if (isAdded) {
			stationResponse.setError(false);
			stationResponse.setMessage("Station record added successfully");
		} else {
			stationResponse.setError(true);
			stationResponse.setMessage("Record id not added");
		}
		return stationResponse;
	}

}
