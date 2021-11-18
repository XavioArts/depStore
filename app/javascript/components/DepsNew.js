import React from "react";

const DepsNew = () => {
    return (
        <div>
            <h1>New Department Form</h1>
            <a href="/deps">Back to Home</a>
            <h2>Enter new department info:</h2>
            <form action="/deps" method="post">
                <p>Department Name:</p>
                <input name="dep[name]" placeholder="Enter name"/>
                <p>Department Aisle:</p>
                <input name="dep[aisle_no]" placeholder="Enter no. (1234)" />
                <button type="Submit">Create</button>
            </form>
        </div>
    );
};

export default DepsNew;