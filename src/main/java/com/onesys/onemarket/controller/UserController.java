package com.onesys.onemarket.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onesys.onemarket.model.User;
import com.onesys.onemarket.service.UserService;
import com.onesys.onemarket.utils.AppResponse;

@Controller
@RequestMapping("/service")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value="/getUsers")
	@ResponseBody
	public AppResponse getUsers(HttpServletRequest request,
			@RequestParam("sort") String sort, @RequestParam("dir") String dir){
	
		AppResponse response = new AppResponse();
		
		List<User> data = userService.getAllUser(sort, dir);
		
		response.setSuccess(true);
		
		response.setData(data);
		return response;
	}
}
