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

Template.registerHelper('displayUpvote', function (share, rewards) {
  return (share * rewards).toFixed(3);
});

Template.registerHelper('displayAllVoters', function (votes, isDownvote) {
  if (!votes) return
  votes.sort(function (a, b) {
      var rsa = parseInt(a.rshares)
      var rsb = parseInt(b.rshares)
      return rsb - rsa
  })
  if (isDownvote) votes.reverse()

  var rsharesTotal = 0;
  for (let i = 0; i < votes.length; i++)
      rsharesTotal += parseInt(votes[i].rshares)

  var top300 = []
  for (let i = 0; i < 300; i++) {
      if (i == votes.length) break
      votes[i].rsharespercent = parseInt(votes[i].rshares) / rsharesTotal
      if (parseInt(votes[i].rshares) < 0 && !isDownvote) break;
      if (parseInt(votes[i].rshares) >= 0 && isDownvote) break;
      top300.push(votes[i])
  }
  console.log(top300);
  return top300
});


Template.registerHelper('displayPayout', function (active, total, voter) {
  if (active && !total || !voter) return active
  if (!active || !total || !voter) return
  var payout = active
  if (total.split(' ')[0] > 0) {
      var amount = parseInt(total.split(' ')[0].replace('.', '')) + parseInt(voter.split(' ')[0].replace('.', ''))
      amount /= 1000
      payout = amount + ' SBD'
  }
  if (!payout) return
  var amount = payout.split(' ')[0]
  var currency = payout.split(' ')[1]
  amount = parseFloat(amount).toFixed(3)
  return amount;
})

Template.registerHelper('displayPayoutUpvote', function (share, rewards) {
  return (share * rewards).toFixed(3);
});