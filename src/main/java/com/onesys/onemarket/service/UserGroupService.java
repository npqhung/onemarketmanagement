package com.onesys.onemarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onesys.onemarket.dao.UserGroupDaoInterface;
import com.onesys.onemarket.model.UserGroup;

@Service
public class UserGroupService implements UserGroupServiceInterface{
	
	@Autowired
	UserGroupDaoInterface userGroupDAO;
	
	public List<UserGroup> getAllUserGroup(String sort, String dir){
		return userGroupDAO.getAllUserGroup(sort, dir);
	}
	
	public void insertUserGroup(UserGroup userGroup) throws Exception{
		userGroupDAO.insertUserGroup(userGroup);
	}
	
}
