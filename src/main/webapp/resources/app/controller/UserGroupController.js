Ext.define('OM.controller.UserGroupController', {
	extend: 'Ext.app.Controller',
	
	models : [
	],
	
	stores : [
	],
	
	views : [
		'user.UserGroupGrid'
	],
	
	refs: [	        
	        {
	        	ref : 'usergroupgrid',
	        	selector : '#usergroupgrid'
	        },
	        {
	        	ref : 'usergroupform',
	        	selector : 'usergroupform'
	        }
	    ],
	
	init:function(){
		var me = this;
		
		me.control({	
			'#usergroupadd' : {
				click : function() {
					me.getUsergroupgrid().usergroupwindow.show();
				}
			},
			
			'#usergroupsave' : {
				click : function(btn) {
					me.saveUserGroup();					
				}
			},
			
			'#usergroupreset' : {
				click : function(btn) {
					me.getUsergroupform().getForm().reset();
				}
			}
										
		});		
	},
	
	loadUserGroup : function(){
		this.getUsergroupgrid().store.loadPage(1);
	},
	
	saveUserGroup : function(){
		var me = this;
		var usergroupform = me.getUsergroupform().getForm();

		if (usergroupform.isValid()) {
			var data = usergroupform.getValues();
			me.getUsergroupgrid().store.add(data);
			me.getUsergroupgrid().store.sync({
						success : function(fp, o) {
							me.getUsergroupgrid().store.loadPage(1);
//							Ext.example.msg('Success','User Group has been added!');
							Ext.Msg.alert('Success', 'User Group has been added!');
						},
						failure : function(fp, o) {
							 Ext.Msg.alert('Error', 'Cannot add User Group! ');
						}
					});

			usergroupform.reset();
			me.getUsergroupgrid().usergroupwindow.hide();
		}
	}
});

