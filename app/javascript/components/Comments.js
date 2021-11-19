import React from "react";

const Comments = (props) => {

    const renderComments = () => {
        return props.comments.map((comment) => {
            return (
                <div>
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    {/* links will go here */}
                    <a href={`/items/${props.item.id}/comments/${comment.id}`} data-method="delete">Delete comment</a>
                </div>
            );
        });
    };

    return (
        <div>
            <h1>{props.item.name}</h1>
            <h2>Comments:</h2>
            {renderComments()}
            <a href={`/items/${props.item.id}/comments/new`}>Add a new comment</a>
        </div>
    );
};

export default Comments;