import React from "react";

const Comment = (props) => {
    return (
        <div>
            <h1>View Comment</h1>
            <h4>On the {props.item.name}</h4>
            <h3>Author</h3>
            <h4>{props.comment.author}</h4>
            <p>{props.comment.body}</p>
            <a href={`/items/${props.item.id}/comments/${props.comment.id}/edit`}>Edit this comment</a>
            <br></br>
            <a href={`/items/${props.item.id}/comments/${props.comment.id}`} data-method="delete">Delete this comment</a>
            <br></br>
            <a href={`/items/${props.item.id}/comments`}>Back to all comments</a>
        </div>
    );
};

export default Comment;