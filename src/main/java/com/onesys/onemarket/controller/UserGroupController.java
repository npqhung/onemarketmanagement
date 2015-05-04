package com.onesys.onemarket.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onesys.onemarket.model.UserGroup;
import com.onesys.onemarket.service.UserGroupServiceInterface;
import com.onesys.onemarket.utils.AppResponse;

@Controller
@RequestMapping("/service")
public class UserGroupController {
	
	@Autowired
	UserGroupServiceInterface userGroupService;
	
	static Log log = LogFactory.getLog(UserGroupController.class);
	
	@RequestMapping(value="/getUserGroups")
	@ResponseBody
	public AppResponse getUserGroups(HttpServletRequest request,
			@RequestParam("sort") String sort, @RequestParam("dir") String dir){
	
		AppResponse response = new AppResponse();
		
		List<UserGroup> data = userGroupService.getAllUserGroup(sort, dir);
		
		response.setSuccess(true);
		
		response.setData(data);
		return response;
	}
		
	@RequestMapping(value="/addUserGroup", method = RequestMethod.POST, consumes="application/json")
	@ResponseBody
	public void addUser(@RequestBody UserGroup userGroup) {
	    
	    try {
			userGroupService.insertUserGroup(userGroup);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("addUserGroup failed \n" + e.getMessage());
			e.printStackTrace();
		}	    
	}
}
