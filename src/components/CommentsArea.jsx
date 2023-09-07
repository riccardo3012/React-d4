import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    review: { comment: [], rate: [], elementId: [] },
    working: true,
    alert: {
      stato: false,
      variant: "",
      message: "error",
    },
    select: false,
  };
  Reload = () => {
    this.props.toggle();
  };
  componentDidMount() {
    const elementId = this.props.selectedBook.asin;
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${elementId}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5ZDM4ZDhkM2Q0OTAwMTRjZmQ4MWIiLCJpYXQiOjE2OTQwOTQyMjEsImV4cCI6MTY5NTMwMzgyMX0.BoF9Q2ZTWXtNV-hK5TYf00G79HzZJTKJZNxYVDLyPTY",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei commenti:", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Commenti</h2>
        <CommentsList comments={this.state.comments} />
        <AddComment />
      </div>
    );
  }
}

export default CommentArea;
