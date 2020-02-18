import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { DeleteBtn } from "../components/Buttons";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err))
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
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="searchForm">
            <h5>Saved Books</h5>
            {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <div className="float-right">
                        <a className="btn btn-info mr-1" href={book.link}>View</a>
                        <DeleteBtn className="btn btn-danger" onClick={() => this.handleBookDelete(book._id)} />
                      </div>
                      <h5>{book.title}&nbsp;</h5>
                      <div className="d-inline-flex">
                        <p>Written By&nbsp;</p>
                        {book.authors.map(author => 
                          <p>{author}&nbsp;</p>
                        )}
                      </div>
                      <div></div>
                      <div className="d-inline-flex">
                        <div>
                          {book.image ? <img alt={book.title} src={book.image}/> : null}
                        </div>
                        <p className="ml-3">{book.description}</p>
                      </div>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
