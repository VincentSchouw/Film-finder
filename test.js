const moviesList = document.getElementById("list");

function addMoviesToDOM(array) {
  moviesPosters = array.map((film) => {
    const newPoster = document.createElement("img");
    newPoster.src = film.poster;
    const link = document.createElement("a");
    link.href = "https://www.imdb.com/title/" + film.imdbID;
    link.target = "_blank";
    link.appendChild(newPoster);
    const newListItem = document.createElement("li");
    newListItem.appendChild(link);
    return newListItem;
  });
  moviesList.innerHTML = "";
  moviesPosters.forEach((item) => {
    moviesList.appendChild(item);
  });
}

function LatestMovies() {
  const filteredMovies = movies.filter((film) => film.year >= 2014);
  addMoviesToDOM(filteredMovies);
}

function handleOnChangeEvent(event) {
  const searchTerm = event.target.value;
  if (event.target.type === "search") event.target.value = "";
  if (searchTerm === "latest") LatestMovies();
  else filterMovies(searchTerm);
}

function filterMovies(wordInMovie) {
  const filteredMovies = movies.filter((film) =>
    film.title.toLowerCase().includes(wordInMovie)
  );
  addMoviesToDOM(filteredMovies);
}

function uncheckRadioButton() {
  const checkedRadioButton = document.querySelector(
    "input[type=radio]:checked"
  );
  if (checkedRadioButton) checkedRadioButton.checked = false;
}

function addEventListeners() {
  const filterInputs = document.getElementsByName("film-filter");
  filterInputs.forEach((filterInput) => {
    filterInput.addEventListener("change", function (event) {
      handleOnChangeEvent(event);
    });
  });
  const searchField = document.getElementById("search");
  searchField.addEventListener("click", function () {
    uncheckRadioButton();
    addMoviesToDOM(movies);
  });
}

addMoviesToDOM(movies);
addEventListeners();
