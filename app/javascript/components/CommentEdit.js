import React from "react";

const CommentEdit = (props) => {
    return (
        <div>
            <h1>Edit Comment Form</h1>
            <h4>For {props.item.name}</h4>
            <h2>Enter comment:</h2>
            <form action={`/items/${props.item.id}/comments/${props.comment.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <p>Author:</p>
                <input name="comment[author]" defaultValue={props.comment.author}/>
                <p>Comment:</p>
                <input name="comment[body]" defaultValue={props.comment.body} />
                <button type="Submit">Change</button>
            </form>
            <a href={`/items/${props.item.id}/comments/${props.comment.id}`}>Back to comment</a>
            <br></br>
            <a href={`/items/${props.item.id}/comments`}>Back to item comments</a>
        </div>
    );
};

export default CommentEdit;