const endpointURL = "http://localhost:8080/api/movies";

const form = document.getElementById("movieForm");

form.addEventListener("submit", event => {
  event.preventDefault();
  getValue();
});

const getValue = () => {
  const data = new FormData(event.target);

  const movie_name = data.get("movie_name").trim(); 
  const actors = data.get("actors").trim();
  const directors = data.get("directors").trim();
  const fasfon_rating = data.get("fasfon_rating").trim();
  const poster = data.get("poster"); // Get the File object from the form data
  const release_date = new Date(data.get("release_date").trim()); // Convert to Date object
  const movie_review = data.get("movie_review").trim();
  const genre = data.get("genre").trim();
  const movie_type = data.get("movie_type").trim();



  const formData = {
    movie_name: movie_name,
    actors: actors,
    directors: directors,
    fasfon_rating: fasfon_rating,
    poster: poster, 
    release_date: release_date,
    movie_review: movie_review,
    genre: genre,
    movie_type: movie_type
  };
  console.log(formData);
  addMovies(formData); 
};

const addMovies = async formData => {
  try {
    let response = await fetch(endpointURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData) 
    });
    if (response.ok) {
      console.log("Data posted successfully!");

    } else {
      console.error("Failed to post data. Status:", response.status);
    }

  } catch (error) {
    console.error("Error:", error);
  }
};



