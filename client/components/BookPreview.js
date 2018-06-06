import React from "react";
import { Link } from "react-router-dom";

const BookPreview = props => {
  const book = props.book;
  return (
    <div className="bookpreview">
      <Link to={`/books/${book.id}`}>
        <img src={book.imageUrl} />
        <p>{book.title}</p>
      </Link>
      <p>
        {book.authorId
          ? `By ${book.author.firstName} ${book.author.lastName}`
          : null}
      </p>
    </div>
  );
};

export default BookPreview;
