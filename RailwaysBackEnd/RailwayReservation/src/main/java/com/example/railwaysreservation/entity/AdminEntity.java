package com.example.railwaysreservation.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@SuppressWarnings("serial")
@Entity
@Table(name = "Admin_Info")
@JsonRootName("AdminInfo")
@JsonInclude(content = Include.NON_NULL)

public class AdminEntity implements Serializable {

	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	@Column(name = "Id")
	@JsonProperty
	private int id;

	@Column(name = "adminName")
	@JsonProperty
	private String name;
	
	@Column(name = "username")
	@JsonProperty
	private String userName;

	@Column(name = "password")
	@JsonProperty
	private String password;

	private int totalAttempts = 3;

	public int getTotalAttempts() {
		return totalAttempts;
	}

	public void setTotalAttempts(int totalAttempts) {
		this.totalAttempts = totalAttempts;
	}

	public int getId() {
		return id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setUserId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
