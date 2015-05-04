Ext.define('OM.view.user.UserForm', {
    extend: 'Ext.form.Panel',    
    alias: 'widget.userform',    
    xtype : 'userform',
    requires: ['Ext.form.field.Text'],
    bodyPadding: 20,
    border:false,

    initComponent: function(){
        this.addEvents('create');
        
        Ext.apply(this, {
            activeRecord: null,
            defaultType: 'textfield',
            items: [		            
		            {    xtype : 'textfield',
				         fieldLabel: 'First Name',
				         name: 'firstnamename',
				         itemId : 'userfirstname',
				         width: 350
		            },
		            {    xtype : 'textfield',
		   		         fieldLabel: 'Last Name',
		   		         name: 'lastname',		   		         
		   		         itemId : 'userlastname',
		   		         width: 350
		            }
		            ]
        });
                
        this.callParent();
    }    
});