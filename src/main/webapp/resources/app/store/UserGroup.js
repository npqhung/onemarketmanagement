Ext.define('OM.store.UserGroup', {
	extend: 'Ext.data.Store', 
	xtype : 'usergroupstore',
	requires:[		
		'Ext.data.proxy.Rest',
		'OM.model.UserGroupModel',
		'OM.config.Global'
	], 
	autoLoad: false,
	pageSize: 100,
	model:'OM.model.UserGroupModel',
	
	proxy: {
        type: 'rest',
        api: {            
            read: OM.config.Global.getAppPath() + 'getUserGroups',        
            update : OM.config.Global.getAppPath() + 'updateUserGroup',
            destroy: OM.config.Global.getAppPath() + 'deleteUserGroup'
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