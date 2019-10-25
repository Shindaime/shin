Contents = new Mongo.Collection(null)

Contents.getCreatedContent = function (tag, limit, cb) {
    var query = {
        tag: tag,
        limit: limit
    };
    steem.api.getDiscussionsByCreated(query, function (error, result) {
        if (!result)
            return cb(error)
        else {
            for (var i = 0; i < result.length; i++) {
                try {
                result[i].json_metadata = JSON.parse(result[i].json_metadata)
                } catch (error) {
                    console.log(error)
                    cb(error)
                }
                Contents.upsert({ _id: result[i]._id }, result[i])
            }
            return cb(null)
        }
    })
}
