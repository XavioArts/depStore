import React from "react";

const CommentNew = (props) => {
    return (
        <div>
            <h1>New Comment Form</h1>
            <h4>For {props.item.name}</h4>
            <a href={`/items/${props.item.id}/comments`}>Back to item comments</a>
            <h2>Enter comment:</h2>
            <form action={`/items/${props.item.id}/comments`} method="post">
                <p>Author:</p>
                <input name="comment[author]" placeholder="Enter your name"/>
                <p>Comment:</p>
                <input name="comment[body]" placeholder="Type your comment here.." />
                <button type="Submit">Create</button>
            </form>
        </div>
    );
};

export default CommentNew;