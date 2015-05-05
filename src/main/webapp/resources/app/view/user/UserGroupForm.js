Ext.define('OM.view.user.UserGroupForm', {
    extend: 'Ext.form.Panel',    
    alias: 'widget.usergroupform',    
    xtype : 'usergroupform',
    requires: [
    	'Ext.form.field.Text',
    	'Ext.ux.form.ItemSelector'	
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
        },
        {
	            xtype: 'itemselector',
	            name: 'snmgrtitle',	            
	            style:'margin-top:10px',
	            anchor: '100%',
	            fieldLabel: 'Permissions',
	            imagePath: '../ux/images/',
	
	            store: Ext.create('Ext.data.ArrayStore', {
			        data: [
							['Permission 1', 'per1'],
							['Permission 2', 'per2'],
							['Permission 3', 'per3'],
							['Permission 4', 'per4'],
							['Permission 5', 'per5'],
							['Permission 6', 'per6'],
							['Permission 7', 'per7'],
							['Permission 8', 'per8'],
							['Permission 9', 'per9'],
							['Permission 10', 'per10'],
							['Permission 11', 'per11'],
							['Permission 12', 'per12']							
			        ], //store is available
			        fields: ['text','value']
			    }),
	            displayField: 'text',
	            valueField: 'value',
	            value: [''],// value = selected
	
	            allowBlank: false,
	            // minSelections: 2,
	            // maxSelections: 3,
	            msgTarget: 'side'
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
                      itemId : 'snback'
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
                    itemId : 'usergroupdetailsave'
                },                
                {
                    xtype: 'button',
                    text: 'Delete',
                    width: 60,
                    itemId : 'usergroupdetaildelete'
                }
            ]
        }
    ],
    
    initComponent: function(){
        this.callParent();
    }    
});