const express = require('express');

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
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books,
        },
      );
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