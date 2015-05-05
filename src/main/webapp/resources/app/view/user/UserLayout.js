Ext.define('OM.view.user.UserLayout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlayout',

    requires: [    	
        'OM.view.user.UserForm',
        'OM.view.user.UserGrid'
    ],
    
    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Admin Users',                    
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
                    title: 'User Detail',
                    itemId : 'userform',
                    items: [
                        {
                            xtype: 'userform',
                            itemId : 'userform'
                        }
                    ],
                    hidden : true
                }   
            ],
    
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
    }
});