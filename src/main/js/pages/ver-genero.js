const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerGenero = () => {

    let { id } = useParams();
    const [genero, setGenero] = useState({});
    const [liauto, setLiauto] = useState([]);


    useEffect(() => {
        url_genero = '/api/generos/' + id

        client({
            method: 'GET',
            path: url_genero
        }).done(response => setGenero(response.entity));

        client({
            method: 'GET',
            path: url_genero + '/union'
        }).done(response => setLiauto(response.entity))
        
    }, []);


    return (
        <>
            <div className="page-container">
                <h1 className="page-header">Género</h1>
                <table className="page-table">
                <tbody>
                    <tr>
                    <th>Nombre</th>
                    <td>{genero.nombre}</td>
                    </tr>
                </tbody>
                </table>

                <hr />

                <h2 className="page-header">Autores Y Libros</h2>
                <table className="page-table">
                    <thead>
                        <tr>
                        <th>Autores</th>
                        <th>Libros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {liauto.map((liauto) => (
                        <tr key={liauto.ID}>
                            <td>{liauto.AUTOR}</td>
                            <td>{liauto.LIBRO}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                <Link to={`/ver-genero/${id}/nuevo-liauto`} className="form-link">Agregar Autor Y Libro</Link>
                <Link to="/" className="form-link">Volver</Link>
            </div>
        </>
    )
}

module.exports = PageVerGenero;