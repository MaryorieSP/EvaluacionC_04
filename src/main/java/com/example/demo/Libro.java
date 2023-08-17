package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Libro {
    private @Id @GeneratedValue Long id;
	private String titulo;
    private String anio;

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Libro libro = (Libro) o;
		return Objects.equals(id, libro.id) &&
			Objects.equals(titulo, libro.titulo) &&
            Objects.equals(anio, libro.anio);
	}	

	@Override
	public int hashCode() {

		return Objects.hash(id, titulo, anio);
	}

	@Override
	public String toString() {
		return "Autores{" +
			"id=" + id +
			", titulo='" + titulo + '\'' +
            ", anio='" + anio + '\'' +
			'}';
	}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAnio() {
        return anio;
    }

    public void setAnio(String anio) {
        this.anio = anio;
    }

    public Libro() {
    }

    public Libro(String titulo, String anio) {
        this.titulo = titulo;
        this.anio = anio;
    }

}
