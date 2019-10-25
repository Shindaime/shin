import { Template } from "meteor/templating";
import { Session } from "meteor/session";

FlowRouter.route('/', {
    name: 'home',
    action: function (params, queryParams) {
        BlazeLayout.render('mainlayout', { sidebar: "sidebar", main: "home", topmenu: "topmenu" });
        Session.set('menu','home')
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
        Session.set('menu','faq')
    }
});

FlowRouter.route('/:user', {
    name: 'user',
    action: function (params, queryParams) {
        User.add(params.user,function(error){
            if(error)
            console.log(error)
        })
        Session.set('menu','profile')
        BlazeLayout.render('mainlayout', { sidebar: "sidebar", main: "profile", topmenu: "topmenu" });
    }
});

FlowRouter.route('/:user/:permlink', {
    name: 'content',
    action: function (params, queryParams) {
        Content.getContent(params.user,params.permlink,function(error){
            if(error)
            console.log(error)
        })
        Session.set('menu','content')
        BlazeLayout.render('mainlayout', { sidebar: "sidebar", main: "article", topmenu: "topmenu" });
    }
});