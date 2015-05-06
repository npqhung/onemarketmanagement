package com.onesys.onemarket.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onesys.onemarket.formmodel.GameCategory;
import com.onesys.onemarket.utils.AppResponse;

@Controller
@RequestMapping("/service")
public class GameCategoryController {
	
	
	@RequestMapping(value="/getGameCategory")
	@ResponseBody
	public AppResponse getUsers(HttpServletRequest request,
			@RequestParam("sort") String sort, @RequestParam("dir") String dir){
	
		AppResponse response = new AppResponse();
		
//		List<User> data = userService.getAllUser(sort, dir);
		List<GameCategory> data = new ArrayList<GameCategory>();
		
		GameCategory cate1 = new GameCategory();
		cate1.setId(1);
		cate1.setName("Game Category 1");
		cate1.setImage("Not Available");
		cate1.setCreateddate(new Date());		
		data.add(cate1);
		
		GameCategory cate2 = new GameCategory();
		cate2.setId(2);
		cate2.setName("Game Category 2");
		cate2.setImage("Not Available");
		cate2.setCreateddate(new Date());		
		data.add(cate2);
		
		GameCategory cate3 = new GameCategory();
		cate3.setId(3);
		cate3.setName("Game Category 3");
		cate3.setImage("Not Available");
		cate3.setCreateddate(new Date());		
		data.add(cate3);
		
		response.setSuccess(true);		
		response.setData(data);
		return response;
	}
}
