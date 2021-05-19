import {FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Card from "../components/Card/Card";
import { RootStore } from "../store";
import { getHotelById, updateHotel } from "../store/api/actions";

const HotelDetail = () => {
    const params = useParams<{ id: string }>();
    const history = useHistory()
    const [hotel,setHotel] = useState('')
    const [location,setLocation] = useState('')
    const [priceRange,setPriceRange] = useState(0)
    const dispatch = useDispatch()
    const api = useSelector((state: RootStore) => state.api);
   useEffect(() => {
     const  fetchData=async()=>{
           await  dispatch(getHotelById(parseInt(params.id)))
       }
       fetchData()
   },[])
   const onChange = (event:EventTarget & HTMLInputElement)=>{
    console.log(event.name)   
    if(event.name==='name')
       {
           setHotel(event.value)
       }
       else if(event.name = 'location'){
            setLocation(event.value)
       }
       else{
           
           if(parseInt(event.value)<1 || parseInt(event.value)>3)
           {alert('value is invalid')}
           else{
            setPriceRange(event.valueAsNumber)
           }
       }
   }
const onSubmit = async (e:FormEvent) =>{
    e.preventDefault()
    await dispatch(updateHotel(hotel,location,priceRange,parseInt(params.id)))
    history.goBack()
}
const onChangeP=(e:EventTarget & HTMLInputElement)=>{

        setPriceRange(e.valueAsNumber)
}
  return (
    <div className="mb-4">
        <div className="mt-4">

        <Card/>
        </div>
          <form onSubmit={onSubmit}>
              <div className="form-row">
        <div className="form-group col-8">
          <label>Name</label>{" "}
          <input required onChange={(e)=>onChange(e.currentTarget)} value={hotel} name='name' type="text" className="form-control" placeholder={api.getHotelById.name} />
          </div>
        <div className="form-group col-4">
          <label>Price Range</label>{" "}
          <input type="number" required onChange={(e)=>onChangeP(e.currentTarget)} className="form-control" min="1" max="5"  placeholder={`${api.getHotelById.price_range}`}/>
        </div>
        </div>
        <div className="form-group">
          <label>Location</label> <input required onChange={(e)=>onChange(e.currentTarget)} type="text" value={location} name='location' className="form-control" placeholder={api.getHotelById.location}/>
        </div>
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
};
export default HotelDetail;
