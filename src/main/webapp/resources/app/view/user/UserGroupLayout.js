Ext.define('OM.view.user.UserGroupLayout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usergrouplayout',

    requires: [    	
        'OM.view.user.UserGroupForm',
        'OM.view.user.UserGroupGrid'
    ],
    
    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    itemId : 'usergroupgridpanel',
                    title: 'Admin Groups',                    
                    items: [
                        {
                            xtype: 'usergroupgrid',
                            itemId : 'usergroupgrid'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'User Group',    
                    itemId : 'usergroupformpanel',
                    items: [
                        {
                            xtype: 'usergroupform',
                            itemId : 'usergroupform'
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