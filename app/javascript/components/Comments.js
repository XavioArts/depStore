import React from "react";

const Comments = (props) => {

    const renderComments = () => {
        return props.comments.map((comment) => {
            return (
                <div>
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    {/* links will go here */}
                    <a href={`/items/${props.item.id}/comments/${comment.id}`}>View comment</a>
                    <br></br>
                    <a href={`/items/${props.item.id}/comments/${comment.id}/edit`}>Edit comment</a>
                    <br></br>
                    <a href={`/items/${props.item.id}/comments/${comment.id}`} data-method="delete">Delete comment</a>
                </div>
            );
        });
    };

    return (
        <div>
            <h1>{props.item.name}</h1>
            <a href={`/deps/${props.item.dep_id}/items`}>Go back to items</a>
            <h2>Comments:</h2>
            {renderComments()}
            <br></br>
            <a href={`/items/${props.item.id}/comments/new`}>Add a new comment</a>
        </div>
    );
};

export default Comments;