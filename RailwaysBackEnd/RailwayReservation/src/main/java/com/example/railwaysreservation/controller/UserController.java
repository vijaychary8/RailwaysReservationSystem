package com.example.railwaysreservation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwaysreservation.entity.UserEntity;
import com.example.railwaysreservation.entity.UserResponse;
import com.example.railwaysreservation.services.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService service;

	
	@PostMapping(path = "/adduser")
	public UserResponse addUser(@RequestBody UserEntity user) {
		boolean isAdded = service.addUser(user);
		UserResponse userResponse = new UserResponse();

		if (isAdded) {
			userResponse.setError(false);
			userResponse.setMessage("Registerd Sucessfully");
		} else {
			userResponse.setError(true);
			userResponse.setMessage("Record id not added");
		}
		return userResponse;
	}

	@PostMapping(path = "/userlogin/{emailId}/{password}")
	public UserResponse adminLogin(@PathVariable String emailId,@PathVariable String password) {
		boolean isLogged = service.userLogin(emailId,password);
		UserResponse userResponse = new UserResponse();
		

		if (isLogged) {
			userResponse.setError(false);
			userResponse.setMessage("login successfully");
		} else {
			userResponse.setError(true);
			userResponse.setMessage("user not added");
		}
		return userResponse;
	}
	

	

}
