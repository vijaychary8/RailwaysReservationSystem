package com.example.railwaysreservation.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class AdminResponse {

	private boolean isError;
	private String message;
	private AdminEntity admin;
	private List<AdminEntity> adminListInfo;
	private int attempts;

	public int getAttemptMessage() {
		return attempts;
	}

	public void setAttemptMessage(int attempts) {
		this.attempts = attempts;
	}

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

	public AdminEntity getAdmin() {
		return admin;
	}

	public void setAdmin(AdminEntity admin) {
		this.admin = admin;
	}

	public List<AdminEntity> getAdminListInfo() {
		return adminListInfo;
	}

	public void setAdminListInfo(List<AdminEntity> adminListInfo) {
		this.adminListInfo = adminListInfo;
	}

}
