import { useState } from "react"
const Images = (props) => {
    
    return (
        <div className="image-container">
            {props.photos.map((image) => {
                 let farm = image.farm;
                 let server = image.server;
                 let id = image.id;
                 let secret = image.secret;
                 let title = image.title;
                 let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                return <div className="single-image-container">
                    <img src={url} title={title}></img>
                </div>

            })}
        </div>
    )
}
export default Images