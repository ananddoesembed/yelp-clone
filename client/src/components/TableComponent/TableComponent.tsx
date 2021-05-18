import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/index";
import {  useEffect } from "react";
import { deleteHotel, getAllHotel } from "../../store/api/actions";
import { withRouter } from "react-router";
import {useHistory} from 'react-router-dom'
 function TableComponent() {
  const dispatch = useDispatch();
  const history = useHistory()
  const api = useSelector((state: RootStore) => state.api);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllHotel());
    };
    fetchData();
  }, []);

  const deleteHandler = async (id: number) => {
    await dispatch(deleteHotel(id));
    await dispatch(getAllHotel());
  };
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
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.location}</td>
                <td>{"$".repeat(row.price_range)}</td>
                <td>rating</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>history.push(`${row.id}/update`)}>UPDATE</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandler(parseInt(row.id))}
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