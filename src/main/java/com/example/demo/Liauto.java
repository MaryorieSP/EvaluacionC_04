package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Liauto {

    private @Id @GeneratedValue Long id;

    @ManyToOne()
	@JoinColumn(name = "id_libro")
	private Libro libro;

    @ManyToOne()
	@JoinColumn(name = "id_autor")
	private Autor autor;

    @ManyToOne()
	@JoinColumn(name = "id_genero")
	private Genero genero;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Libro getLibro() {
        return libro;
    }

    public void setLibro(Libro libro) {
        this.libro = libro;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }

    public Genero getGenero() {
        return genero;
    }

    public void setGenero(Genero genero) {
        this.genero = genero;
    }

    public Liauto() {
    }

    public Liauto(Libro libro, Autor autor, Genero genero) {
        this.libro = libro;
        this.autor = autor;
        this.genero = genero;
    }

}
