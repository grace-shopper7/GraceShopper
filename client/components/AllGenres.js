import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

class AllGenres extends React.Component {
  render() {
    let genreArr = [];
    this.props.books.map(book => {
      genreArr = genreArr.concat(book.genre);
    })

    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    let unique = genreArr.filter(onlyUnique).sort()

    return (
      <div className="allGenres">
        {unique.map((genre) =>
          <div key={genre}>
            <Link to={`/genres/${genre}`}>{genre}</Link>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  books: state.books
});

export default connect(mapState, null)(AllGenres);
