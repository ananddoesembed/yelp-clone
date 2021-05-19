import { ApiDispatchTypes, DELETE_HOTELS, GET_ALL_HOTELS, GET_HOTELS, UPDATE_HOTELS } from "./types"

export interface pgState{
    name:string,
    id:string,
    location:string,
    price_range:number
}

interface apiState{
    allHotel:pgState[],
    addHotel:string
    deleteHotel:string
    getHotelById:pgState
    updateHotel:string,
}
const INITIAL_STATE ={
    allHotel:[],
    addHotel:'',
    deleteHotel:'',
    getHotelById:{
        name:'',
        id:'',
        location:'',
        price_range:0
    },
    updateHotel:'',
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
        default:return state
    }
}
export default apiReducer