import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';

function AddCategory() {
    const initialValue = {
        name: '',
        description: '',
        color: '',
    }
    const [category, setCategory] = useState([]);
    const [values, setValues] = useState(initialValue);


    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(e) {
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        )
    }

    return (
        <DefaultPage>
            <h1>Add Category: {values.name}</h1>

            <form onSubmit={function handleSubmit(e) {
                e.preventDefault();
                setCategory([
                    ...category,
                    values
                ]);

                setValues(initialValue)
            }}>

                <FormField
                label="Category Name:"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                />

                <FormField
                label="Description:"
                type="textarea"
                name="description"
                value={values.description}
                onChange={handleChange}
                />

                <FormField
                label="color"
                type="color"
                name="color"
                value={values.color}
                onChange={handleChange}
                />

                <button>
                    Add
                </button>
            </form>
            

            <ul>
                {category.map((category, index) => {
                    return (
                        <li key={`${category}${index}`}>
                            {category.name}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Go to Home
            </Link>
        </DefaultPage>
    )
}

export default AddCategory;