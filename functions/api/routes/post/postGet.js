const _ = require('lodash');
const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { postDB, postTagDB, tagDB } = require('../../../db');

module.exports = async (req, res) => {
  const { postId } = req.params;
  if (!postId) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  let client;

  try {
    client = await db.connect(req);

    const tags = await tagDB.getAllTags(client);
    const postTags = await postTagDB.getAllPostTags(client);
    const post = await postDB.getPostById(client, postId);

    for (let i = 0; i < postTags.length; i++) {
      postTags[i].tag = _.find(tags, (tag) => tag.id === postTags[i].tagId);
    }

    post.tags = _.filter(postTags, (pt) => pt.postId === post.id).map((o) => o.tag);

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ONE_POST_SUCCESS, post));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
