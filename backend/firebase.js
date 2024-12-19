const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '', // Correct database URL
});

const db = admin.firestore(); // Firestore
module.exports = db;
