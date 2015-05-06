Ext.define('OM.store.GameCategory', {
	extend: 'Ext.data.Store', 
	xtype : 'gamecategorystore',
	requires:[		
		'Ext.data.proxy.Rest',
		'OM.model.GameCategoryModel',
		'OM.config.Global'
	], 
	autoLoad: false,
	pageSize: 100,
	model:'OM.model.GameCategoryModel',
	
	proxy: {
        type: 'rest',
        api: {            
        	create: OM.config.Global.getAppPath() + 'addGameCategory',
            read: OM.config.Global.getAppPath() + 'getGameCategory',        
            update : OM.config.Global.getAppPath() + 'updateGameCategory',
            destroy: OM.config.Global.getAppPath() + 'deleteGameCategory'
        },        
        simpleSortMode: true,
        reader:{
    		type:'json',
    		totalProperty: 'totalCount',
    		root:'data'
    	},
    	writer: {
            type: 'json',
            writeAllFields: true
        }
    },        
	
    remoteSort: true,
    sorters: [{
		property: 'id',
		direction: 'ASC'
	}] 
});