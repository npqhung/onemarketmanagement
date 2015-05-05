package com.onesys.onemarket.formmodel;

import java.util.Date;

public class UserForm {

	private Integer id;	
	private String username;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private Boolean staffstatus;
	private Date datejoined;
	private Date lastlogin;
	private String groupname;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getStaffstatus() {
		return staffstatus;
	}
	public void setStaffstatus(Boolean staffstatus) {
		this.staffstatus = staffstatus;
	}
	public Date getDatejoined() {
		return datejoined;
	}
	public void setDatejoined(Date datejoined) {
		this.datejoined = datejoined;
	}
	public Date getLastlogin() {
		return lastlogin;
	}
	public void setLastlogin(Date lastlogin) {
		this.lastlogin = lastlogin;
	}
	public String getGroupname() {
		return groupname;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	
	

}
