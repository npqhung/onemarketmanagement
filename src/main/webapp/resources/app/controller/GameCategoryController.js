Ext.define('OM.controller.GameCategoryController', {
	extend: 'Ext.app.Controller',
	
	models : [
	],
	
	stores : [
	],
	
	views : [
		'game.GameCategoryGrid'
	],
	
	refs: [	        
	        {
	        	ref : 'gamecategorygrid',
	        	selector : '#gamecategorygrid'
	        },
	        {
	        	ref : 'gamecategoryform',
	        	selector : 'gamecategoryform'
	        },
	        {
	        	ref : 'gamecategorygridpanel',
	        	selector : '#gamecategorygridpanel'
	        },
	        {
	        	ref : 'gamecategoryformpanel',
	        	selector : '#gamecategoryformpanel'
	        }
	    ],
	
	init:function(){
		var me = this;
		
		me.control({
			'gamecategorygrid' : {
			   itemdblclick: this.showGameCategory
			},
			
			'#gamecategoryback' : {
				click : function(btn) {
					me.backToGameCategoryList();					
				}
			}
			
		});		
	},
	
	loadGameCategory : function(){
		this.getGamecategorygrid().store.loadPage(1);
	},
	
	showGameCategory : function(dataview, record, item, index, e, eOpts) {
	 	this.getGamecategorygridpanel().hide();
	 	this.getGamecategoryformpanel().show();
	},
	
	backToGameCategoryList : function(){
	 	this.getGamecategorygridpanel().show();
	 	this.getGamecategoryformpanel().hide();
	}
});

