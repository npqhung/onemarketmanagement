Ext.define('OM.view.game.GameCategoryLayout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gamecategorylayout',

    requires: [    	
        'OM.view.game.GameCategoryForm',
        'OM.view.game.GameCategoryGrid'
    ],
    
    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    itemId : 'gamecategorygridpanel',
                    title: 'Game Category',                    
                    items: [
                        {
                            xtype: 'gamecategorygrid',
                            itemId : 'gamecategorygrid'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game',
                    itemId : 'gamecategoryformpanel',                    
                    items: [
                        {
                            xtype: 'gamecategoryform',
                            itemId : 'gamecategoryform'
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