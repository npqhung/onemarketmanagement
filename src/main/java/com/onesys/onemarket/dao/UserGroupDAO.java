package com.onesys.onemarket.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.onesys.onemarket.model.UserGroup;

@Repository
public class UserGroupDAO implements UserGroupDaoInterface{

	@PersistenceContext
	EntityManager em;
	
	public EntityManager getEm() {
		return em;
	}

	public void setEm(EntityManager em) {
		this.em = em;
	}
		
	@Transactional(propagation=Propagation.REQUIRED)
	public List<UserGroup> getAllUserGroup(String sort, String dir){
		Query query= em.createQuery("select a FROM UserGroup a ORDER BY a."
				+ sort + " " + dir);
		
		List<UserGroup> userList = query.getResultList();
		
		return userList;		
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void insertUserGroup(UserGroup userGroup) throws Exception {
		em.persist(userGroup);
	}
}
