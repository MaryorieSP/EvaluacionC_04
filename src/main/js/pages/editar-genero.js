const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarGenero = ()=>{

    const {id} = useParams();
    const [genero, setGenero] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/generos/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setGenero(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/generos/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: genero
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <div className="form-container">
                <h1>Editar Género: {id}</h1>
                <form onSubmit={handleSubmit}>
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={genero.nombre}
                    onChange={(e) => {
                    setGenero({ ...genero, nombre: e.target.value });
                    }}
                    className="form-input"
                />
                <br />
                <input type="submit" value={`Editar Género ${id}`} className="form-button" />
                </form>
                <Link to="/" className="form-link">Volver</Link>
            </div>
        </>
    )

}

module.exports = PageEditarGenero;