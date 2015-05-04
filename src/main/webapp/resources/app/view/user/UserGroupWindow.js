Ext.define('OM.view.user.UserGroupWindow', {
    extend: 'Ext.window.Window',
    alias : 'widget.usergroupwindow',
    border: 0,
    height: 155,
    width: 405,
    bodyPadding: 5,
    resizable: false,
    modal: true,    
    layout: {
        type: 'vbox'
    },
    closable: true,
    title: 'Add User Group',    
    closeAction : 'hide',
    requires: [	         
	           'OM.view.user.UserGroupForm'
	    ],
	       
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	items: [
                    { 
                    	xtype : 'usergroupform'      		        
                    } 
                ],
                dockedItems: [{
         		   xtype: 'toolbar',
         		   dock: 'bottom',
         		   ui: 'footer',
				   layout:{
				        pack: 'center'
				    },
         		   items: [{			       
         			   		   icon : '',
         				       text: 'Save',			       
         				       itemId : 'usergroupsave'
         				   },
		                   {
    							  text: 'Reset',  							
    							  itemId : 'usergroupreset'							  
    					   }
         				   ]
         		}]  
        });
        
        me.callParent(arguments);
    }
});