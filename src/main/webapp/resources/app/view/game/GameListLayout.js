Ext.define('OM.view.game.GameListLayout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gamelistlayout',

    requires: [    	
        'OM.view.game.GameListForm',
        'OM.view.game.GameListGrid'
    ],
    
    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    itemId : 'gamelistgridpanel',
                    title: 'Games',                    
                    items: [
                        {
                            xtype: 'gamelistgrid',
                            itemId : 'gamelistgrid'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game',
                    itemId : 'gamelistformpanel',                    
                    items: [
                        {
                            xtype: 'gamelistform',
                            itemId : 'gamelistform'
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