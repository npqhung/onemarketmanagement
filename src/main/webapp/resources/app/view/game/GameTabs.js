Ext.define('OM.view.game.GameTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.gametabs',

    requires: [
    	'Ext.tab.Tab',        
        'Ext.tab.Panel',
                
        'OM.view.game.GameCategoryLayout',
        'OM.view.game.GameListLayout'
    ],
    
    tabPosition: 'bottom',

    items: [                   
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game Category',
                    itemId: 'gamecategorytab',
                    items: [
                        {
                            xtype: 'gamecategorylayout',
                            itemId : 'gamecategorylayout',
                            layout: 'fit'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game List',
                    itemId : 'gamelisttab',
                    items: [
                        {
                            xtype: 'gamelistlayout',
                            itemId : 'gamelistlayout',
                            layout: 'fit'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game Image',
                    itemId : 'gameimagetab',
                    items: [
                 
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game Video',
                    itemId : 'gamevideotab',
                    items: [
                 
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Game Comment',
                    itemId : 'gamecommenttab',
                    items: [
                 
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