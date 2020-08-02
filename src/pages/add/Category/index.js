import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm';

function AddCategory() {
    const initialValue = {
        name: '',
        description: '',
        color: '',
    }

    const { handleChange, values, clearForm } = useForm(initialValue)

    const [category, setCategory] = useState([])

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categories'
            : 'https://feliflix.herokuapp.com/categories'
        fetch(URL)
            .then(async (res) => {
                const response = await res.json()
                setCategory([ ...response ])
            })
    }, [])

    return (
        <DefaultPage>
            <h1>Add Category: {values.name}</h1>

            <form onSubmit={function handleSubmit(e) {
                e.preventDefault();
                setCategory([
                    ...category,
                    values
                ]);

                clearForm()
            }}>

                <FormField
                label="Category Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                />

                <FormField
                label="Description"
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

                <Button>
                    Add
                </Button>
            </form>

            <ul>
                {category.map((category, index) => {
                    return (
                        <li key={`${category.title}`}>
                            {category.title}
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