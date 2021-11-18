import React from "react";

const ItemNew = (props) => {
    return (
        <div>
            <h1>New Item Form</h1>
            <a href={`/deps/${props.dep.id}/items`}>Back to department</a>
        </div>
    );
};

export default ItemNew;