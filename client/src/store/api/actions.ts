import {Dispatch} from 'redux'
import axios from 'axios'
import { GET_ALL_HOTELS,ApiDispatchTypes,Loaded, API_LOADED, API_LOADING, API_FAIL } from './types'



export const getAllHotel = () =>async(dispatch:Dispatch<ApiDispatchTypes>)=>{
try {
    dispatch({
type:API_LOADING
    })
  const res = await axios.get('http://localhost:5000/api/getAllHotels')
  console.log(res)
  dispatch({
      type:API_LOADED,
      payload:res.data
  })
} catch (error) {
    dispatch({
        type:API_FAIL
    })
}
}