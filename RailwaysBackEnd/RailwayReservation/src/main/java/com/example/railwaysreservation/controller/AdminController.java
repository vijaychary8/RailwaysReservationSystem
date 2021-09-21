package com.example.railwaysreservation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwaysreservation.entity.AdminEntity;
import com.example.railwaysreservation.entity.AdminResponse;
import com.example.railwaysreservation.services.AdminService;
@RestController
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
	private AdminService service;

	
	@PostMapping(path = "/addAdmin")
	public AdminResponse addAdmin(@RequestBody AdminEntity admin) {
		boolean isAdded = service.serviceAddAdmin(admin);
		AdminResponse adminResponse = new AdminResponse();

		if (isAdded) {
			adminResponse.setError(false);
			adminResponse.setMessage("Admin record added successfully");
		} else {
			adminResponse.setError(true);
			adminResponse.setMessage("Record id not added");
		}
		return adminResponse;
	}// End of addAdmin()

	@PostMapping(path = "/login/{userName}/{password}")
	public AdminResponse adminLogin(@PathVariable String userName,@PathVariable String password) {
		boolean isLogged = service.serviceAdminLogin(userName,password);
		AdminResponse adminResponse = new AdminResponse();
		

		if (isLogged) {
			adminResponse.setError(false);
			adminResponse.setMessage("login successfully");
		} else {
			adminResponse.setError(true);
			adminResponse.setMessage("user not added");
		}
		return adminResponse;
	}
	
	


}
