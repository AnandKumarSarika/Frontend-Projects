apikey="";

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

let keyword=" ";
let page=1;

async function searchImages() {
    keyword=searchBox.value;
    const URL=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apikey}&per_page=12`;

    const response=await fetch(URL);
    const data = await response.json();

    const results=data.results;

    if(page == 1){
        searchResult.innerHTML="";
    }

    results.map((result) => {
        const image=document.createElement("img");
        image.src = result.urls.small ;
        const  imageLink= document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
