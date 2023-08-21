package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;
import java.util.Map;


@Controller
public class HomeController {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}


	@GetMapping(path="/api/generos/{id}/union")
	public @ResponseBody List<Map<String, Object>> union(@PathVariable Integer id){
		String sql = "SELECT liauto.id as ID, libro.titulo as LIBRO, autor.nombre as AUTOR FROM liauto JOIN libro ON liauto.id_libro = libro.id JOIN autor ON liauto.id_autor = autor.id WHERE id_genero = ?";
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}