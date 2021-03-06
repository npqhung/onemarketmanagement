Ext.define('OM.view.user.UserGroupGrid',{
	extend : 'Ext.grid.Panel',	
	border : true,
	alias : 'widget.usergroupgrid',	
//	title : 'User Groups',
	layout : 'fit',  
	requires: [	           
	           'Ext.form.field.Text',
	           'Ext.toolbar.TextItem',
	           'Ext.toolbar.Paging',
	           'OM.store.UserGroup',
	           'OM.view.user.UserGroupWindow'
	       ],
	       
	initComponent : function(){
		var me = this;
		me.store = me.buildStore();
		me.columns = me.buildColumns();
		me.bbar = me.buildPaging();
		me.usergroupwindow = me.buildUserGroupWindow();
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
    	   text: 'Delete',
    	   icon : '',
          itemId : 'usergroupgriddelete'
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
           displayMsg: 'Displaying Admin Groups {0} - {1} of {2}',
           emptyMsg: "There's nothing here",
           items:[            
              '-',
              {	
              		text : 'Export',
               		itemId : 'exportinventorysn',
               		tooltip: 'Export to Excel'
              }
                               ]           
       });
	},

	buildStore  : function(){
		return Ext.create('OM.store.UserGroup');
	},
	
	buildUserGroupWindow : function(){
		return Ext.create('widget.usergroupwindow');
	},
	
    onDestroy : function(){    
    	this.usergroupwindow.destroy();
        this.callParent(arguments);
    }
});