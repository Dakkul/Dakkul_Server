const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllPosts = async (client) => {
  const { rows } = await client.query(
    `
    SELECT id, title, emoji FROM post p
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getPostById = async (client, postId) => {
  const { rows } = await client.query(
    `
      SELECT * FROM post p
      WHERE id = $1
      `,
    [postId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getPostByIds = async (client, postIds) => {
  const { rows } = await client.query(
    `
      SELECT id, title, emoji FROM post
      WHERE id IN (${postIds.join()})
      `,
    [postIds],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllPosts, getPostById, getPostByIds };
