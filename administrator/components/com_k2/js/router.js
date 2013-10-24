define(['marionette'], function(Marionette) {'use strict';
	var K2Router = Marionette.AppRouter.extend({
		appRoutes : {
			'settings' : 'settings',
			'media' : 'media',
			'information': 'information',
			'*any' : 'execute'
		}
	});
	return K2Router;
});
