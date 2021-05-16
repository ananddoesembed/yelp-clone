import {Pool} from 'pg'


const pool =new Pool({
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'yelp',
    port:5432
})
const db = {
    query:(text:string,params:string[])=>pool.query(text,params)
}

export  {db}