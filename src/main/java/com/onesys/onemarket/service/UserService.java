package com.onesys.onemarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onesys.onemarket.dao.UserDAO;
import com.onesys.onemarket.model.User;

@Service
public class UserService {
	
	@Autowired
	UserDAO userDAO;
	
	public List<User> getAllUser(String sort, String dir){
		return userDAO.getAllUser(sort, dir);
	}

}
