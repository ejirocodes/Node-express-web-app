const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:bookRoutes');


const bookRouter = express.Router();

function router(nav) {
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
  bookRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to the server');

          const db = client.db(dbName);

          const col = await db.collection('books');

          const books = await col.find().toArray();

          res.render(
            'bookListView',
            {
              nav,
              title: 'Library',
              books,
            },
          );
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id],
        },
      );
    });
  return bookRouter;
}

module.exports = router;
