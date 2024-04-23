import React from "react";

const Photo = ({ Data }) => {
    return (
        <li className="img-thumbnail m-2 resultImageContainer"><img className="resultImage" src={`https://live.staticflickr.com/${Data.server}/${Data.id}_${Data.secret}_w.jpg`} alt={Data.title} /></li>
    )
}

export default Photo;