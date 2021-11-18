import React from "react";

const DepEdit = (props) => {
    return (
        <div>
            <h1>Edit Department Form</h1>
            <h2>Enter new info</h2>
            <form action={`/deps/${props.dep.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <p>Department Name</p>
                <input name="dep[name]" defaultValue={props.dep.name} />
                <p>Aisle Number</p>
                <input name="dep[aisle_no]" defaultValue={props.dep.aisle_no} />
                <button type="submit">Change</button>
            </form>
            <a href={`/deps/${props.dep.id}`}>Go back to department</a>
            <br></br>
            <a href="/deps">Back to home</a>
        </div>
    );
};

export default DepEdit;