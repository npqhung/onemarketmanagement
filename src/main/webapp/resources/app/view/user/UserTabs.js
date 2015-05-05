Ext.define('OM.view.user.UserTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.usertabs',

    requires: [
    	'Ext.tab.Tab',        
        'Ext.tab.Panel',
        
        'OM.view.user.UserLayout',
        'OM.view.user.UserGroupLayout'
    ],
    
    tabPosition: 'bottom',

    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Admin',
                    itemId: 'usertab',
                    items: [
                        {
                            xtype: 'userlayout',
                            itemId : 'userlayout',
                            layout: 'fit'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Admin Group',
                    itemId : 'usergrouptab',
                    items: [
                        {
                            xtype: 'usergrouplayout',
                            itemId : 'usergrouplayout',
                            layout: 'fit'
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