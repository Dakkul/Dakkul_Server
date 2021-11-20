const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllTags = async (client) => {
  const { rows } = await client.query(
    `
      SELECT * FROM tag
      `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getTagByTagIds = async (client, tagIds) => {
  const { rows } = await client.query(
    `
        SELECT * FROM tag
        WHERE id IN (${tagIds.join()})
      `,
    [tagIds],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllTags, getTagByTagIds };
