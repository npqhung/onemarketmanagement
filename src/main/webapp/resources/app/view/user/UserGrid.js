Ext.define('OM.view.user.UserGrid',{
	extend : 'Ext.grid.Panel',	
	border : true,
	alias : 'widget.usergrid',	
//	title : 'Users',
	layout : 'fit',  
	requires: [	           
	           'Ext.form.field.Text',
	           'Ext.toolbar.TextItem',
	           'Ext.toolbar.Paging',
	           'OM.store.User',
	           'OM.view.user.UserWindow',
	           'Ext.grid.column.Check'
	       ],
	       
	initComponent : function(){
		var me = this;
		me.store = me.buildStore();
		me.columns = me.buildColumns();
		me.bbar = me.buildPaging();
		me.userwindow = me.buildUserWindow();
		me.callParent();
	},
	
	dockedItems: [{
	       xtype: 'toolbar',
	       dock: 'top',	       
	       items: [{
     		text:'Add',
       		icon : '',
       		itemId : 'useradd'//	                   
        }
        , 
   	   {
    	   text: 'Delete',
    	   icon : '',
          itemId : 'usergriddelete'
        }]
	           
	   	}],      

	buildColumns  : function(){
		return [
			{
				text:'Id',dataIndex:'id',flex:1,hidden : true				
			},
			{
				text:'User Name',dataIndex:'username',flex:1 
			},
			{
				text:'First Name',dataIndex:'firstname',flex:1
			},
			{
				text:'Last Name',dataIndex:'lastname',flex:1 
			},		
			{
				text:'Email Address',dataIndex:'email',flex:1 
			},
			{
				xtype:'checkcolumn',text:'Staff Status',dataIndex:'staffstatus',flex:1 
			},
			{
				text:'Date Joined',dataIndex:'datejoined',flex:1,renderer: this.formatTime 
			},
			{
				text:'Last Login',dataIndex:'lastlogin',flex:1,renderer: this.formatTime 
			},
			{
				text:'Group Name',dataIndex:'groupname',flex:1 
			}		
		];
	},
	
	buildPaging : function(){
		return Ext.create('Ext.PagingToolbar', {
           store: this.store,
           displayInfo: true,
           displayMsg: 'Displaying Users {0} - {1} of {2}',
           emptyMsg: "There's nothing here",
           items:[                  
                 ]           
       });
	},

	buildStore  : function(){
		return Ext.create('OM.store.User');
	},
	
	buildUserWindow : function(){
		return Ext.create('widget.userwindow');
	},
	
	formatTime : function(value){
    	if(value){
	    	var date = new Date(value);
	    	return date.toDateString();
    	}
    	
    	return "";
    },
	
    onDestroy : function(){    
    	this.userwindow.destroy();
        this.callParent(arguments);
    }
});