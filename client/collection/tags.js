Tags = new Mongo.Collection(null)

Tags.getTags = function (cb) {
  steem.api.getTrendingTags('steemit', '100', function (err, result) {
    if (!result)
      return cb(err)
    else {
      for (var i = 0; i < result.length; i++) {
        Tags.upsert({ _id: result[i]._id }, result[i])
      }
      return cb(null)
    }
  });
}
