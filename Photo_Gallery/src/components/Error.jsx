import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="border border-3 rounded p-4 border-warning">
            <h2 className="fs-1">Page Not Found <i className="fa-solid fa-triangle-exclamation text-danger fs-1 ms-3"></i></h2>
            <p className="fs-4">The page you were looking for was not found.</p>
            <Link to="/" className="btn btn-dark">RETURN</Link>
        </div>
    );
}

export default Error;