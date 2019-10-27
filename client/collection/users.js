MainUser = new Mongo.Collection(null)
User = new Mongo.Collection(null)

MainUser.add = function (username, cb) {
   let account = {};
   account.creation = new Date();
   account.name = username;
   MainUser.insert(account);
   cb(null)
}

User.add = function (username, cb) {
   steem.api.getAccounts([username], function (error, result) {
       if (error || !result || result.length < 1) {
           cb(error)
           return
       }
       result.forEach(account => {
         var user = account;
         try {
             user.json_metadata = JSON.parse(user.json_metadata);
         } catch (e) {
         }
         User.remove({});
         User.upsert({ _id: user.id }, user);
       });
       cb(null)
   });
}

