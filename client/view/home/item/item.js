Template.profile.rendered = function () {
    $('.menu.profile .item').tab()
    if (Session.get('currentprofiletab')) {
      var tabmenu = Session.get('currentprofiletab');
      switch (tabmenu) {
        case 'blog':
          $('.menu.profile .item').tab('change tab', 'first')
          FlowRouter.go('/@' + Session.get('user'))
          break;
        case 'comments':
          $('.menu.profile .item').tab('change tab', 'second')
          break;
        case 'replies':
          $('.menu.profile .item').tab('change tab', 'tirdh')
          break;
        case 'rewards':
          $('.menu.profile .item').tab('change tab', 'fourth')
          break;
        case 'wallet':
          $('.menu.profile .item').tab('change tab', 'fifth')
          break;
        default:
          $('.menu.profile .item').tab('change tab', 'first')
      }
    }

    $('.left.floated.upvote')
    .popup({
      popup: '.upvote.popup'
     
    })
  ;
}



    

