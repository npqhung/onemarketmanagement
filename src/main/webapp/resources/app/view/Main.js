Ext.define('OM.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        
        'OM.view.user.UserTabs',
        'OM.view.product.ProductTabs',
        'OM.view.location.LocationTabs'        
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'fit'
    },

    items: [
    	{        
        	xtype: 'tabpanel',
        	itemId : 'apptabs',
	        items:[
	        	{
	        		xtype : 'usertabs',
	        		itemId : 'usertabs',
	            	title: 'Users'
	            },
	            {
	            	xtype : 'producttabs',
	            	itemId : 'producttabs',
	            	title: 'Product'
	            },
	            {
	            	xtype : 'locationtabs',
	            	itemId : 'locationtabs',
	            	title: 'Location'
	            },	            
	            {
	            	xtype : 'panel',
	            	itemId : 'newtabs',
	            	title: 'New Tab'
	            },	            
	            {
	            	xtype : 'panel',
	            	itemId : 'newtabs1',
	            	title: 'New Tab 1'
	            }
	        ]
    }]
});