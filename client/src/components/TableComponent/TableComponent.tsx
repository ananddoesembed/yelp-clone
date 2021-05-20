import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/index";
import React, { FC, useEffect } from "react";
import { deleteHotel, getAllHotel } from "../../store/api/actions";
import { withRouter } from "react-router";
import {useHistory} from 'react-router-dom'
import Stars from "../Stars/Stars";
 const TableComponent:FC=() =>{
  const dispatch = useDispatch();
  const history = useHistory()
  const api = useSelector((state: RootStore) => state.api);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllHotel());
    };
    fetchData();
  }, []);

  const deleteHandler = async (e:React.MouseEvent,id: number) => {
    e.stopPropagation()
    await dispatch(deleteHotel(id));
    await dispatch(getAllHotel());
  };
  const updateHandler=(e:React.MouseEvent,id:string)=>{
    e.stopPropagation()
    history.push(`${id}/update`)
  }
  return (
    <div className="list-group">
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
            <td>
              <button className="btn btn-warning">UPDATE</button>
            </td>
            <td>
              <button className="btn btn-danger">DELETE</button>
            </td>
          </tr>
          {api.allHotel.length ? (
            api.allHotel.map((row, index) => (
              <tr onClick={(e)=>history.push(`/details/${row.id}`)} key={index}>
                <td>{row.name}</td>
                <td>{row.location}</td>
                <td>{"$".repeat(row.price_range)}</td>
                <td><Stars rating={parseInt(row.average_rating)}/></td>
                <td>
                  <button className="btn btn-warning" onClick={(e)=>updateHandler(e,row.id)}>UPDATE</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteHandler(e,parseInt(row.id))}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>no</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default withRouter(TableComponent)