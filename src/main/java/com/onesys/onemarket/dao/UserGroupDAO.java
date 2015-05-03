package com.onesys.onemarket.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.onesys.onemarket.model.UserGroup;

@Repository
public class UserGroupDAO {

	@PersistenceContext
	EntityManager em;
	
	public List<UserGroup> getAllUserGroup(String sort, String dir){
		Query query= em.createQuery("select a FROM UserGroup a ORDER BY a."
				+ sort + " " + dir);
		
		List<UserGroup> userList = query.getResultList();
		
		return userList;		
	}
}
