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
   	    	    	
   	    }else if(tabname == "usergrouptab") {
   	    	var usergroupcontroller = this.getController("UserGroupController");
   	    	usergroupcontroller.loadUserGroup();
   	    }   	       
   }
});

