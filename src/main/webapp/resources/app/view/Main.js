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
	            	title: 'Admin'
	            },
	            {
	            	xtype : 'panel',
	            	itemId : 'gametabs',
	            	title: 'Game'
	            },	
	            {
	            	xtype : 'panel',
	            	itemId : 'storetabs',
	            	title: 'Store & Orders'
	            },	            
	            {
	            	xtype : 'producttabs',
	            	itemId : 'producttabs',
	            	title: 'Product'
	            },
	            {
	            	xtype : 'panel',
	            	itemId : 'brandtabs',
	            	title: 'Brand & Manufacturer'
	            },	
	            {
	            	xtype : 'locationtabs',
	            	itemId : 'locationtabs',
	            	title: 'Location'
	            },	     
	            {
	            	xtype : 'panel',
	            	itemId : 'newstabs',
	            	title: 'News & Notification'
	            },
	            	{
	            	xtype : 'panel',
	            	itemId : 'generaltabs',
	            	title: 'General'
	            },
	            {
	            	xtype : 'panel',
	            	itemId : 'clienttabs',
	            	title: 'Client'
	            },
	            {
	            	xtype : 'panel',
	            	itemId : 'faqtabs',
	            	title: 'FAQ'
	            }
	        ]
    }]
});