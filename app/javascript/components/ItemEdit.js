import React from "react";

const ItemEdit = (props) => {
    return (
        <div>
            <h1>Edit Item Form</h1>
            <h2>Enter new info</h2>
            <form action={`/deps/${props.dep.id}/items/${props.item.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <p>Item Name</p>
                <input name="item[name]" defaultValue={props.item.name} />
                <p>Item Description</p>
                <input name="item[body]" defaultValue={props.item.body} />
                <button type="submit">Change</button>
            </form>
            <a href={`/deps/${props.dep.id}/items/${props.item.id}`}>Go back to item</a>
            <br></br>
            <a href={`/deps/${props.dep.id}/items`}>Go back to department</a>
            <br></br>
            <a href="/deps">Back to home</a>
        </div>
    );
};

export default ItemEdit;