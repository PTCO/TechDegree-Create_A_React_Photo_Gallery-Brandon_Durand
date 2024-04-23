import React from "react";

const NotFound = () => {
    return (
        <div className="mt-4 pt-4">
            <h2 className="fs-1  border border-3 p-3 rounded mb-4">No Results Found<i className="fa-solid fa-circle-exclamation text-danger ms-3"></i></h2>
            <p className="fs-4">That search did not return any results</p>            
        </div>
    );
}

export default NotFound;