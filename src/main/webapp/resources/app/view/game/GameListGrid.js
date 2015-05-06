Ext.define('OM.view.game.GameListGrid',{
	extend : 'Ext.grid.Panel',	
	border : true,
	alias : 'widget.gamelistgrid',	

	layout : 'fit',  
	requires: [	           
	           'Ext.form.field.Text',
	           'Ext.toolbar.TextItem',
	           'Ext.toolbar.Paging',
	           'OM.store.GameList'
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
       		itemId : 'gamelistgridadd'//	                   
        }
        , 
   	   {
    	   text: 'Delete',
    	   icon : '',
          itemId : 'gamelistgriddelete'
        }]
	           
	   	}],      

	buildColumns  : function(){
		return [
			{
				text:'Id',dataIndex:'id',flex:1				
			},
			{
				text:'Name',dataIndex:'name',flex:1 
			},
			{
				text:'Image Cover',dataIndex:'image',flex:1
			}	,
			{
				text:'Created Date',dataIndex:'createddate',flex:1
			}	
		];
	},
	
	buildPaging : function(){
		return Ext.create('Ext.PagingToolbar', {
           store: this.store,
           displayInfo: true,
           displayMsg: 'Displaying Game List {0} - {1} of {2}',
           emptyMsg: "There's nothing here",
           items:[            
              '-',
              {	
              		text : 'Export',
               		itemId : 'exportgamelist',
               		tooltip: 'Export to Excel'
              }
                               ]           
       });
	},

	buildStore  : function(){
		return Ext.create('OM.store.GameList');
	},
		
    onDestroy : function(){
        this.callParent(arguments);
    }
});