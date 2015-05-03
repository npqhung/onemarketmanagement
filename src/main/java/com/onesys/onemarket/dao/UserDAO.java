package com.onesys.onemarket.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.onesys.onemarket.model.User;

@Repository
public class UserDAO {

	@PersistenceContext
	EntityManager em;
	
	public List<User> getAllUser(String sort, String dir){
		Query query= em.createQuery("select a FROM User a ORDER BY a."
				+ sort + " " + dir);
		
		List<User> userList = query.getResultList();
		
		return userList;
		
	}
}
