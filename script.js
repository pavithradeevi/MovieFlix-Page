// https://api.themoviedb.org/3/movie/550?api_key=ec8c8da23cef124195bcc1025434e85b
// /discover/movie?sort_by=popularity.desc

let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ec8c8da23cef124195bcc1025434e85b"

let imgurl="https://image.tmdb.org/t/p/w1280"

let searchurl="https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=ec8c8da23cef124195bcc1025434e85b&query="


getmoviedata(url)

async function getmoviedata(url){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    console.log(res.results)
    showmovie(res.results)

}

var mainmovie=document.getElementById('mainmovie')

function showmovie(movies){
    mainmovie.innerHTML=""
    movies.map((element)=>{
        var moviediv=document.createElement('div')
        moviediv.classList.add('col','movie')
        console.log(element)

        moviediv.innerHTML=`
        <div class="card h-100">
                    <img src=${imgurl+element.backdrop_path} class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="border w-100 card-title me-3">${element.original_title}</h5>
                            <h6 class="border p-1 w-auto"><span class='${getclassbyrate(element.vote_average)}'>${element.vote_average}
                            </span></h6>
                        </div>
                        <div class="card card-header overview">
                            <p>Overview</p>
                            <p>${element.overview}</p>
                          </div>

                    </div>
                  </div>

        `
        mainmovie.append(moviediv)
    });

}

const form = document.getElementById('form')
const search = document.getElementById('search')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchTerm = search.value
    console.log(searchTerm)
    console.log(searchurl + searchTerm)
    if (searchTerm && searchTerm.value !== "") {
        getmoviedata(searchurl + searchTerm)
        // searchTerm.value = "";
    }
    else {
        window.location.reload()
    }

})


function getclassbyrate(vote){
    if(vote>=8){
        return 'green'
    }
    else if(vote>=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}
// search
// const form=document.getElementById('form')
// const search=document.getElementById('search')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     searchTerm=search.value
//     console.log(searchTerm)
//     console.log(searchurl+searchTerm)
//     if(searchTerm && searchTerm.value!==""){
//         getmoviedata(searchurl+searchTerm)
//         searchTerm.value="";
//     }
//     else{
//         window.location.reload()
//     }







// https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_teaser_printed_1-sht_v4_lg.jpg