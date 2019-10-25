MainUser = new Mongo.Collection(null)
Users = new Mongo.Collection(null)

MainUser.add = function (username, cb) {
   let account = {};
   account.creation = new Date();
   account.name = username;
   MainUser.insert(account);
   cb(null)
}
