import React from 'react'

export default function AddRestaurent() {
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col">
                  <select className="custom-select my-1 mr-sm-2">
                      <option disabled>Price Range</option>
                      <option value="1">$</option>
                      <option value="2">$$</option>
                      <option value="3">$$$</option>

                  </select>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}
