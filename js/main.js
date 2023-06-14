const apiUrl = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
const movieContainer = document.getElementById("movieContainer");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.Search) {
      data.Search.forEach((movie) => {
        const { Poster, Title, Year } = movie;
        const movieCard = createMovieCard(Poster, Title, Year);
        movieContainer.appendChild(movieCard);
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

function createMovieCard(poster, title, year) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  const img = document.createElement("img");
  img.src = poster;
  img.alt = title;
  card.appendChild(img);

  const h3 = document.createElement("h3");
  h3.textContent = title;
  card.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = year;
  card.appendChild(p);

  return card;
}
