package com.example.demo;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

import jakarta.persistence.Entity;


@Entity
public class Autor {
    private @Id @GeneratedValue Long id;
	private String nombre;
    private String nacionalidad;

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Autor autor = (Autor) o;
		return Objects.equals(id, autor.id) &&
			Objects.equals(nombre, autor.nombre) &&
            Objects.equals(nacionalidad, autor.nacionalidad);
	}	

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, nacionalidad);
	}

	@Override
	public String toString() {
		return "Autores{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
            ", nacionalidad='" + nacionalidad + '\'' +
			'}';
	}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public Autor() {
    }

    public Autor(String nombre, String nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    
}
