Ext.define('OM.view.user.UserGrid',{
	extend : 'Ext.grid.Panel',	
	border : true,
	alias : 'widget.usergrid',	
	title : 'Users',
	layout : 'fit',  
	requires: [	           
	           'Ext.form.field.Text',
	           'Ext.toolbar.TextItem',
	           'Ext.toolbar.Paging',
	           'OM.store.User'
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
       		itemId : 'useradd'//	                   
        }
        , 
   	   {
    	   text: 'Update',
    	   icon : '',
          itemId : 'userupdate'
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
	
    onDestroy : function(){    
        this.callParent(arguments);
    }
});