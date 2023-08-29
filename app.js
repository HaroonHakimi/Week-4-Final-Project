const API_KEY = "5c0a8d0";
let search = "";
const moviesWrapper = document.querySelector(`.movies`)

function onSearchChange(event)
{
    const search = event.target.value
    localStorage.setItem("search", search)
    window.location.href = `${window.location.origin}/movies.html`
}

function bringUserHome()
{
    window.location.href = `${window.location.origin}/index.html`;
}


async function movieSearch()
{
    const movies = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const moviesData = await movies.json()
    console.log(moviesData)
    
}

setTimeout(() => movieSearch())

function renderBooks(movie)
{
    const moviesHTML = moviesData.map(movie => 
        {

        return `<li class="popular__movie movie">
                    <figure class="movie__img--wrapper">
                        <img src="${movie.Poster}" class="movie__img" alt="">
                    </figure>
                    <h2 class="popular__movie--title movie__title">${movie.Title}</h2>
                </li>`
        })
    console.log(moviesHTML)
    moviesWrapper.innerHTML = moviesHTML
}

