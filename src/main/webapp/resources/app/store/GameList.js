Ext.define('OM.store.GameList', {
	extend: 'Ext.data.Store', 
	xtype : 'gameliststore',
	requires:[		
		'Ext.data.proxy.Rest',
		'OM.model.GameListModel',
		'OM.config.Global'
	], 
	autoLoad: false,
	pageSize: 100,
	model:'OM.model.GameListModel',
	
	proxy: {
        type: 'rest',
        api: {            
        	create: OM.config.Global.getAppPath() + 'addGameList',
            read: OM.config.Global.getAppPath() + 'getGameList',        
            update : OM.config.Global.getAppPath() + 'updateGameList',
            destroy: OM.config.Global.getAppPath() + 'deleteGameList'
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