import React from 'react'
import {match} from 'react-router'
interface UpdateProps{
match:match,
history:History
}
const HotelUpdate:React.FC<UpdateProps>=({match,history})=> {
    console.log(match.params)
    return (
        <div>
        asf
        </div>
    )
}
export default HotelUpdate