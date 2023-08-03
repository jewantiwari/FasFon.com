package com.fasfon.fasfon.controllers;

import com.fasfon.fasfon.model.Movies; 
import com.fasfon.fasfon.service.MoviesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin
public class MoviesController {
    
    @Autowired
    private final MoviesService moviesService;
    
    public MoviesController(final MoviesService moviesService) {
        this.moviesService = moviesService;
    }
    
    @GetMapping
    public ResponseEntity<Iterable<Movies>> getMovies(){
        Iterable<Movies> moviesList = moviesService.getMovies();
        
        if(moviesService.getMoviesCount() <= 0){
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  
        }
        return ResponseEntity.ok(moviesList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movies>> getUserById(@PathVariable Integer id){
        Optional<Movies> movie = moviesService.getMovieById(id);
        if(movie.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.of(Optional.of(movie));

    }
    @PostMapping
    public ResponseEntity<Movies> addMovies(@RequestBody Movies movies) {
        Movies addedMovies = moviesService.addMovie(movies);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedMovies);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeMovies(@PathVariable Integer id) {
        Optional<Movies> moviesOptional = moviesService.getMovieById(id);

        if (moviesOptional.isPresent()) {
            moviesService.removeMovie(id);
            return ResponseEntity.ok("Movies has been deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Movies> updateMovies(@RequestBody Movies movies, @PathVariable Integer id) {
        Movies updatedMovies = moviesService.updateMovie(movies, id);
        if (updatedMovies == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedMovies);
    }
}

