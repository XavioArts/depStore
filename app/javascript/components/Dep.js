import React from "react";

const Dep = (props) => {
    const renderItems = () => {
        return props.items.map((item) => {
            return (
                <div>
                    <h5>{item.name}</h5>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>Department</h1>
            <h2>{props.dep.name}</h2>
            <h2>Aisle #{props.dep.aisle_no}</h2>
            <a href={`/deps/${props.dep.id}/edit`}>Edit department</a>
            <br></br>
            <a href={`/deps/${props.dep.id}`} data-method="delete">Delete department</a>
            <br></br>
            <a href="/deps">Back to home</a>
            <br></br>
            <a href={`/deps/${props.dep.id}/items`}>View all Items</a>
            <br></br>
            <h3>Item List</h3>
            <p>{renderItems()}</p>
        </div>
    );
};

export default Dep;