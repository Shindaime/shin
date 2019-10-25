
Template.topmenu.rendered = function () {
  MainUser.add('shin',function(result){
    console.log(result)
  })
}

Template.topmenu.events({
  'click #menu':function(event){
    $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
    //FlowRouter.go('/faq')
  }
})


Template.topmenu.helpers({
  toAmount:function(number){
    return parseFloat(number).toFixed(2)
  },
  allusers:function(){
    var newusers = [];
    for(let i=0;i<5;i++)
    {
      newusers.push({name:'user'+[i]})
    }
    return newusers;
  }
})
