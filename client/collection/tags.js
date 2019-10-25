Tags = new Mongo.Collection(null)

Tags.getTags = function (cb) {
    steem.api.getTrendingTags('steemit', '50', function(err, result) {
      console.log(err, result);
    });
}
