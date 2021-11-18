import React from "react";

const Items = (props) => {
    const renderItems = () => {
        return props.items.map((item) => {
            return (
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                    {/* here is where links to each item will go */}
                    <a href={`/deps/${props.dep.id}/items/${item.id}`}>View item</a>
                    <br></br>
                    <a href={`/deps/${props.dep.id}/items/${item.id}`} data-method="delete">Delete item</a>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>Welcome to the {props.dep.name} department!</h1>
            <a href="/deps">Back to Departments</a>
            <br></br>
            <a href={`/deps/${props.dep.id}/items/new`}>Create a new item</a>
            <p>{renderItems()}</p>
            {/* need to add more links */}
        </div>
    );
};

export default Items;

// <a href={`/deps/${props.dep.id}`}>Back to Items</a>
// this link needs to go in item show component