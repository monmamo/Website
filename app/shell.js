define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'Misc/home' },
                { route: 'Welcome', title:'Welcome', moduleId: 'Misc/welcome' },
                { route: 'Monsters', moduleId: 'Monster/monster_all', nav: true },
                { route: 'Monster Profile', moduleId: 'Monster/monster_profile'},
                { route: 'Monster Design', moduleId: 'Monster/monster_design'},
                { route: 'Characters', moduleId: 'Character/character_all', nav: true },
                { route: 'Character Profile', moduleId: 'Character/character_profile', },
                { route: 'Character Design', moduleId: 'Character/character_design',  },
                { route: 'Organizations', moduleId: 'Organization/organization_all', nav: true },
                { route: 'Organization Profile', moduleId: 'Organization/organization_profile' },
                { route: 'Organization Design', moduleId: 'Organization/organization_design' }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});