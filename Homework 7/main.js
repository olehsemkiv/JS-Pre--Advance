const input_search = document.querySelector('.input_search');
const btn_search = document.querySelector('.btn_search');
const container = document.querySelector('.elements');
const delete_btn = document.querySelector('.delete_btn');
let check = true;

// http://www.omdbapi.com/?i=tt3896198&apikey=2d8a7bdd
// http://www.omdbapi.com/?apikey=[yourkey]&

let myKey = '2d8a7bdd';

input_search.addEventListener('focus', () => {
    delete_btn.classList.remove('hide');
})

// input_search.addEventListener('blur', () => {
//     delete_btn.classList.add('hide');
// })


delete_btn.addEventListener('click', () => {
    input_search.value = '';
    console.log('click work');
    if (input_search.value == '') {
        delete_btn.classList.add('hide')
    }
})

btn_search.addEventListener('click', async () => {

    let movie = input_search.value.toLowerCase();
    const response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=2d8a7bdd`);
    const data = await response.json();
    filmList(data.Search)
    try {
        for (let i = 0; i < data.Search.length; i++) {
            const responseDetalies = await fetch(`https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=2d8a7bdd`);
            const dataDetalies = await responseDetalies.json();
            document.querySelectorAll('.check_info')[i].addEventListener('click', function () {
                detaliesMovie(dataDetalies);
            })
        }
    } catch (err) {
        return console.log(err);
    }
})

function filmList(arr) {
    container.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        createArr(arr[i]);
    }
}

function createArr(film) {
    container.innerHTML += `
    <div class="el">
        <img class="img_movie" src="${film.Poster}" alt="">
        <h1>${film.Title}</h1>
        <div class="hr"></div>
        <p>${film.Type}</p>
        <p>${film.Year}</p>
        <button class="check_info">More details</button>
    </div>   `;
}

async function detaliesMovie(arr) {
    try {
        document.querySelector('.details').classList.remove('hide');
        document.querySelector('.film_title').innerHTML = arr.Title;
        document.querySelector('.poster').style.backgroundImage = `url("${arr.Poster}")`;
        document.querySelector('.year_rate').innerHTML = arr.Rated;
        document.querySelector('.year_rate').innerHTML = arr.Rated;
        document.querySelector('.description').innerHTML = arr.Plot;
        document.querySelector('.written').innerHTML = arr.Writer;
        document.querySelector('.written').innerHTML = `
        <h3>Written by: </h3><span>${arr.Writer}</span>
        `;
        document.querySelector('.directed').innerHTML = `
        <h3>Directed by:</h3> ${arr.Director}
        `;
        document.querySelector('.roles').innerHTML = `
        <h3>Starring:</h3> ${arr.Actors}
        `;
        document.querySelector('.boxOffice').innerHTML = `
        <h3>BoxOffice:</h3> ${arr.BoxOffice}
        `;
        document.querySelector('.awards').innerHTML = `
        <h3>Awards:</h3> ${arr.Awards}
        `;
        for (let j = 0; j < arr.Ratings.length; j++) {
            let li = document.createElement("li");
            li.textContent += arr.Ratings[j].Source + " " + arr.Ratings[j].Value;
            document.querySelector('.ratings').append(li);
        }
    } catch (e) {
        return console.log(e);
    }
}

document.querySelector('.details').addEventListener('click', function () {
    this.classList.add('hide')
    document.querySelector('.ratings').innerHTML = '';
})
// "tt0372784"
// http://www.omdbapi.com/?i=$tt0372784&apikey=d9d5408e