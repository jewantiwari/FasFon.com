const endpointURL = "http://localhost:8080/api/movies";
const hollywoodContainer = document.getElementById("hollywood-container"); 
const bollywoodContainer = document.getElementById("bollywood-container"); 
const kollywoodContainer = document.getElementById("kollywood-container"); 


const getMovies = async () => {
  try {
    let response = await fetch(endpointURL);
    if (!response.ok) {
      throw new Error("Unable to get the data");
    }
    let moviesArray = await response.json(); 
    console.log(moviesArray);

    moviesArray.forEach((movie) => {
      const movieDisplay = document.createElement("div"); 
      movieDisplay.classList.add('col-6', 'col-md-5', 'col-lg-4', 'col-xl-3','mb-2');

      const releaseDateFormatted = formatReleaseDate(movie.release_date);

      const movieContent = `
          <div class='card'>
            <img src=${movie.poster} class='card-img-top poster' alt='card-img-top'>
            <div class='card-description'>
              <p class='card-text'>Actors: ${movie.actors}</p>
              <p class='card-text'>Release Date: ${releaseDateFormatted}</p>
              <p class='card-text'>Genre: ${movie.genre}</p>
              <p class='card-text'>${movie.movie_review}</p>
            </div>
            <div class='card-rating p-1'>
              ${movie.movie_name} by ${movie.directors}
            </div>
            <div class='card-rating p-1'>
              Rating: ${movie.fasfon_rating}
            </div>
          </div>
        </div>
      `;

      movieDisplay.innerHTML = movieContent;
      hollywoodContainer.append(movieDisplay); 
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

function formatReleaseDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  getMovies();
});
