const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const createComment = async(client, content, post_id) => {
    const {rows} = await client.query(
        `
        INSERT INTO "comment" (content, post_id)
        VALUES ($1, $2)
        `,
        [content, post_id]
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
}

const getComments = async(client, post_id) => {
    const {rows} = await client.query(
        `
        SELECT * FROM "comment" c
        WHERE post_id = $1
        `,
        [post_id]
    )
    return convertSnakeToCamel.keysToCamel(rows);
}

const getCount = async(client, post_id) => {
    const {rows} = await client.query(
        `
        SELECT COUNT (*) FROM "comment" c
        WHERE post_id = $1
        `,
        [post_id]
    )
    return convertSnakeToCamel.keysToCamel(rows[0]);
}

module.exports = {createComment, getComments, getCount};