import React from "react";
import { Link } from "react-router-dom";

const BookPreview = props => {
  const book = props.book;
  return (
    <div className="bookpreview">
      <Link to={`/books/${book.id}`}>
        <img className='book-cover' src={book.imageUrl} />
        <p className="titles">{book.title}</p>
      </Link>
      <div className="books-author">
        {book.authorId
          ? `By ${book.author.firstName} ${book.author.lastName}`
          : null}
      </div>
    </div>
  );
};

export default BookPreview;
