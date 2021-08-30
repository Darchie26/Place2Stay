import React from 'react'

function Card({src,title,description}) {
    return (
        <div className="card">
            <div className="image">
                <img src={src}/>
            </div>
            <div className="title">
                <h2>{title}</h2>
                </div> 
                <div className="description">
                    <p>{description}</p>

                </div>
            
        </div>
    )
}

export default Card
