const moviesList = document.querySelector(`.movies`);
const API_KEY = "5c0a8d0";
let search = "";

function onSearchChange(event)
{
    const search = event.target.value
    movieSearch(search)
}

async function movieSearch()
{
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    const movies = await fetch(url)
    const moviesData = await response.json()
    console.log(moviesData)
}


function movieHTML()
{
   return `<li class="popular__movie movie">
        <figure class="movie__img--wrapper">
            <img src="${moviesData.Poster}" class="movie__img" alt="">
        </figure>
        <h2 class="popular__movie--title movie__title">${moviesData.Title}</h2>
    </li>`
}

