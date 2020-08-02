import { useState } from 'react'

function useForm(initialValue) {
    const [values, setValues] = useState(initialValue)

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

    function clearForm() {
        setValues(initialValue)
    }

    return {
        values,
        handleChange,
        clearForm
    }
}

export default useForm