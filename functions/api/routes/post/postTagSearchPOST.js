const _ = require('lodash');
const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { postDB, postTagDB, tagDB } = require('../../../db');

module.exports = async (req, res) => {
  const { tagIds } = req.body;
  if (!tagIds) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  let client;

  try {
    client = await db.connect(req);

    const tagsByTagIds = await tagDB.getTagByTagIds(client, tagIds);

    const postTagByTagIds = await postTagDB.getPostTagByTagIds(client, tagIds);
    const postIds = [...new Set(postTagByTagIds.map((o) => o.postId).filter(Boolean))];
    const posts = await postDB.getPostByIds(client, postIds);

    for (let i = 0; i < postTagByTagIds.length; i++) {
      postTagByTagIds[i].tag = _.find(tagsByTagIds, (tag) => tag.id === postTagByTagIds[i].tagId);
    }

    for (let i = 0; i < posts.length; i++) {
      posts[i].tags = _.filter(postTagByTagIds, (pt) => pt.postId === posts[i].id).map((o) => o.tag);
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ALL_POSTS_SUCCESS, posts));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
