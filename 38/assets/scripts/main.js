function searchHandler() {
    document.getElementById('search-button').addEventListener('click', (event) => {

        const search = document.getElementById('search').value;
        const type = document.getElementById('type').value;

        console.log(search, type);
        getData(search, type);
    })
}

function getData(search, type) {
    fetch(`https://www.omdbapi.com/?apikey=e394af08&s=${search}&type=${type}`)
        .then(response => response.json())
        .then(response => {
            renderList(response);
        })

}

function renderList(data) {
    const listContainer = document.getElementById('search-result');
    console.log(data.Response);
    if (data.Response === 'True') {
        let resultList = '';
        data.Search.forEach(item => {
            resultList +=
                `
            <li>
                <p>${item.Title}</p>
                <button class="details-button" id="${item.imdbID}">Details</button>
            </li>`
        })
        listContainer.innerHTML = resultList;
    } else {
        listContainer.innerHTML = `<p>Not found</p>`;
    }

    detailsButtonHandler()
}

function detailsButtonHandler() {
    const detailsButtons = document.getElementsByClassName('details-button');

    for (let item of detailsButtons) {
        item.addEventListener('click', (event) => {
            const elementId = event.target.getAttribute('id');
            console.log(elementId);
            getDetailsData(elementId);
        })
    }
}

function getDetailsData(id) {
    fetch(`https://www.omdbapi.com/?apikey=e394af08&i=${id}`)
        .then(response => response.json())
        .then(response => {
            renderItemDetails(response);
        })
}

function renderItemDetails(data) {
    const detailsList = document.getElementById('details');
    detailsList.innerHTML =
        `<div class="poster">
    <img src="${data.Poster}"
        alt="movie poster">
    <p class="rated">${data.Rated}</p>
        </div>
        <div class="description">
            <h2 class="title">${data.Title}</h2>
                <p class="year">${data.Year}</p>
                <p class="type">${data.Type}</p>
                <p class="runtime">${data.Runtime}</p>
                <p class="genre">${data.Genre}</p>
        </div>`
}

searchHandler();