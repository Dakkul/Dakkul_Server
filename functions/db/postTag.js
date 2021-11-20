const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllPostTags = async (client) => {
  const { rows } = await client.query(
    `
      SELECT * FROM post_tag
      `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getPostTagByTagIds = async (client, tagIds) => {
  const { rows } = await client.query(
    `
        SELECT * FROM post_tag
        WHERE tag_id IN (${tagIds.join()})
      `,
    [tagIds],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllPostTags, getPostTagByTagIds };
