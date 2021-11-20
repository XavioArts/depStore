import React from "react";

const Item = (props) => {
    const renderComments = () => {
        return props.comments.map((comment) => {
            return (
                <div>
                    <h5>{comment.author}</h5>
                    <p>{comment.body}</p>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>Item info</h1>
            <h2>{props.item.name}</h2>
            <h4>Description:</h4>
            <p>{props.item.body}</p>
            <h4>Comments:</h4>
            {renderComments()}
            <h5>Action links</h5>
            <a href={`/items/${props.item.id}/comments`}>View/Edit/Add comments</a>
            <br></br>
            <a href={`/deps/${props.dep.id}/items/${props.item.id}/edit`}>Edit item</a>
            <br></br>
            <a href={`/deps/${props.dep.id}/items/${props.item.id}`} data-method="delete">Delete item</a>
            <br></br>
            <a href={`/deps/${props.dep.id}/items`}>Back</a>
        </div>
    );
};

export default Item;