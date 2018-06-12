import React from "react";
import { connect } from "react-redux";
import { addNewBook } from "../store/books";
import { addNewAuthor } from "../store/authors";

class AddBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      publicationDate: "",
      publisher: "",
      quantity: 0,
      price: 0,
      genre: [],
      description: "",
      imageUrl: "",
      authorId: 0
    };
  }

  handleSubmit = async () => {
      await this.props.addBook({...this.state, genre: this.state.genre.join("|")})
  };

  handleChange = event => {
      console.log(this.state)
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const authors = this.props.authors ? this.props.authors : [];
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Publication Date:
          <input
            name="publicationDate"
            type="date"
            value={this.state.publicationDate}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Publisher:
          <input
            name="publisher"
            type="text"
            value={this.state.publisher}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Initial stock:
          <input
            name="quantity"
            type="number"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Price:
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Image URL:
          <input
            name="imageUrl"
            type="text"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Author:
          <select
            name="authorId"
            value={this.state.authorId}
            onChange={this.handleChange}
          >
            <option value={0}>Select the author</option>
            {authors.map(author => (
              <option key={author.id} value={author.id}>{`${author.firstName} ${
                author.lastName
              }`}</option>
            ))}
          </select>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" onClick={this.handleSubmit}>Add Book</button>
      </form>
    );
  }
}

const mapState = state => ({
  authors: state.authors
});

const mapDispatch = dispatch => ({
  addBook: book => dispatch(addNewBook(book)),
  addAuthor: author => dispatch(addNewAuthor(author))
});

export default connect(
  mapState,
  mapDispatch
)(AddBookForm);
