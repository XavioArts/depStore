import React from "react";

const Dep = (props) => {
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
            <p>Below this section is where you will be able to see all items in a department</p>
        </div>
    );
};

export default Dep;