import express from "express";
import path from "path";
import fs from 'fs';
import cors from "cors"
import { fileURLToPath } from 'url';
import fileUpload from "express-fileupload";
import { sendCreated, sendError, sendNotFound, sendSuccess } from "./response/response.js";
import { postBookValidation, postReviewValidation } from "./response/helper.js";

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({credentials: true}))
app.use(express.static((path.join(__dirname , '/public'))))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())

// Dummy datasets
let booklist = [
  {
    id: 1,
    title: 'Bumi Manusia',
    description: 'Roman Tetralogi Buru mengambil latar belakang dan cikal bakal nation Indonesia di awal abad ke-20. Dengan membacanya waktu kita dibalikkan sedemikian rupa dan hidup di era membibitnya pergerakan nasional mula-mula, juga pertautan rasa, kegamangan jiwa, percintaan, dan pertarungan kekuatan anonim para srikandi yang mengawal penyemaian bangunan nasional yang kemudian kelak melahirkan Indonesia modern.',
    author: 'Pramoedya Ananta Toer',
    image: '/image/bumi-manusia.jpg',
    rating: 3,
  },
  {
    id: 2,
    title: 'Pulang',
    description: '"Aku tahu sekarang, lebih banyak luka di hati bapakku dibanding di tubuhnya. Juga mamakku, lebih banyak tangis di hati Mamak dibanding di matanya." Sebuah kisah tentang perjalanan pulang, melalui pertarungan demi pertarungan, untuk memeluk erat semua kebencian dan rasa sakit."',
    author: 'Tere Liye',
    image: '/image/pulang.jpg',
    rating: 5,
  },
  {
    id: 3,
    title: 'Kosmos',
    description: 'Buku Kosmos pada dasarnya merupakan buku ilmu pengetahuan, tetapi dengan gaya yang khas, kita dapat melihat bahwa ilmu pengetahuan dapat menjadi santapan masyarakat luas. Buku ini tidak hanya berguna untuk memperluas cakrawala kita, tetapi juga mengajak kita untuk menghayati dan mencintai penemuan ilmiah.',
    author: 'Carl Sagan',
    image: '/image/kosmos.jpg',
    rating: 4,
  }
]

let reviewlist = [
  {
    id: 1,
    bookId: 1,
    reviewer: 'User 1',
    review: 'Ini buku ok',
    rating: 5,
  },
  {
    id: 2,
    bookId: 3,
    reviewer: 'User 2',
    review: 'Ini buku juga ok',
    rating: 4,
  },
  {
    id: 3,
    bookId: 2,
    reviewer: 'User X',
    review: 'Ini buku okokok',
    rating: 3
  }
]

app.get('/', (req, res) => {
  res.send('SiBuku REST API!')
})

// ============= CATALOGUE API =============
app.get('/books', (req, res) => {
  try {
    // Cari by title dengan Params
    const findByTitle = req.query.title;

    if (findByTitle) {
      const filter = booklist.find(book => book.title.toLowerCase().includes(findByTitle.toLowerCase()));

      if (!filter) return sendNotFound(res, 'Book not found!');
      return sendSuccess(res, 'Success', { filter });
    } 
    return sendSuccess(res, 'Success', { booklist });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.get('/books/:id', (req, res) => {
  try {
    // Cari by title dengan Params
    const findById = req.params.id;
    const filter = booklist.find(book => book.id == findById);

    if (!filter) return sendNotFound(res, 'Book not found!');
    return sendSuccess(res, 'Success', { filter });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.post('/books', (req, res) => {
  try {
    const id = booklist.length + 1;
    const { title, description, author, rating } = req.body;
    const image = req.files.image;

    const formatFilename = title.toLowerCase().replace(/[\s!@#$%^&*()_+={}\[\];:'",.<>?\/\\|`~-]/g, '');
    const filename = `${formatFilename}.jpg`;

    image.mv(path.join(__dirname, '../public/image', filename));

    const { error } = postBookValidation(req.body);
    if (error) return sendError(res, error.details[0].message, 400);

    const createdBook = {
      id,
      title,
      description,
      author, 
      image: `/image/${filename}`,
      rating,
    };

    return sendCreated(res, 'Book Created!', { createdBook });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.put('/books/:id', (req, res) => {
  try {
    const findById = req.params.id;
    const { title, description, author, rating } = req.body;
    const filter = booklist.find(book => book.id == findById);

    if (!filter) return sendNotFound(res, 'Book not found!');

    const oldFilename = `${filter.title.toLowerCase().replace(/[\s!@#$%^&*()_+={}\[\];:'",.<>?\/\\|`~-]/g, '')}.jpg`;
    const newImage = req.files.image;

    if (newImage) {
      try {
        fs.unlinkSync(path.join(__dirname, '../public/image', oldFilename));
      } catch (err) {
        console.error(err);
      }

      const formatFilename = title.toLowerCase().replace(/[\s!@#$%^&*()_+={}\[\];:'",.<>?\/\\|`~-]/g, '');
      const filename = `${formatFilename}.jpg`;

      newImage.mv(path.join(__dirname, '../public/image', filename));
      filter.image = `/image/${filename}`;
    }

    const { error } = postBookValidation(req.body);
    if (error) return sendError(res, error.details[0].message, 400);

    filter.title = title;
    filter.description = description;
    filter.author = author;
    filter.rating = rating;

    return sendSuccess(res, 'Book Updated!', { filter });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.delete('/books/:id', (req, res) => {
  try {
    const findById = req.params.id;
    const filter = booklist.find(book => book.id == findById);

    if (!filter) return sendNotFound(res, 'Book not found!');

    const index = booklist.indexOf(filter);
    booklist.splice(index, 1);

    return sendSuccess(res, 'Book deleted!', { filter });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

// ============= REVIEW API =============
app.get('/books/:id/reviews', (req, res) => {
  try {
    const findBookById = req.params.id;
    const filter = reviewlist.find(review => review.bookId == findBookById);

    if (!filter) return sendNotFound(res, 'Book not found!');
    return sendSuccess(res, 'Success', { filter })
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.post('/books/:id/reviews', (req, res) => {
  try {
    const findBookById = req.params.id;
    const filter = reviewlist.find(review => review.bookId == findBookById);
    
    if (!filter) return sendNotFound(res, 'Book not found, cannot create review!');
    
    const id = reviewlist.length + 1;
    const { bookId = findBookById, reviewer, review, rating } = req.body;
    const { error } = postReviewValidation(req.body);

    if (error) return sendError(res, error.details[0].message, 400);
    
    const createdReview = {
      id,
      bookId,
      reviewer,
      review,
      rating,
    };

    return sendCreated(res, 'Review Created!', { createdReview });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.put('books/:id/reviews/:review_id', (req, res) => {
  try {
    const findBookById = req.params.id;
    const filter = reviewlist.find(review => review.bookId == findBookById);

    const findReviewById = req.params.review_id;
    const filter_review = reviewlist.find(review => review.id == findReviewById);

    if (!filter) return sendNotFound(res, 'Book not found, cannot update review!');
    else if (!filter_review) return sendNotFound(res, 'Book found, but the review is not found!');
    else if (!filter && !filter_review) return sendNotFound(res, 'No book and review are found!');

    const { bookId = findBookById, reviewer, review, rating } = req.body;
    const { error } = postReviewValidation(req.body);

    if (error) return sendError(res, error.details[0].message, 400);

    filter_review.bookId = bookId;
    filter_review.reviewer = reviewer;
    filter_review.review = review;
    filter_review.rating = rating;

    return sendSuccess(res, 'Review Updated!', { filter_review });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
}) 

app.delete('books/:id/reviews/:review_id', (req, res) => {
  try {
    const findBookById = req.params.id;
    const filter = reviewlist.find(review => review.bookId == findBookById);

    const findReviewIndex = reviewlist.findIndex(review => review.id == req.params.review_id);
    // const findReviewById = req.params.review_id;
    // const filter_review = reviewlist.find(review => review.id == findReviewById);

    if (!filter) return sendNotFound(res, 'Book not found, cannot update review!');
    else if (!filter_review) return sendNotFound(res, 'Book found, but the review is not found!');
    else if (!filter && !filter_review) return sendNotFound(res, 'No book and review are found!');

    const deletedReview = reviewlist.splice(findReviewIndex, 1)[0];
    // const index = reviewlist.indexOf(findReviewById);
    // reviewlist.splice(index, 1);

    return sendSuccess(res, 'Review Deleted!', { filter_review });
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error!');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})