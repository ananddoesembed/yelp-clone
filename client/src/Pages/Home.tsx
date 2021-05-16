import React, { Fragment } from 'react'
import AddRestaurent from '../components/AddRestaurent/AddRestaurent'
import Header from '../components/Header/Header'
import TableComponent from '../components/TableComponent/TableComponent'

export default function Home() {
    return (<Fragment>
        <Header/>
        <AddRestaurent/>
        <TableComponent/>
        </Fragment>
    )
}
