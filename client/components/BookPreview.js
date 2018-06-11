import React from "react";
import { Link } from "react-router-dom";

const BookPreview = props => {
  const book = props.book;
  const author = props.author;
  return (
    <div className="bookpreview">
      <Link to={`/books/${book.id}`}>
        <img className='book-cover' src={book.imageUrl} />
        <div className="book-titles">{book.title}</div>
      </Link>
      <div className="books-author">
        {author ? `By ${author.firstName} ${author.lastName}` : book.authorId
          ? `By ${book.author.firstName} ${book.author.lastName}`
          : null}
      </div>
    </div>
  );
};

export default BookPreview;
