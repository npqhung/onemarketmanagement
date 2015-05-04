package com.onesys.onemarket.dao;

import java.util.List;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.onesys.onemarket.model.UserGroup;

public interface UserGroupDaoInterface {
	@Transactional(propagation=Propagation.REQUIRED)	
	public List<UserGroup> getAllUserGroup(String sort, String dir);

	@Transactional(propagation=Propagation.REQUIRES_NEW)
	public void insertUserGroup(UserGroup userGroup) throws Exception;

}
