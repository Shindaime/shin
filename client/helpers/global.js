const steemMarkdown = require('steem-markdown-only')

Template.registerHelper('markdownFormatter', function (text) {
  return steemMarkdown(text)
});


Template.registerHelper('equals', function (a, b) {
  return a === b;
});

Template.registerHelper('mainuser',function(){
  return MainUser.findOne();
})

Template.registerHelper('contents',function(){
  return Contents.find().fetch();
})

Template.registerHelper('currentMenu',function(){
  return Session.get('menu');
})

Template.registerHelper('currentUser',function(){
  return User.findOne();
})

Template.registerHelper('currentContent',function(){
  return Content.findOne();
})