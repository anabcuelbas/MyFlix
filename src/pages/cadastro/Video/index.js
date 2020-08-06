import React, { useEffect, useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    })

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer)
            })
    }, [])


    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault()

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria
                })

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        history.push('/')
                    })
            }}>
                <FormField 
                    label="Título do Vídeo:"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField 
                    label="URL:"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField 
                    label="Categoria:"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button  type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria" >
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo