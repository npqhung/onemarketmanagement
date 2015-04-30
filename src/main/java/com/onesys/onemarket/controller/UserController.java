package com.onesys.onemarket.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onesys.onemarket.model.User;
import com.onesys.onemarket.utils.AppResponse;

@Controller
@RequestMapping("/service")
public class UserController {
	
	
	@RequestMapping(value="/getUsers")
	@ResponseBody
	public AppResponse getUsers(HttpServletRequest request){
	
		AppResponse response = new AppResponse();
		
		ArrayList<User> data = new ArrayList<User>();
		
		User user1 = new User();
		user1.setId("1");
		user1.setFirstname("User 1");
		
		data.add(user1);
		
		User user2 = new User();
		user2.setId("2");
		user2.setFirstname("User 2");
		
		data.add(user2);
		
		response.setSuccess(true);
		
		response.setData(data);
		return response;
	}
}
