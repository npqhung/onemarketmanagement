package com.onesys.onemarket.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.onesys.onemarket.model.UserGroup;

@Service
public interface UserGroupServiceInterface {
	
	@Transactional(propagation=Propagation.REQUIRED)
	public List<UserGroup> getAllUserGroup(String sort, String dir);
		
	public void insertUserGroup(UserGroup userGroup) throws Exception;
	
}
