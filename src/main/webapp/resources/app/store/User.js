Ext.define('OM.store.User', {
	extend: 'Ext.data.Store', 
	xtype : 'userstore',
	requires:[		
		'Ext.data.proxy.Rest',
		'OM.model.UserModel',
		'OM.config.Global'
	], 
	autoLoad: false,
	pageSize: 100,
	model:'OM.model.UserModel',
	
	proxy: {
        type: 'rest',
        api: {            
            read: OM.config.Global.getAppPath() + 'getUsers',        
            update : OM.config.Global.getAppPath() + 'updateUser',
            destroy: OM.config.Global.getAppPath() + 'deleteUser'
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