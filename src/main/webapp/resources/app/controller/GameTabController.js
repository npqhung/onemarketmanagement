Ext.define('OM.controller.GameTabController', {
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
			"#gametabs" : {
		    	tabchange : this.gameTabChange
		    }	
										
		});		
	},
	
    gameTabChange: function ( tabPanel, newCard, oldCard, eOpts ){
   	    var tabname = tabPanel.getActiveTab().getItemId();
   	    if(tabname == "gamecategorytab"){
   	    	var gamecategorycontroller = this.getController("GameCategoryController");
   	    	gamecategorycontroller.loadGameCategory();    	
   	    }else if(tabname == "gamelisttab") {
//   	    	var admingroupcontroller = this.getController("AdminGroupController");
//   	    	admingroupcontroller.loadUserGroup();
   	    }   	       
   }
});

