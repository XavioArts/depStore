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
                    <a href={`/deps/${props.dep.id}/items/${item.id}`} data-method="delete">View item</a>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>Welcome to the {props.dep.name} department!</h1>
            <a href="/deps">Back to Departments</a>
            <p>{renderItems()}</p>
            {/* need to add more links */}
        </div>
    );
};

export default Items;

// <a href={`/deps/${props.dep.id}`}>Back to Items</a>
// this link needs to go in item show component