import React, { Fragment } from 'react'

export default function TableComponent() {
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
        <td><button className="btn btn-warning"></button></td>
        <td><button className="btn btn-danger"></button></td>


      </tr>
    </tbody>
  </table>

</div>
    )
}
