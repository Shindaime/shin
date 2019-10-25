import { Template } from "meteor/templating";
import { Session } from "meteor/session";

FlowRouter.route('/', {
    name: 'home',
    action: function (params, queryParams) {
        BlazeLayout.render('mainlayout', { sidebar: "sidebar", main: "home", topmenu: "topmenu" });
        
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action: function (params, queryParams) {
        BlazeLayout.render('mainlayout', { sidebar: "sidebar", main: "admin", topmenu: "topmenu" });
    }
});

FlowRouter.route('/faq', {
    name: 'faq',
    action: function (params, queryParams) {
        BlazeLayout.render('mainlayout', { sidebar: "sidebar", main: "faq", topmenu: "topmenu" });
    }
});
