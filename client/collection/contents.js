Content  = new Mongo.Collection(null)

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

Contents.getTrendingContent = function (tag, limit, cb) {
    var query = {
        tag: tag,
        limit: limit
    };
    steem.api.getDiscussionsByTrending(query, function (error, result) {
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


Content.getContent = function (author, permlink, cb) {
        steem.api.getContent(author, permlink, function (error, result) {
            if (!result)
                return cb(true)
            else {
                if (result.json_metadata) {
                    try {
                        result.json_metadata = JSON.parse(result.json_metadata)
                    } catch (error) {
                        console.log(error)
                        cb(error)
                    }
                    Content.remove({});
                    Content.upsert({ _id: result._id }, result);
                }
            }
            cb(null)
        });
}