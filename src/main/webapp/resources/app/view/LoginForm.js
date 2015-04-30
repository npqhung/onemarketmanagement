Ext.define('OM.view.LoginForm', {
	extend: 'Ext.panel.Panel',	
	xtype:'loginform',	
	
	 requires: [            
    ],
    	
	width : 400,
	
	renderTo: Ext.getBody(),
	
	items:[
		{
		    xtype: 'form',	
		    itemId : 'loginForm',
		    frame:true,	
			style:'border:1px solid #B5C9DB;padding-top:20px;',
		    layout: {
			    type: 'vbox',
			    align: 'center'
			},
			url: 'j_spring_security_check',
			defaults: {		
				listeners: {
					specialkey: function(f,e){  
			            if(e.getKey()==e.ENTER){
			                var app = OM.getApplication();//			                
			                var loginController = app.getController('LoginController');
			                loginController.login();
			            }  
			        }
				}
			},
		    items: [		
		    	{
			        xtype    : 'textfield',
//			        name     : 'username',
			        name:'j_username',
			        fieldLabel:'User Name',
			        emptyText: 'User Name',
			        allowBlank:false,
			        border : false,
			        width: 300          
			    },
			    {
			    	 xtype    : 'textfield',
			         fieldLabel: 'Password',
			         emptyText: 'Password',
//			         name: 'password',
			         name:'j_password',
			         inputType: 'password',
                     allowBlank: false,
                     border : false,
			         width: 300                
			     },			     
                 {
                    xtype : 'displayfield',
                    value : 'Version 1.0.0'                 
                 }
			    ],
    
			dockedItems: [{
				   xtype: 'toolbar',
				   dock: 'bottom',				   
				   style:'border-bottom:none;border-top:none;background-color:#FFFFFF',
				   layout:{
				        pack: 'center'
				    },				    
				   items: [
				   		{			       
					       text: 'Login',			       
					       itemId : 'login'		
						}
					]
				}]
    }],
  
	initComponent: function() {		
		var me = this;
		
		this.callParent(arguments);		
	},
	
    onDestroy : function(){        
        this.forgotPasswordWindow.destroy();
        this.callParent(arguments);
    }
});