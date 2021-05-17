import React, {ChangeEventHandler, FormEvent, useState} from 'react'

export default function AddRestaurent() {
    const [names,setNames] = useState('')
    const [location,setLocation] = useState('')
    const [priceRange,setPriceRange] = useState('')
    const onChange = (e:EventTarget & HTMLInputElement) =>{
        const {name,value} = e
        console.log(name,value)
        if(name==='location'){
            setLocation(value)
        }
        else{
            setNames(value)
        }
    }
    const onChangeSelect = (e:EventTarget & HTMLSelectElement) =>{
        console.log(e.value)
    }
    return (
        <div className="mb-4">
            <form >
                <div className="form-row">
                    <div className="col">
                    <input onChange={(e)=>onChange(e.currentTarget)}  name="name" type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                    <input onChange={(e)=>onChange(e.currentTarget)}   name="location" type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col">
                  <select className="custom-select my-1 mr-sm-2" onChange={(e)=>onChangeSelect(e.currentTarget)}>
                      <option disabled>Price Range</option>
                      <option value="1">$</option>
                      <option value="2">$$</option>
                      <option value="3">$$$</option>

                  </select>
                    </div>
                    <button className="btn btn-primary" >Add</button>
                </div>
            </form>
        </div>
    )
}
