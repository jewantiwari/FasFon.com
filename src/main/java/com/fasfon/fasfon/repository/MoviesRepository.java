package com.fasfon.fasfon.repository;

import com.fasfon.fasfon.model.Movies;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoviesRepository extends CrudRepository<Movies, Integer> {
}
