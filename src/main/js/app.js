const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');

//EC4
const PageVerGenero = require('./pages/ver-genero');
const PageNuevoLisAuto = require ('./pages/nuevo-liauto');
const PageEditarGenero = require('./pages/editar-genero');
const PageNuevoGenero = require ('./pages/nuevo-genero')


const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-genero/:id', element: <PageVerGenero />},
	{path: '/ver-genero/:id/nuevo-liauto', element: <PageNuevoLisAuto />},
	{path: '/editar-genero/:id', element: <PageEditarGenero />},
	{path: '/nuevo-genero', element: <PageNuevoGenero />},

])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)