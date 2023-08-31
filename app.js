let search = "";
const moviesWrapper = document.querySelector(`.movies`)
moviesWrapper.classList += (` movies__loading`)
moviesWrapper.classList.remove(`movies__loading`)


async function renderMovies(filter)
{
    const searchInput = document.querySelector(`.search__input`)
    const query = searchInput.value

    moviesWrapper.classList.add(`movies__loading`)
    setTimeout(1000)

    const movies = await fetch(`https://www.omdbapi.com/?apikey=5c0a8d0&s=${query}`)
    const moviesData = await movies.json()
    const moviesArray = moviesData.Search;

    moviesWrapper.innerHTML = moviesArray.map((movie) => getMoviesHTML(movie)).join("")

    if (filter === `NEW_TO_OLD`)
    {
        moviesArray.sort((a,b) => b.Year - a.Year)
    }
    else (filter === `OLD_TO_NEW`)
    {
        moviesArray.sort((a,b) => a.Year - b.Year)
    }

    moviesWrapper.classList.remove("movies__loading");
}

function filterMovies(event)
{
    renderMovies(event.target.value)
}


function getMoviesHTML()
{
    return `<div class="popular__movie movie">
    <figure class="movie__img--wrapper">
    <img src="${movie.Poster}" class="movie__img" alt="">
    </figure>
    <h2 class="popular__movie--title movie__title">${movie.Title}</h2>
    </div>`
}