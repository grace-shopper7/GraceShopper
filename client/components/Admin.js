import React from "react";
import { connect } from "react-redux";
// import AllBooks from "./AllBooks";
import AllAuthors from "./AllAuthors";
import AddBookForm from "./AddBookForm";
// import EditBookForm from "./EditBookForm";
// import AddAuthorForm from "./AddAuthorForm";
// import EditAuthorForm from "./EditAuthorForm";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      formOption: undefined
    };
  }

  handleChange = event => {
    const formOption = event.target.value;
    console.log(event.target.value);
    this.setState({ formOption });
  };

  render() {
    // if (!this.props.user.admin) history.push('/')
    return this.props.user && this.props.user.admin ? (
      <div id="admin">
        <select onChange={this.handleChange}>
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="book">Add new book</option>
          <option value="author">Add new author</option>
          {/* <option value={AddBookForm}>Add new book</option>
          <option value={EditBookForm}>Edit book</option>
          <option value={AddAuthorForm}>Add new author</option>
          <option value={EditAuthorForm}>Edit author</option> */}
        </select>
        {this.state.formOption ? (
          this.state.formOption === "book" ? (
            <AddBookForm />
          ) : (
            <AllAuthors />
          )
        ) : null}
      </div>
    ) : (
      <div>YOU SHOULD NOT BE HERE REEEEE</div>
    );
  }
}

const mapState = state => ({
  user: state.user
});

export default connect(mapState)(Admin);
