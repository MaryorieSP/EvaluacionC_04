const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { generos:[]};
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/generos' }).done(response => {
			this.setState({ generos: response.entity._embedded.generos });
		});


	}
	render() {
		return (
			<>
				<h1>EVALUACION CONTINUA 4!</h1>

				<div style={{"width":"100%", "display":"flex"}}>
					<div style={{"width":"calc(100% / 3"}}>
						<Titulo entidad="Genero" emoji="📖" />
						<GeneroList generos={this.state.generos} />
						<Link to="/nuevo-genero">Nuevo Genero</Link>
					</div>
				</div>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class GeneroList extends React.Component {
	render() {
		const generos = this.props.generos.map(genero =>
			<Genero key={genero._links.self.href} genero={genero} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{generos}
				</tbody>
			</table>
		)
	}
}

class Genero extends React.Component {
	render() {
		const id = this.props.genero._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.genero.nombre}</td>
				<td>
					<Link to={`/ver-genero/${id}`}>Ver</Link> | <Link to={`/editar-genero/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;