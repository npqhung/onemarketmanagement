Ext.define('OM.view.game.GameListForm', {
    extend: 'Ext.form.Panel',    
    alias: 'widget.gamelistform',    
    xtype : 'gamelistform',
    requires: [
    	'Ext.form.field.Text'
    ],
    
    bodyPadding: 20,
    border:false,
    
    items: [		            
        {    xtype : 'textfield',
	         fieldLabel: 'Group Name',
	         name: 'groupname',
	         itemId : 'usergroupname',
	         allowBlank : false,
	         width: 350
        },
        {    xtype : 'textfield',
	         fieldLabel: 'Description',
	         name: 'description',		   		         
	         itemId : 'usergroupdescription',
	         width: 350
        }
    ],
    
    dockedItems: [
    	{
              xtype: 'toolbar',
              dock: 'top',              
              style: 'border-top-width: 1px; border-top-style: solid; border-top-color: #C0C0C0;background-color:#FFFFFF;',
              items: [                     
                  {
                      xtype: 'button',
//                      icon : 'resources/images/icon_back.png',
                      style: 'margin-left:14px',
                      text: 'Back',
                      tooltip: 'Back',
                      itemId : 'gamecategoryback'
                  }               
              ]
          },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            height: 40,
//            ui: 'footer',
            style: 'background-color:#F5F5F5',
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    width: 60,
                    itemId : 'gamecategorydetailsave'
                },                
                {
                    xtype: 'button',
                    text: 'Delete',
                    width: 60,
                    itemId : 'gamecategorydetaildelete'
                }
            ]
        }
    ],
    
    initComponent: function(){
        this.callParent();
    }    
});