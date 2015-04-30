/**
* Define global variables for the application
*/

Ext.define('OM.config.Global',{
    singleton : true,
    config : {
        appPath : 'service/' //for Developemnt : '../rest/', 
  						  //for Production : 'rest/';
    },
    constructor : function(config){
        this.initConfig(config);
    }
});