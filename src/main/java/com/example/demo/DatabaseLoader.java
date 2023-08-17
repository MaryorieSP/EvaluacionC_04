package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	//EC4
	private final AutorRepository repositoryA;
	private final LibroRepository repositoryL;
	private final GeneroRepository repositoryG;
	private final LiautoRepository repositoryLA;

	@Autowired
	public DatabaseLoader(AutorRepository repositoryA,
		 LibroRepository repositoryL,
		  GeneroRepository repositoryG,
		  LiautoRepository repositoryLA) {
		
		this.repositoryA = repositoryA;
		this.repositoryL = repositoryL;
		this.repositoryG = repositoryG;
		this.repositoryLA = repositoryLA;
	}



	@Override
	public void run(String... strings) throws Exception {

		//AUTORES
		Autor auto1 = new Autor("Horacio", "Colombia");
		this.repositoryA.save(auto1);
		this.repositoryA.save(new Autor("Ravi", "India"));
		this.repositoryA.save(new Autor("Isabel", "España"));
		this.repositoryA.save(new Autor("Emily", "Estados Unidos"));
		this.repositoryA.save(new Autor("Luis", "México"));
		this.repositoryA.save(new Autor("Sofia", "Argentina"));

		//LIBROS
		Libro libro1 = new Libro("Sombras en la Selva", "2010");
		this.repositoryL.save(libro1);
		this.repositoryL.save(new Libro("El Jardín de las Mariposas","2015"));
		this.repositoryL.save(new Libro("Caminando entre Especias","2018"));
		this.repositoryL.save(new Libro("Cielo Nocturno en Manhattan","2022"));
		this.repositoryL.save(new Libro("El Eco de la Montaña","2007"));
		this.repositoryL.save(new Libro("Bajo el Sol del Pampero","2013"));

		//GENERO
		Genero genero1 = new Genero("Novela de aventuras");
		this.repositoryG.save(genero1);
		this.repositoryG.save(new Genero("Drama psicológico"));
		this.repositoryG.save(new Genero(" Realismo mágico"));
		this.repositoryG.save(new Genero("Romance contemporáneo"));
		this.repositoryG.save(new Genero("Novela histórica"));
		this.repositoryG.save(new Genero("Literatura regionalista"));

		//Vista desde Genero con Libros y Autores
		this.repositoryLA.save(new Liauto(libro1, auto1, genero1));

	}	
	
}