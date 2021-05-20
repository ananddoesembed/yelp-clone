import { ApiDispatchTypes, DELETE_HOTELS, GET_ALL_HOTELS, GET_HOTELS, UPDATE_HOTELS,GET_REVIEWS } from "./types"

export interface pgState{
    name:string,
    id:string,
    location:string,
    price_range:number,
    average_rating:string
}
export interface rvState{
    id:string,
    rating:number,
    name:string,
    review:string,
    hitel_id:string
}
interface apiState{
    allHotel:pgState[],
    addHotel:string
    deleteHotel:string
    getHotelById:pgState
    updateHotel:string,
    review:rvState[]
}
const INITIAL_STATE ={
    allHotel:[],
    addHotel:'',
    deleteHotel:'',
    getHotelById:{
        name:'',
        id:'',
        location:'',
        price_range:0,
        average_rating:''
    },
    updateHotel:'',
    review:[]
}

 const apiReducer = (state:apiState=INITIAL_STATE,action:ApiDispatchTypes)=>{
    switch(action.type){
        case GET_ALL_HOTELS:return{
            ...state,
            allHotel:action.payload
        }
        case UPDATE_HOTELS:return{
            ...state,
            addHotel:action.payload,
        }
        case DELETE_HOTELS:return{
            ...state,
            deleteHotel:action.payload,
        }
        case GET_HOTELS:return{
            ...state,
            getHotelById:action.payload
        }
        case GET_REVIEWS:return{
            ...state,
            review:action.payload
        }
        default:return state
    }
}
export default apiReducer