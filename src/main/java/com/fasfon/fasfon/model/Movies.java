package com.fasfon.fasfon.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table
public class Movies {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String movie_name;
    @Column
    private String actors;

    @Column
    private String directors;
    @Column
    private Integer fasfon_rating;

    @Column(columnDefinition = "LONGTEXT")
    private String poster;

    @Column
    private Date release_date;

    @Column
    private String movie_review;

    @Column
    private String genre;

    @Column
    private String movie_type;

    public Movies() {
    }

    public Movies(Integer id, String movie_name, String actors, String directors, Integer fasfon_rating, String poster, Date release_date, String movie_review, String genre, String movie_type) {
        this.id = id;
        this.movie_name = movie_name;
        this.actors = actors;
        this.directors = directors;
        this.fasfon_rating = fasfon_rating;
        this.poster = poster;
        this.release_date = release_date;
        this.movie_review = movie_review;
        this.genre = genre;
        this.movie_type = movie_type;
    }

    public String getMovie_name() {
        return movie_name;
    }

    public void setMovie_name(String movie_name) {
        this.movie_name = movie_name;
    }

    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }


    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    public String getDirectors() {
        return directors;
    }


    public void setDirectors(String directors) {
        this.directors = directors;
    }


    public Integer getFasfon_rating() {
        return fasfon_rating;
    }

    public void setFasfon_rating(Integer fasfon_rating) {
        this.fasfon_rating = fasfon_rating;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }
    public Date getRelease_date() {
        return release_date;
    }

    public void setRelease_date(Date release_date) {
        this.release_date = release_date;
    }

    public String getMovie_review() {
        return movie_review;
    }

    public void setMovie_review(String movie_review) {
        this.movie_review = movie_review;
    }


    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getMovie_type() {
        return movie_type;
    }

    public void setMovie_type(String movie_type) {
        this.movie_type = movie_type;
    }

    @Override
    public String toString() {
        return "Movies{" +
                "id=" + id +
                ", actors='" + actors + '\'' +
                ", directors='" + directors + '\'' +
                ", fasfon_rating=" + fasfon_rating +
                ", release_date=" + release_date +
                ", movie_review='" + movie_review + '\'' +
                ", genre='" + genre + '\'' +
                ", movie_type='" + movie_type + '\'' +
                '}';
    }
}


