import {pgState} from './reducer'
export const GET_ALL_HOTELS = "GET_ALL_HOTELS"
export const API_LOADING = "API_LOADING"
export const API_FAIL = "API_FAIL"
export const API_LOADED = "API_LOADED"

export interface Loading{
    type:typeof API_LOADING
}
export interface Loaded{
    type:typeof API_LOADED
    payload:pgState[]
}

export interface Failed{
    type:typeof API_FAIL
}

export type ApiDispatchTypes = Loading|Loaded|Failed 
