Ext.define('OM.controller.UserTabController', {
	extend: 'Ext.app.Controller',
	
	models : [
	],
	
	stores : [
	],
	
	views : [
		
	],
	
	refs: [	        
	       
	    ],
	
	init:function(){
		var me = this;
		
		me.control({	
			"#usertabs" : {
		    	tabchange : this.userTabChange
		    }	
										
		});		
	},
	
    userTabChange: function ( tabPanel, newCard, oldCard, eOpts ){
   	    var tabname = tabPanel.getActiveTab().getItemId();
   	    if(tabname == "usertab"){
   	    	var admincontroller = this.getController("AdminUserController");
   	    	admincontroller.loadAdminUser();    	
   	    }else if(tabname == "usergrouptab") {
   	    	var admingroupcontroller = this.getController("AdminGroupController");
   	    	admingroupcontroller.loadUserGroup();
   	    }   	       
   }
});

