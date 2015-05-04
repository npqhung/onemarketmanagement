Ext.define('OM.view.user.UserWindow', {
    extend: 'Ext.window.Window',
    alias : 'widget.userwindow',
    border: 0,
    height: 285,
    width: 445,
    bodyPadding: 5,
    resizable: false,
    modal: true,    
    layout: {
        type: 'vbox'
    },
    closable: true,
    title: 'Add User',    
    closeAction : 'hide',
    requires: [
	           'OM.view.user.UserForm'
	    ],
	       
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	items: [
                    { 
                    	xtype : 'userform'      		        
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
         				       itemId : 'save'
         				   },
		                   {
    							  text: 'Reset',  							
    							  itemId : 'reset'							  
    					   }
         				   ]
         		}]  
        });
        
        me.callParent(arguments);
    }
});