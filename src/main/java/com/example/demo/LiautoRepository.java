package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "liautos", path = "liautos")
public interface LiautoRepository extends CrudRepository<Liauto,Long>{
    
}
