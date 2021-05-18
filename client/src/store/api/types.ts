import {pgState} from './reducer'
export const GET_ALL_HOTELS = "GET_ALL_HOTELS"
export const API_LOADING = "API_LOADING"
export const API_FAIL = "API_FAIL"
export const UPDATE_HOTELS = "UPDATE_HOTELS"
export const DELETE_HOTELS = "DELETE_HOTELS"
export const ADD_HOTELS = "ADD_HOTELS"

export interface Loading{
    type:typeof API_LOADING
}
export interface allHotelsLoaded{
    type:typeof GET_ALL_HOTELS
    payload:pgState[]
}
export interface hotelsAdded{
    type:typeof ADD_HOTELS
    payload:string
}
export interface hotelsUpdate{
    type:typeof UPDATE_HOTELS
    payload:string
}
export interface hotelsDeleted{
    type:typeof DELETE_HOTELS
    payload:string
}
export interface Failed{
    type:typeof API_FAIL
}

export type ApiDispatchTypes = Loading|allHotelsLoaded|Failed |hotelsAdded|hotelsDeleted|hotelsUpdate
