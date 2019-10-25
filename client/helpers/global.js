Template.registerHelper('mainuser',function(){
  return MainUser.findOne();
})

Template.registerHelper('contents',function(){
  return Contents.find().fetch();
})
