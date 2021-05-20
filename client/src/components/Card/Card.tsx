import React from 'react'
import Stars from '../Stars/Stars'

interface cardProps{
    name:string,
    rating:number,
    review:string
}


const Cards:React.FC<cardProps>=({name,rating,review})=> {
    return (
        <div className="cols-1 mb-2" style={{maxWidth:"33%"}}>
            <div className="card text-white bg-primary mb-3 mr-4" style={{width:'100%'}}>
        <div className="card-header d-flex justify-content-between">
            <span>{name}</span>
            <span><Stars rating={rating}/></span>
        </div>
            <div className="card-body">
                <p className="card-text">{review}</p>
            </div>
            </div>
        </div>
    )
}
export default Cards
