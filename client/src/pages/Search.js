import React, { Component } from "react";
import { SaveBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Form } from "../components/Search";
import "./style.css";


class Search extends Component {
  state = {
    search: "",
    books: []
  };

  searchBooks = query => {
    console.log(query)
    API.search(query)
    .then(res => this.setState({ books: res.data.items }))
    .catch(err => console.log(err));
  };

  handleBookSave = id => {
    const saveItem = this.state.books.find(book => book.id === id)

    API.saveBook({
      bookID: saveItem.id,
      title: saveItem.volumeInfo.title,
      authors: saveItem.volumeInfo.authors,
      description: saveItem.volumeInfo.description,
      image: saveItem.volumeInfo.imageLinks.thumbnail,
      link: saveItem.volumeInfo.infoLink
    })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <p className="lead">Search for and Save Books Of Interest</p>
            </Jumbotron>
            <form className="searchForm">
              <p>Book Search</p>
              <br></br>
              <p>Book</p>
              <Form
                value={this.state.search}
                name="search"
                placeholder="Title (required)"
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </form>
          </Col>
          <Col size="md-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <p>{book.volumeInfo.title}</p>
                    <div className="d-inline-flex">
                      <p>Written By&nbsp;</p>
                      {book.volumeInfo.authors.map(author => 
                        <p>{author}&nbsp;</p>
                      )}
                    </div>
                    <p>{book.volumeInfo.description}</p>
                    {book.volumeInfo.imageLinks ? <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail}/> : null}
                    <div className="float-right">
                      <a className="btn btn-info mr-1" href={book.volumeInfo.infoLink}>View</a>
                      <SaveBtn className="btn btn-success" onClick={() => this.handleBookSave(book.id)} />
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
