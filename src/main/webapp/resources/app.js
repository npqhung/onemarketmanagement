Ext.application({
	requires:[
	   'OM.config.Global',
	   'OM.controller.Main'
	],
	
    name: 'OM',

    extend: 'OM.Application',
    
//    autoCreateViewport: true,
    
    views: [
        'LoginForm'
    ],
    
    controllers : [
    	'LoginController',
    	'Main'
    ],
    
    launch: function() {    
    	var loginform = Ext.widget('loginform');
		loginform.center();
    }
});
