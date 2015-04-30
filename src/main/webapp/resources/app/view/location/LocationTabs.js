Ext.define('OM.view.location.LocationTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.locationtabs',

    requires: [
    	'Ext.tab.Tab',        
        'Ext.tab.Panel'        
    ],
    
    tabPosition: 'bottom',

    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'City',
                    itemId: 'citytab',
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'District',
                    itemId : 'districttab',
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Ward',
                    itemId : 'categorytab',
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