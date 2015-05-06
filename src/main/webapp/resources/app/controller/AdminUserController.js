Ext.define('OM.controller.AdminUserController', {
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
	        	ref : 'usergrid',
	        	selector : '#usergrid'
	        },
	        {
	        	ref : 'userform',
	        	selector : 'userform'
	        },
	        {
	        	ref : 'usergridpanel',
	        	selector : '#usergridpanel'
	        },
	        {
	        	ref : 'userformpanel',
	        	selector : '#userformpanel'
	        }
	    ],
	
	init:function(){
		var me = this;
		
		me.control({
			'#userreset' : {
				click : function(btn) {
					me.getUserform().getForm().reset();
				}
			},
			
			'usergrid' : {
			   itemdblclick: this.showUserDetail
			},
			
			'#userback' : {
				click : function(btn) {
					me.backToAdminList();					
				}
			}
		});		
	},
	
	loadAdminUser : function(){
		this.getUsergrid().store.loadPage(1);
	},
	
	showUserDetail : function(dataview, record, item, index, e, eOpts) {
	 	this.getUsergridpanel().hide();
	 	this.getUserformpanel().show();
	},
	
	backToAdminList : function(){
	 	this.getUsergridpanel().show();
	 	this.getUserformpanel().hide();
	}
});

