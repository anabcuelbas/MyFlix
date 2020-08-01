import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const[categorias, setCategorias] =  useState([])
    const [values, setValues] = useState(valoresIniciais);
    
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
                type="text"
                name="descricao"
                value={values.nome}
                onChange={handleChange}
            />

            <FormField 
                label="Cor:"
                type="color"
                name="cor"
                value={values.nome}
                onChange={handleChange}
            />

            <button>
                Cadastrar
            </button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return(
                        <li key={categoria}>
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

export default CadastroCategoria;