package com.onesys.onemarket.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onesys.onemarket.model.UserGroup;
import com.onesys.onemarket.service.UserGroupService;
import com.onesys.onemarket.utils.AppResponse;

@Controller
@RequestMapping("/service")
public class UserGroupController {
	
	@Autowired
	UserGroupService userGroupService;
	
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
}
