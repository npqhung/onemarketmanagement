Ext.define('OM.view.game.GameCategoryForm', {
    extend: 'Ext.form.Panel',    
    alias: 'widget.gamecategoryform',    
    xtype : 'gamecategoryform',
    requires: [
    	'Ext.form.field.Text',
    	'Ext.form.field.File',
    	'Ext.form.FieldSet'
    ],
    
    bodyPadding: 20,
    border:false,
    
    items: [	
    	{
		        xtype: 'fieldset',
		        collapsible: false,
		        title: 'Game Category',
		        items: [	            
		     		{    xtype : 'textfield',
				         fieldLabel: 'Name',
				         name: 'groupname',
				         itemId : 'usergroupname',
				         allowBlank : false,
				         width: 350
			        },
			        {    xtype : 'filefield',
			             width: 400,
				         fieldLabel: 'Avatar Image',
				         name: 'image',		   		         
				         itemId : 'gamecategoryimage'				         
			        },			        
			        {
                        xtype: 'combobox',
                        fieldLabel : 'Valid',
                        name: 'gamecatevalidcb',                            
		                typeAhead: true,
		                triggerAction: 'all',			                
		                store: [
		                    ['Publish','Publish'],
		                    ['---','---']                 
		                ],		                
		                lazyRender: true,
		                allowBlank: true
                    }
		        ]
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