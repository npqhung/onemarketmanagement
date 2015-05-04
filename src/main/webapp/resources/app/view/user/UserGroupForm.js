Ext.define('OM.view.user.UserGroupForm', {
    extend: 'Ext.form.Panel',    
    alias: 'widget.usergroupform',    
    xtype : 'usergroupform',
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
		            ]
        });
                
        this.callParent();
    }    
});