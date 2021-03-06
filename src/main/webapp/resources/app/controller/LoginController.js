Ext.define('OM.controller.LoginController', {
	extend: 'Ext.app.Controller',
	
	models : [
	],
	
	stores : [
	],
	
	views : [
		'user.UserGrid'
	],
	
	refs: [
	        {
	            ref: 'loginform',
	            selector: 'loginform'
	        },
	        {
	        	ref : 'usergrid',
	        	selector : '#usergrid'
	        }
	    ],
	
	init:function(){
		var me = this;
		
		me.control({						
			'loginform toolbar button[itemId=login]' : {
				click : function(){
					me.login(me);
				}				
			}							
		});		
	},
		
	login : function(){
		var viewport = Ext.create('OM.view.Viewport');		
		var loginPanel = this.getLoginform();
		
	    loginPanel.hide();	    
		viewport.show();
		
		//register controller
		this.getController("UserTabController");
		this.getController("AdminUserController");
		this.getController("GameCategoryController");
				
		this.getUsergrid().store.loadPage(1);
	}
});

