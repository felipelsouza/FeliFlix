import React from 'react'

import { Link } from 'react-router-dom'
import DefaultPage from '../../../components/DefaultPage'

function addCategory() {
    return (
        <DefaultPage>
            <h1>New Category</h1>

            <form>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <button>Add</button>
            </form>

            <Link to="/">
                Go to Home
            </Link>
        </DefaultPage>
    )
}

export default addCategory