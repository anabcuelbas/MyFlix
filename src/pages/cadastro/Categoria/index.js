import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const[categorias, setCategorias] =  useState([])
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

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: { values.nome } </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>

            <FormField 
                label="Nome da Categoria:"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
            />

            <FormField 
                label="Descrição:"
                type="textarea"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
            />

            <FormField 
                label="Cor:"
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
            />

            <Button as={ Link }>
                Cadastrar
            </Button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return(
                        <li key={categoria.nome}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
            Ir para home
            </Link>
        </PageDefault>
    )
    }

export default CadastroCategoria