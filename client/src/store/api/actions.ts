import { Dispatch } from 'redux'
import axios from 'axios'
import { ApiDispatchTypes, API_LOADING, API_FAIL, GET_ALL_HOTELS, UPDATE_HOTELS, DELETE_HOTELS, ADD_HOTELS } from './types'



export const getAllHotel = () => async (dispatch: Dispatch<ApiDispatchTypes>) => {
    try {
        dispatch({
            type: API_LOADING
        })
        const res = await axios.get('http://localhost:5000/api/getAllHotels')
        console.log(res)
        dispatch({
            type: GET_ALL_HOTELS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: API_FAIL
        })
    }
}
export const addHotel = (name: string, location: string, price_range: number) => async (dispatch: Dispatch<ApiDispatchTypes>) => {
    try {
        dispatch({
            type: API_LOADING
        })
        const res = await axios.post('http://localhost:5000/api/addHotels', {
            name, location, price_range
        })
        console.log(res)
        dispatch({
            type: ADD_HOTELS,
            payload: res.data.command
        })
    } catch (error) {
        dispatch({
            type: API_FAIL
        })
    }
}
export const deleteHotel = (id: number) => async (dispatch: Dispatch<ApiDispatchTypes>) => {
    try {
        dispatch({
            type: API_LOADING
        })
        const res = await axios.delete(`http://localhost:5000/api/deleteHotel/${id}`)
        console.log(res)
        dispatch({
            type: DELETE_HOTELS,
            payload: res.data.command
        })
    } catch (error) {
        dispatch({
            type: API_FAIL
        })
    }
}

export const updateHotel = (name:string,location:string,price_range:number,id: number) => async (dispatch: Dispatch<ApiDispatchTypes>) => {
    try {
        dispatch({
            type: API_LOADING
        })
        const res = await axios.put('http://localhost:5000/api/update',{
            name,location,price_range,id
        })
        console.log(res)
        dispatch({
            type: UPDATE_HOTELS,
            payload: res.data.command
        })
    } catch (error) {
        dispatch({
            type: API_FAIL
        })
    }
}
