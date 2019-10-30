import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import steem from 'steem';
window.steem = steem;
import './main.html';

FlowRouter.wait();
BlazeLayout.setRoot('body');


Meteor.startup(function () {

  Contents.getTrendingContent('steemit',20,function(error){
    if(error)
    console.log(error);
  })
  Tags.getTags(function(error){
    if(error)
    console.log(error);
  })
  FlowRouter.initialize({ hashbang: false }, function () {});
})
