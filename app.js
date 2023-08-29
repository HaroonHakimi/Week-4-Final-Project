const moviesList = document.querySelector(`.movies`);
const API_KEY = "5c0a8d0";
let search = "";

// async function movieSearch()
// {
//     const movies = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
//     const moviesData = await movies.json()
//     console.log(moviesData)
//     moviesList.innerHTML = [moviesData].map((movie) => movieHTML(movie))
// }

// movieSearch()

function onSearchChange(event)
{
    const search = event.target.value
    localStorage.setItem("search", search)
    openMovies(search)
}

function openMovies()
{
    window.localStorage.href = `${window.location.origin}/movies.html`
}

// function movieHTML(movie)
// {
//    return `<li class="popular__movie movie">
//         <figure class="movie__img--wrapper">
//             <img src="${movie.Poster}" class="movie__img" alt="">
//         </figure>
//         <h2 class="popular__movie--title movie__title">${movie.Title}</h2>
//     </li>`
// }

