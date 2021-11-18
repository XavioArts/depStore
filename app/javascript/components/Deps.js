import React from "react";

// declaring a function to initiate and return the html/jsx that will actually be viewed
const Deps = (props) => {
    // declaring another function to return a neatly arranged new array of jsx/html
    const displayDeps = () => {
        return props.deps.map((dep) => {
            //in each department we format in this way
            return (
                <div>
                    <h1>{dep.name}</h1>
                    <h4>Aisle: {dep.aisle_no}</h4>
                    {/* First we display the name of the department
                    and then generate links for each action on the deps. */}
                    <a href={`/deps/${dep.id}`}>View Dep. info</a>
                    <br></br>
                    <a href={`/deps/${dep.id}/edit`}>Edit Dep.</a>
                    <br></br>
                    <a href={`/deps/${dep.id}`} data-method="delete">Delete Dep.</a>
                    <br></br>
                    <a href={`/deps/${dep.id}/items`}>Enter Department</a>
                </div>
            );
        });
    };
    // Final export result, we call the display function inside with our jsx
    return (
        <div>
            <h1>Welcome to The Department Store!</h1>
            <h2>Scroll down to view departments</h2>
            <h3>Or follow one of these action links</h3>
            {/* will insert links here*/}
            <a href="/deps/new">Create a new department</a>
            <br></br>
            {displayDeps()}
        </div>
    );
};

// exporting the resulting jsx from the function
export default Deps;