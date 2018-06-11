import React from "react";
import { Link } from "react-router-dom";

const BookPreview = props => {
  const author = props.author;
  return (
    <div className="author-preview" >
      <Link to={`/authors/${author.id}`}>
        <img src={author.imageUrl} />
        <div className="author-name">{author.firstName} {author.lastName} </div>
      </Link>
    </div>
  );
};

export default BookPreview;
