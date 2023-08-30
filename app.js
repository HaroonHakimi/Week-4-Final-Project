const API_KEY = "5c0a8d0";
let search = "";
const moviesWrapper = document.querySelector(`.movies`)
const searchBarInput = document.querySelector(`.search__results`)

function onSearchChange(event)
{
    const search = event.target.value
    localStorage.setItem("search", movieSearch)
    window.location.href = `${window.location.origin}/movies.html`
    movieSearch(search)
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

function renderMovies()
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
    moviesWrapper.innerHTML = moviesHTML
    console.log(moviesHTML)
}


//
function searchBasedOnText()
{
    const searchInput = document.getElementsByClassName(`search__input`).value
    const searchText = `<h3 class="search__results">Search Results for ${searchInput}}</h3>`
    searchBarInput.innerHTML = searchText
    renderMovies(searchInput)
}


// Can use enter button to submit
function searchByEnter()
{
    const searchForm = document.getElementsByClassName(`search`)
    searchForm.addEventListener("submit", function(event)
    {
        event.preventDefault()
        searchBasedOnText()
    })
}
