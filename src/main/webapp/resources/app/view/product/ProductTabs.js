Ext.define('OM.view.product.ProductTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.producttabs',

    requires: [
    	'Ext.tab.Tab',        
        'Ext.tab.Panel'        
    ],
    
    tabPosition: 'bottom',

    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Brands',
                    itemId: 'brandtab',
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Manufacturers',
                    itemId : 'manufacturetab',
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Product Category',
                    itemId : 'categorytab',
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Product',
                    itemId : 'producttab',
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                }      
            ],
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	
        });

        me.callParent(arguments);
    }

});