import {FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Card from "../components/Card/Card";
import Stars from "../components/Stars/Stars";
import { RootStore } from "../store";
import { addReview, getReviewsByHotel } from "../store/api/actions";

const HotelDetail = () => {
    const params = useParams<{ id: string }>();
    const history = useHistory()
    const [reviewer,setReviewer] = useState('')
    const [review,setReview] = useState('')
    const [rating,setRating] = useState(0)
    const dispatch = useDispatch()
    const api = useSelector((state: RootStore) => state.api);
   useEffect(() => {
     const  fetchData=async()=>{
           await  dispatch(getReviewsByHotel(parseInt(params.id)))
       }
       fetchData()
   },[])
   
   const onChange = (event:EventTarget & HTMLInputElement)=>{
    console.log(event.name)   
    if(event.name==='reviewer')
       {
           setReviewer(event.value)
       }
       else if(event.name = 'review'){
            setReview(event.value)
       }
       else{
           
           if(parseInt(event.value)<1 || parseInt(event.value)>3)
           {alert('value is invalid')}
           else{
            setRating(event.valueAsNumber)
           }
       }
   }
const onSubmit = async (e:FormEvent) =>{
    e.preventDefault()
    await dispatch(addReview(reviewer,rating,review,parseInt(params.id)))
    window.location.reload()
}
const onChangeP=(e:EventTarget & HTMLInputElement)=>{

        setRating(e.valueAsNumber)
}
  return (
    <div className="mb-4">
      <div style={{display:'flex',justifyContent:'center'}}>
        <Stars rating={parseInt(api.allHotel.map((item)=>item.average_rating)[0])}/>
      </div>
        <div className="mt-4" style={{display:'flex',justifyContent:'space-around'}}>
        {
        api.review.map((item,index)=>{
          
       return  <Card key={index} name={item.name} rating={item.rating} review={item.review}/>

        })}
        </div>
          <form onSubmit={onSubmit}>
              <div className="form-row">
        <div className="form-group col-8">
          <label>Name</label>{}
          <input required onChange={(e)=>onChange(e.currentTarget)} value={reviewer} name='reviewer' type="text" className="form-control" placeholder="your name" />
          </div>
        <div className="form-group col-4">
          <label>Rating</label>{" "}
          <input type="number" required onChange={(e)=>onChangeP(e.currentTarget)} className="form-control" min="1" max="5"  placeholder="rating"/>
        </div>
        </div>
        <div className="form-group">
          <label>Review</label> <input required onChange={(e)=>onChange(e.currentTarget)} type="text" value={review} name='review' className="form-control" placeholder="review"/>
        </div>
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
};
export default HotelDetail;
