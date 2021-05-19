import React from 'react'
import Stars from '../Stars/Stars'

export default function Cards() {
    return (
        <div className="row row-cols-3 mb-2">
            <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:'30%'}}>
        <div className="card-header d-flex justify-content-between">
            <span>Joane</span>
            <span><Stars/></span>
        </div>
            <div className="card-body">
                <p className="card-text">Resturent Aswesome</p>
            </div>
            </div>
        </div>
    )
}
