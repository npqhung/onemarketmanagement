Ext.define('OM.controller.UserGroupController', {
	extend: 'Ext.app.Controller',
	
	models : [
	],
	
	stores : [
	],
	
	views : [
		'user.UserGroupGrid'
	],
	
	refs: [	        
	        {
	        	ref : 'usergroupgrid',
	        	selector : '#usergroupgrid'
	        }
	    ],
	
	init:function(){
		var me = this;
		
		me.control({						
										
		});		
	},
	
	loadUserGroup : function(){
		this.getUsergroupgrid().store.loadPage(1);
	}
});

