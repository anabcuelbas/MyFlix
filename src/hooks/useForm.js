import { useState } from 'react'

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais)

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(infosDoEvento) {
        //const { getAttribute, value } = infosDoEvento.target
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )
    }

    function clearForm() {
        setValues(valoresIniciais)
    }

    return {
        values,
        handleChange,
        clearForm,
    }
}

export default useForm