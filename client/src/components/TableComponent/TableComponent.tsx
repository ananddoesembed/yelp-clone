import { useDispatch, useSelector } from 'react-redux'
import {RootStore} from '../../store/index'
import {useState,useEffect} from 'react'
import { getAllHotel } from '../../store/api/actions'
import { pgState } from '../../store/api/reducer'
export default function TableComponent() {

  const dispatch = useDispatch()
  const [rows, setRows] = useState<pgState[]>([])

  const allHotels = useSelector((state:RootStore)=>state.api)
  useEffect(() => {
  dispatch(getAllHotel())
  setRows(allHotels.allHotel)
  }, [])

    return (<div className="list-group">
  <table className="table table-hover table-dark">
    <thead>
      <tr className="bg-primary">
        <th scope="col">Restaurent</th>
        <th scope="col">Location</th>
        <th scope="col">Price Range</th>
        <th scope="col">Rating</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MC</td>
        <td>NT</td>
        <td>$$</td>
        <td>3.5</td>
        <td><button className="btn btn-warning">UPDATE</button></td>
        <td><button className="btn btn-danger">DELETE</button></td>
      </tr>
      {rows.map((row,index)=><tr key={index}><td>{row.name}</td><td>{row.location}</td><td>{'$'.repeat(parseInt(row.price_range))}</td><td>rating</td><td><button className="btn btn-warning">UPDATE</button></td>
        <td><button className="btn btn-danger">DELETE</button></td></tr>)}
      
    </tbody>
  </table>
</div>
    )
}
