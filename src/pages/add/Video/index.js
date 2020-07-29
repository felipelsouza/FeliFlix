import React from 'react'

import { Link } from 'react-router-dom'
import DefaultPage from '../../../components/DefaultPage'

function addVideo() {
    return (
        <DefaultPage>
            <h1>New Video</h1>

            <Link to="/add/Category">
                New Category
            </Link>
        </DefaultPage>
    )
}

export default addVideo