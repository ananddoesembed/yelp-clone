import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {match, useParams} from 'react-router'
import { RootStore } from '../store'

const HotelUpdate=()=> {
    const [hotelName,setHotelName] = useState('')
    const params = useParams<{id:string}>()
    const api = useSelector((state:RootStore)=>state.api)
    const data = api.allHotel.map(hotel=>{if(hotel.id === params.id)
    return hotel})
    setHotelName(data[0].name)
    return (
        <div className="mb-4">
            <h1 className="text-center">Update Hotel</h1>
            <form>
                <div className="form-group">
                    <label>Name</label> <input value={hotelName} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Location</label> <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Price Range</label> <input type="number" className="form-control"/>
                </div>
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}
export default HotelUpdate