const admin = require('firebase-admin');
const serviceAccount = require('./dakkul-bd6c8-firebase-adminsdk-86556-7603532c6d');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};
