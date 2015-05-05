Ext.define('OM.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views : [
	],
	
    refs: [
	        
	    ],
    
    init:function(){
		var me = this;
		
		//widget control handler
		me.control({	
			"#apptabs" : {
		    	tabchange : this.appTabChange
		    }			
		});
	},
	
    appTabChange: function ( tabPanel, newCard, oldCard, eOpts ){
   	    var tabname = tabPanel.getActiveTab().getItemId();
   	    if(tabname == "usertabs"){
//   	    	alert('usertabs');   	    	
   	    }else if(tabname == "producttabs") {
//   	    	alert('producttabs');
   	    }else if(tabname == "locationtabs"){
//   			alert('locationtabs');	    	
   	    }   
   	       
   }
});
