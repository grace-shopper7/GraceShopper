import React, { Component } from "react";
import { connect } from "react-redux";
import AuthorPreview from './AuthorPreview'

class AllAuthors extends Component {

  render() {
    const authors = this.props.authors ? this.props.authors : [];
    console.log(authors)
    return (
      <div className="all-authors">
        {authors.map(author => <AuthorPreview key={author.id} author={author} />)}
      </div>

    );
  }
}

const mapState = state => ({
  authors: state.authors,
});

export default connect(mapState, null)(AllAuthors);
