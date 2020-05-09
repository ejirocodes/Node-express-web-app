const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const books = [
  {
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
    res.render('books', {
      nav: [{ link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }],
      title: 'Books',
      books,
    });
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('Hello from single book');
  });

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }],
      title: 'Library',
    },
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
