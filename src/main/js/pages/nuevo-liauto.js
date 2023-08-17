const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoLiAutoPage = () => {

    let { id } = useParams();
    const [libros, setLibros] = useState([])
    const [autores, setAutores] = useState([])
    const [idLibro, setIdLibro] = useState('')
    const [idAutor, setIdAutor] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/liautos',
            entity: {
                genero: 'http://localhost:8080/api/generos/'+id,
                libro: 'http://localhost:8080/api/libros/'+idLibro,
                autor: 'http://localhost:8080/api/autores/'+idAutor
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/libros'
        }).done(response=>{
            let libros2 = [];
            response.entity._embedded.libros.map(libro => {
                libros2.push({value: libro._links.self.href.split('/').slice(-1), label: libro.titulo})
            })
            setLibros(libros2)
        })
        client({
            method: 'GET',
            path: '/api/autores'
        }).done(response=>{
            let autores2 = [];
            response.entity._embedded.autores.map(autor => {
                autores2.push({value: autor._links.self.href.split('/').slice(-1), label: autor.nombre})
            })
            setAutores(autores2)
        })

    },[])

    return (
        <>
            <div className="page-container">
                <h1>Nuevo Libro</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='libro' className="form-label">Libro</label>
                    <br />
                    <select name="libro" id="libro" onChange={(e)=>{setIdLibro(e.target.value)}} className="form-select">
                        {libros.map(libro => {	
                            return (
                                <option key={libro.value} value={libro.value}>{libro.label}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <label className="form-label">Autor</label>
                    <br />
                    <select name="autor" id="autor" onChange={(e)=>{setIdAutor(e.target.value)}} className="form-select">
                        {autores.map(autor => {	
                            return (
                                <option key={autor.value} value={autor.value}>{autor.label}</option>
                            )
                        })}
                    </select>
                    <br />
                    <input type="submit" value="Nuevo Autor Y Libro"/>
                </form>
                <Link to="/" className="form-link">Volver</Link>
            </div>
        </>
    )
}

module.exports = NuevoLiAutoPage;