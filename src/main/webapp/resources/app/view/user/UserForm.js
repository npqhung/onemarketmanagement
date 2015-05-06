Ext.define('OM.view.user.UserForm', {
    extend: 'Ext.form.Panel',    
    alias: 'widget.userform',    
    xtype : 'userform',
    requires: [
    	'Ext.form.field.Text',
    	'Ext.ux.form.ItemSelector',
    	'Ext.data.ArrayStore',
    	'Ext.form.FieldSet'
    ],
    
    bodyPadding: 20,
    border:false,
    autoScroll : true,
    maxWidth : 850,
    
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
                      itemId : 'userback'
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
                    itemId : 'userdetailsave'
                },                
                {
                    xtype: 'button',
                    text: 'Delete',
                    width: 60,
                    itemId : 'userdetaildelete'
                }
            ]
        }
    ],
    
    initComponent: function(){
    	
    	var store = Ext.create('Ext.data.ArrayStore', {
			        data: [
							['Admin Partner', 'adminpartner'],
							['Admin Store', 'adminstore'],
							['Admin Coordinator', 'admincoordinator']							
			        ], //store is available
			        fields: ['text','value']
			    });
			    
		var permissionStore = Ext.create('Ext.data.ArrayStore', {
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
			    });	    
    	
    	Ext.apply(this, {
            
            items: [
            {
		        xtype: 'fieldset',
		        collapsible: true,
		        title: 'Account',
		        items: [	            
		            {
	                    xtype: 'textfield',
	                    width: 350,
	                    fieldLabel: 'User Name',
	                    name : 'username',
	                    itemId : 'username'
	                },                
	                {    xtype : 'textfield',
	                	 width: 350,
		   		         fieldLabel: 'Password',
		   		         name: 'password',
		   		         inputType: 'password', 
		   		         itemId : 'password'			   		     
		            }
		        ]
		    },
		    {
		        xtype: 'fieldset',
		        collapsible: true,
		        title: 'Personal Info',
		        items: [	            
		             {
	                    xtype: 'textfield',
	                    width: 350,
	                    fieldLabel: 'First Name',
	                    name : 'firstname'
	                },                
	                {   
	                	xtype : 'textfield',
	                	width: 350,
		   		        fieldLabel: 'Last Name',
		   		        name: 'lastname'			   		     
		            },                
	                {   
	                	xtype : 'textfield',
	                	width: 350,
		   		        fieldLabel: 'Email Address',
		   		        name: 'email'			   		     
		            }
		        ]
		    },
		    {
		        xtype: 'fieldset',
		        collapsible: true,
		        title: 'Permission',
		        items: [	            
		            {
	                    xtype: 'checkbox',
	                    width: 350,
	                    fieldLabel: 'Active',
	                    name : 'active',
	                    value : true
	                }, 
	                {
	                    xtype: 'checkbox',
	                    width: 350,
	                    fieldLabel: 'Staff Status',
	                    name : 'staffstatus',
	                    value : true
	                }, 
	                {
	                    xtype: 'checkbox',
	                    width: 350,
	                    fieldLabel: 'Super User Status',
	                    name : 'superuser',
	                    value : true
	                },	     
			        {
			            xtype: 'itemselector',
			            name: 'userselector',	            
			            style:'margin-top:10px',
			            anchor: '100%',
			            fieldLabel: 'Groups',
			            	
			            store: store,
			            displayField: 'text',
			            valueField: 'value',
			            value: ['adminstore'],// value = selected
			
			            allowBlank: false,
			            // minSelections: 2,
			            // maxSelections: 3,
			            msgTarget: 'side'
			        },	     
			        {
			            xtype: 'itemselector',
			            name: 'userpermissionselector',	            
			            style:'margin-top:10px',
			            anchor: '100%',
			            fieldLabel: 'User Permissions',
			            	
			            store: permissionStore,
			            displayField: 'text',
			            valueField: 'value',
			            value: ['per2'],// value = selected
			
			            allowBlank: false,
			            // minSelections: 2,
			            // maxSelections: 3,
			            msgTarget: 'side'
			        }
		        ]
		    },
		    {
		        xtype: 'fieldset',
		        collapsible: true,
		        title: 'Important Dates',
		        items: [	            
		             {
	                    xtype: 'textfield',
	                    width: 350,
	                    fieldLabel: 'Last Login',
	                    name : 'lastlogin',
	                    value : new Date()
	                },                
	                {   
	                	xtype : 'textfield',
	                	width: 350,
		   		        fieldLabel: 'Data Joined',
		   		        name: 'datejoined',
		   		        value : new Date()
		            }
		        ]
		    }
            
            ]
        });
        
        this.callParent();
    }    
});