import SingleComment from "./SingleComment";
import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <div>
        <h3>Aggiungi un Commento</h3>
        {this.props.review.comment.map((elem, index) => (
          <SingleComment
            comment={elem}
            key={`List-${index}`}
            iD={this.props.iD}
            elementId={this.props.review.elementId}
            index={index}
            Reload={this.props.Reload}
          />
        ))}
      </div>
    );
  }
}

export default AddComment;
