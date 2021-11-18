import React from "react";

const ItemNew = (props) => {
    return (
        <div>
            <h1>New Item Form</h1>
            <a href={`/deps/${props.dep.id}/items`}>Back to department</a>
            <h2>Enter new item info:</h2>
            <form action={`/deps/${props.dep.id}/items`} method="post">
                <p>Item Name:</p>
                <input name="item[name]" placeholder="Enter name"/>
                <p>Description:</p>
                <input name="item[body]" placeholder="Enter description" />
                <button type="Submit">Create</button>
            </form>
        </div>
    );
};

export default ItemNew;