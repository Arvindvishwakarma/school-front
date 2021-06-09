import React from 'react'
import Menubar from '../components/MenuBar'
import {Redirect} from 'react-router-dom'

export default function Dashboard() {

    const adminToken = localStorage.getItem('token')

    if (!adminToken) {
        return <Redirect to="/login" />
    }
    return (
        <div>
            <Menubar/>
        </div>
    )
}
