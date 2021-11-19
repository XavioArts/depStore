import React from "react";

const CommentEdit = (props) => {
    return (
        <div>
            {/* <h1>Edit Comment Form</h1>
            <h4>For {props.item.name}</h4>
            <a href={`/items/${props.item.id}/comments`}>Back to item comments</a>
            <h2>Enter comment:</h2>
            <form action={`/items/${props.item.id}/comments`} method="post">
                <p>Author:</p>
                <input name="comment[author]" defaultValue="Enter your name"/>
                <p>Comment:</p>
                <input name="comment[body]" defaultValue="Type your comment here.." />
                <button type="Submit">Change</button>
            </form> */}
        </div>
    );
};

export default CommentEdit;