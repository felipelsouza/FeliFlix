import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DefaultPage from '../../../components/DefaultPage'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriesRepository from '../../../repositories/categories'

function AddVideo() {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const { handleChange, values } = useForm({})
    const categoriesTitles = categories.map(({ title }) => title)
    useEffect(() => {
        categoriesRepository
            .getAll()
            .then((categories) => {
                setCategories(categories)
            })
    }, [])

    console.log(categories)

    return (
        <DefaultPage>
            <h1>New Video</h1>

            <form onSubmit={(e) => {
                e.preventDefault()

                const choosedCategory = categories.find((category) => {
                    return category.title === values.category
                })

                videosRepository.create({
                    title: values.title,
                    url: values.url,
                    categoryId: choosedCategory.id
                })
                    .then(() => {
                        history.push('/')
                    })
            }}>
                <FormField
                    label="Video Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    suggestions={categoriesTitles}
                />

                <Button type="submit">
                    Add
                </Button>
            </form>

            <Link to="/add/Category">
                New Category
            </Link>
        </DefaultPage>
    )
}

export default AddVideo