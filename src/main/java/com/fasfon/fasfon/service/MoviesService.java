package com.fasfon.fasfon.service;

import com.fasfon.fasfon.model.Movies;
import com.fasfon.fasfon.repository.MoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class MoviesService {
    @Autowired
    private final MoviesRepository moviesRepository;


    public MoviesService(final MoviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    public long getMoviesCount(){
        System.out.println(moviesRepository.count());
        return moviesRepository.count();
    }

    public Iterable<Movies> getMovies(){
        return moviesRepository.findAll();
    }
    public Optional<Movies> getMovieById(Integer id){
        return moviesRepository.findById(id);
    }

    public Movies addMovie(Movies movie){
        return moviesRepository.save(movie);
    }

    public String removeMovie(Integer id){
        Optional<Movies> moviesOptional = moviesRepository.findById(id);
        if(moviesOptional.isPresent()) {
            moviesRepository.deleteById(id);
            return "User has been successfully deleted";
        }else{
            return "User with ID" + id + " does not exist.";
        }
    }

    public Movies updateMovie(Movies movies, Integer id){
        Optional<Movies> moviesOptional = moviesRepository.findById(id);
        Movies updatedMovie = null;
        if(moviesOptional.isPresent()){
            Movies existingMovie = moviesOptional.get();

            existingMovie.setMovie_name(movies.getMovie_name());
            existingMovie.setActors(movies.getActors());
            existingMovie.setDirectors(movies.getDirectors());
            existingMovie.setFasfon_rating(movies.getFasfon_rating());
            existingMovie.setPoster(movies.getPoster());
            existingMovie.setRelease_date(movies.getRelease_date());
            existingMovie.setMovie_review(movies.getMovie_review());
            existingMovie.setGenre(movies.getGenre());
            existingMovie.setMovie_type(movies.getMovie_type());

            updatedMovie = moviesRepository.save(existingMovie);

        }
        return updatedMovie;
    }





}
