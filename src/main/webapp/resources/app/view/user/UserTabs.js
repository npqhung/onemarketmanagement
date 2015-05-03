Ext.define('OM.view.user.UserTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.usertabs',

    requires: [
    	'Ext.tab.Tab',        
        'Ext.tab.Panel',
        
        'OM.view.user.UserGrid',
        'OM.view.user.UserGroupGrid'
    ],
    
    tabPosition: 'bottom',

    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Users',
                    itemId: 'usertab',
                    items: [
                        {
                            xtype: 'usergrid',
                            itemId : 'usergrid'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'User Group',
                    itemId : 'usergrouptab',
                    items: [
                        {
                            xtype: 'usergroupgrid',
                            itemId : 'usergroupgrid'
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