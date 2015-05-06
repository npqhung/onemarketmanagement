Ext.define('OM.view.game.GameCategoryGrid',{
	extend : 'Ext.grid.Panel',	
	border : true,
	alias : 'widget.gamecategorygrid',	

	layout : 'fit',  
	requires: [	           
	           'Ext.form.field.Text',
	           'Ext.toolbar.TextItem',
	           'Ext.toolbar.Paging',
	           'OM.store.GameCategory'
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
       		itemId : 'gamecategorygridadd'//	                   
        }
        , 
   	   {
    	   text: 'Delete',
    	   icon : '',
          itemId : 'gamecategorygriddelete'
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
				text:'Created Date',dataIndex:'createddate',flex:1,renderer: this.formatTime 
			}	
		];
	},
	
	buildPaging : function(){
		return Ext.create('Ext.PagingToolbar', {
           store: this.store,
           displayInfo: true,
           displayMsg: 'Displaying Game Categories {0} - {1} of {2}',
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
		return Ext.create('OM.store.GameCategory');
	},
	
	formatTime : function(value){
    	if(value){
	    	var date = new Date(value);
	    	return date.toDateString();
    	}
    	
    	return "";
    },
		
    onDestroy : function(){
        this.callParent(arguments);
    }
});