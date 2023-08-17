const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevoGenero = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/generos',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <div className="page-container">
                <h1>Nueva Género</h1>
                <form onSubmit={handleSubmit}>
                <label className="form-label">Nombre</label>
                <br />
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    className="form-input"
                />
                <br />
                <input type="submit" value="Nuevo Género" className="form-button" />
                </form>
                <Link to="/" className="form-link">
                Volver
                </Link>
            </div>
        </>


    )
}

module.exports = PageNuevoGenero;