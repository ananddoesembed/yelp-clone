import { ApiDispatchTypes, API_LOADED } from "./types"

export interface pgState{
    name:string,
    id:string,
    location:string,
    price_range:string
}

interface apiState{
    allHotel:pgState[],
    addHotel:string
    deleteHotel:string
    getHotelById:string
    updateHotel:string
}
const INITIAL_STATE ={
    allHotel:[],
    addHotel:'',
    deleteHotel:'',
    getHotelById:'',
    updateHotel:''
}

 const apiReducer = (state:apiState=INITIAL_STATE,action:ApiDispatchTypes)=>{
    switch(action.type){
        case API_LOADED:return{
            ...state,
            allHotel:action.payload
        }
        default:return state
    }
}
export default apiReducer