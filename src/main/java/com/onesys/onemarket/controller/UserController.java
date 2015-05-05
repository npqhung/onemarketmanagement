package com.onesys.onemarket.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onesys.onemarket.formmodel.UserForm;
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
		
//		List<User> data = userService.getAllUser(sort, dir);
		List<UserForm> data = new ArrayList<UserForm>();
		
		UserForm user1 = new UserForm();
		user1.setId(1);
		user1.setUsername("User Name 1");
		user1.setFirstname("First Name 1");
		user1.setLastname("Last Name 1");
		user1.setEmail("user1@dgw.com");
		user1.setStaffstatus(true);
		user1.setGroupname("Admin Partner");
		user1.setDatejoined(new Date());
		user1.setLastlogin(new Date());
		data.add(user1);
		
		UserForm user2 = new UserForm();
		user2.setId(2);
		user2.setUsername("User Name 2");
		user2.setFirstname("First Name 2");
		user2.setLastname("Last Name 2");
		user2.setEmail("user2@dgw.com");
		user2.setStaffstatus(true);
		user2.setGroupname("Admin Store");
		user2.setDatejoined(new Date());
		user2.setLastlogin(new Date());
		data.add(user2);
		
		UserForm user3 = new UserForm();
		user3.setId(3);
		user3.setUsername("User Name 3");
		user3.setFirstname("First Name 3");
		user3.setLastname("Last Name 3");
		user3.setEmail("user3@dgw.com");
		user3.setStaffstatus(true);
		user3.setGroupname("Admin Điều Phối");
		user3.setDatejoined(new Date());
		user3.setLastlogin(new Date());
		data.add(user3);
		
		response.setSuccess(true);
		
		response.setData(data);
		return response;
	}
}
