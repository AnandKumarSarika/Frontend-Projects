const searchForm=document.querySelector('form');
const movieContainer=document.querySelector('.movie-container');
const inputBox=document.querySelector('.inputBox');


const getMovieInfo =async (movie)=>{
    try{
        const MYAPIKEY="dbda7393";
        const url = `https://www.omdbapi.com/?apikey=${MYAPIKEY}&t=${movie}`;

        const response= await fetch(url);

        if(!response.ok){
            throw new Error("Unable to Fetch Movie..");
        }

        const data= await response.json();

        showMovieData(data);
    }catch(error){
        showErrorMessage("No Movie Found !!! ");
    }   
};

const showMovieData = (data) =>{

    movieContainer.innerHTML=" ";
    movieContainer.classList.remove('noBackground');
    const {Title , imdbRating , Genre , Released ,Runtime , Actors,Plot ,Poster ,Director}=data;

    const movieElement =document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML=`<h2>${Title}</h2>
                            <p><strong>Rating:&#11088; </strong>${imdbRating}`;

    const movieGenreElement =document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(',').forEach(element => {
        const p =document.createElement('p');
        p.innerText=element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieGenreElement); 
    movieElement.innerHTML+=`<p><u><strong>Released date:  </strong></u>${Released}
                            <p><u><strong>Duration :  </strong></u>${Runtime}
                            <p><u><strong>Cast :  </strong></u>${Actors}
                            <p><u><strong>Director :  </strong></u>${Director}
                            <p><u><strong>Plot:  </strong></u>${Plot}`;

    const MoviePosterElement =document.createElement('div');
    MoviePosterElement.classList.add('movie-poster');
    MoviePosterElement.innerHTML=`<img src="${Poster}"/>`;

    movieContainer.appendChild(MoviePosterElement);
    movieContainer.appendChild(movieElement);
};

const showErrorMessage =(message) =>{
    movieContainer.innerHTML=`<h2>${message}</h2>`;
    movieContainer.classList.add('noBackground');
};

const handleFormSubmission = (e) =>{
    e.preventDefault();
    const movieName=inputBox.value.trim();
    if(movieName!==''){
        showErrorMessage("Fetching Movie Information....")
        getMovieInfo(movieName);
    }else{
        showErrorMessage("Enter Movie Name to get Movie Information")
    }
}

searchForm.addEventListener('submit',handleFormSubmission);