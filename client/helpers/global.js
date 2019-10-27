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

Template.registerHelper('contentsCollection',function(){
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

Template.registerHelper('tagsCollection',function(){
  return Tags.find({},{sort:{comments:-1}}).fetch();
})

Template.registerHelper('timeFromNow', function (date) {
  return moment(date).fromNow();
});

Template.registerHelper('itemPic', function (body) {
  
   var regex = /!\[(.*?)\]\((.*?)\)/g;
   var src = regex.exec(body)[2];
   return src
});