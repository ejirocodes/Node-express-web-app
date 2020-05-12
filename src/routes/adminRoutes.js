const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminROutes');

const adminRouter = express.Router();

const books = [{
  title: 'Chronicles of Enigx',
  genre: 'Historical fiction',
  author: 'Ryan Scott',
  read: true,
},
{
  title: 'Planet of Rostian',
  genre: 'Historical fiction',
  author: 'Michael Scoffield',
  read: false,
},
{
  title: 'Right of Rignet',
  genre: 'Historical fiction',
  author: 'Dave Flisnsten',
  read: false,
},
{
  title: 'Then and Now',
  genre: 'Drama',
  author: 'Platonic',
  read: true,
},
{
  title: 'Mafia Beaurea',
  genre: 'Historical fiction',
  author: 'Blake Scott',
  read: true,
},
];

function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to the server');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany('books');
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }

        client.close();
      }());
    });
  return adminRouter;
}

module.exports = router;
