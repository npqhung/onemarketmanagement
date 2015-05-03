Ext.define('OM.view.user.UserGroupGrid',{
	extend : 'Ext.grid.Panel',	
	border : true,
	alias : 'widget.usergroupgrid',	
	title : 'User Groups',
	layout : 'fit',  
	requires: [	           
	           'Ext.form.field.Text',
	           'Ext.toolbar.TextItem',
	           'Ext.toolbar.Paging',
	           'OM.store.UserGroup'
	       ],
	       
	initComponent : function(){
		var me = this;
		me.store = me.buildStore();
		me.columns = me.buildColumns();
		me.bbar = me.buildPaging();
		me.callParent();
	},
	
	dockedItems: [{
	       xtype: 'toolbar',
	       dock: 'top',	       
	       items: [{
     		text:'Add',
       		icon : '',
       		itemId : 'usergroupadd'//	                   
        }
        , 
   	   {
    	   text: 'Update',
    	   icon : '',
          itemId : 'usergroupupdate'
        }]
	           
	   	}],      

	buildColumns  : function(){
		return [
			{
				text:'Id',dataIndex:'id',flex:1				
			},
			{
				text:'Group Name',dataIndex:'groupname',flex:1 
			},
			{
				text:'Description',dataIndex:'description',flex:1
			}	
		];
	},
	
	buildPaging : function(){
		return Ext.create('Ext.PagingToolbar', {
           store: this.store,
           displayInfo: true,
           displayMsg: 'Displaying User Groups {0} - {1} of {2}',
           emptyMsg: "There's nothing here",
           items:[                  
                 ]           
       });
	},

	buildStore  : function(){
		return Ext.create('OM.store.UserGroup');
	},
	
    onDestroy : function(){    
        this.callParent(arguments);
    }
});