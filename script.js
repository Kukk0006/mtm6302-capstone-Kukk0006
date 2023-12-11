console.log("hello")
//----------API Stuff-------------------

const baseurl = 'https://api.nasa.gov/planetary/apod?api_key='
// let dateurl = ''
let dateurl = "&date=2020-03-03" //video
// let dateurl = "&date=2018-06-07" //picture
//let test = 0;
const api_key = 'O1Y1c8dLaOAYMEU4ZsMCqcDyiJSARsA4bW1xpyAy' //my key diff for best security practice, normally on another script file
let favs = [] //empty array for favorites 
const ls = localStorage.getItem('ImageInfo')
if (ls) {
  favs = JSON.parse(ls)
}
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${baseurl}${api_key}${dateurl}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}
//-------Build Today-----------
async function buildToday () {
  const response = await fetch(`${baseurl}${api_key}${dateurl}`)
  const data = await response.json()
  if (data.media_type == "video") {
    todayHTML = `
    <div class="container d-flex align-items-center justify-content-center h-100 mt-5">
    <iframe id="videoURL" src="${data.url}" frameborder="0" class="tel-iframe" id="picture" src="${data.url}" alt="${data.title}" data-title="${data.title}" data-videourl="${data.url}" data-url="" data-date="${data.date}" data-info="${data.explanation}"></iframe>
    </div> <!--img div for alignment-->
    <div class="button-box-fixed">
    <button type="button" data-bs-toggle="modal" data-bs-target="#learnMore" class="main-button learn-more">Learn More</button>
    <a type="button" class="btn add-fav-btn"><img src="images/heart.png" class="add-fav" data-title="${data.title}" data-videourl="${data.url}" data-date="${data.date}" data-url="" data-info="${data.explanation}"></a>
  </div><!--end button-box-fixed-->
      <!---Modal-->
      <div class="modal fade modal-xl" id="learnMore" tabindex="-1" aria-labelledby="learnMoreLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="learnMoreLabel">NASA's Astronomy Picture of the Day</h4>
              <img type="button" class="btn-close-lm" data-bs-dismiss="modal" aria-label="Close" src="images/close.png">
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row" id="modalVisual">
                <iframe id="videoURL" src="${data.url}" frameborder="0" class="videoURLModal"></iframe>
                    <img src="images/heart.png" type="button" class="btn add-fav-modal d-flex justify-content-end">
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-6">
                      <p id="title">${data.title}</p>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                      <p id="date">${data.date}</p>
                    </div>
                  </div><!--end row-->
                  <div class="row">
                    <p id="explanation">${data.explanation}</p>
                  </div><!--end row-->
                </div><!--container fluid-->
              </div><!--end modal-body-->
            </div><!--end modal-content-->
          </div> <!--end modal-dialog-->
        </div><!--end modal-label-->
    `
  } else {
    todayHTML = `
    <div class="container">
    <div class="h-100 position-relative">
    <div class="d-flex justify-content-center">
    <img class="img-fluid tel-img" id="picture" src="${data.url}" alt="${data.title}" data-hdurl="${data.hdurl}" data-url="${data.url}" data-date="${data.date}" data-info="${data.explanation}" data-videourl="">
    <div class="overlay" id="overlay"></div> <!--------Overlay ---------->
  </div><!--end h-100-->
  </div>
  <div>
  <div class="button-box-fixed">
  <button type="button" data-bs-toggle="modal" data-bs-target="#learnMore" class="main-button learn-more">Learn More</button>
  <a type="button" class="btn add-fav-btn"><img src="images/heart.png" class="add-fav" data-title="${data.title}" data-videourl="" data-date="${data.date}" data-url="${data.url}" data-hdurl="${data.hdurl}" data-info="${data.explanation}"></a>
  </div><!--end button-box-fixed-->
    <!---Modal-->
    <div class="modal fade modal-xl" id="learnMore" tabindex="-1" aria-labelledby="learnMoreLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="learnMoreLabel">NASA's Astronomy Picture of the Day</h4>
            <img type="button" class="btn-close-lm" data-bs-dismiss="modal" aria-label="Close" src="images/close.png">
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row" id="modalVisual">
              <img class="img-fluid tel-img" id="pictureModal" src="${data.url}" alt="${data.title}" data-large="{$data.hdurl}">
              <a type="button" class="btn add-fav-btn"><img src="images/heart.png" class="add-fav" data-title="${data.title}" data-videourl="" data-date="${data.date}" data-url="${data.url}" data-hdurl="${data.hdurl}" data-info="${data.explanation}"></a>
                </div>
                <div class="row justify-content-center">
                  <div class="col-6">
                    <p id="title">${data.title}</p>
                  </div>
                  <div class="col-6 d-flex justify-content-end">
                    <p id="date">${data.date}</p>
                  </div>
                </div><!--end row-->
                <div class="row">
                  <p id="explanation">${data.explanation}</p>
                </div><!--end row-->
              </div><!--container fluid-->
            </div><!--end modal-body-->
          </div><!--end modal-content-->
        </div> <!--end modal-dialog-->
      </div><!--end modal-label-->
      </div><!--end container-->
  `
  }
}
//------Build Past-----
async function buildPast () {
  const response = await fetch(`${baseurl}${api_key}${dateurl}`)
  const data = await response.json()
  if (data.media_type == "video") {
    searchResults = `
    <div class="text-center pt-5" id="past-search-result">
      <iframe id="videoURL" src="${data.url}" frameborder="0" class="past-iframe" id="picture" src="${data.url}" alt="${data.title}" data-title="${data.title}" data-videourl="${data.url}" data-url="" data-date="${data.date}" data-info="${data.explanation}"></iframe>
      
      <a type="button" class="btn add-fav-btn"><img src="images/heart.png" class="add-fav" data-hdurl="" data-url="" data-date="${data.date}" data-info="${data.explanation}"  data-title="${data.title}" data-videourl="${data.url}"></a>
    
      <div class="container past-info p-5">
        <h5 class="card-title" id="title">${data.title}</h5>
        <p id="date"></p>
        <p class="card-text" id="explanation">${data.explanation}</p>
      </div>
      <a class="btn btn-primary m-2 backSearch">Back to search</a>
  </div>
    `

  } else {
    searchResults = `
  <div class="text-center pt-5" id="past-search-result">
    <div class="d-flex align-items-center justify-content-center h-100 myAPICall">
    <img class="img-fluid past-picture" id="picture" src="${data.url}" alt="${data.title}" data-hdurl="${data.hdurl}" data-url="${data.url}" data-date="${data.date}" data-info="${data.explanation}" data-videourl="">
    <a type="button" class="btn add-fav-btn"><img src="images/heart.png" class="add-fav" data-hdurl="${data.hdurl}" data-url="${data.url}" data-date="${data.date}" data-info="${data.explanation}"  data-title="${data.title}" data-videourl=""></a>
    </div> <!--img div for alignment-->
    <div class="past-info p-5">
      <h5 class="card-title" id="title">${data.title}</h5>
      <p id="date"></p>
      <p class="card-text" id="explanation">${data.explanation}</p>
    </div>
    <a class="btn btn-primary m-2 backSearch">Back to search</a>
</div>
  `
  }
}
//----------------favs-----------
// empty array for the generated html to be pushed to, so it's all accessed at once -faster load time and streamlined
const gallery = []
const $card = document.querySelector('.card')
const $modalHD = document.querySelector('.modalHD')
function buildGallery () {
  const $galleryGrid = document.getElementById('galleryGrid')
  const html = [];
  for (let i = 0; i < favs.length; i++) {
    html.push(`<span class="card grid-item">
      <img src="${favs[i].url}" alt="${favs[i].title}" data-source="${favs[i].title}" data-date="${favs[i].date}" data-index="${i}" data-large="${favs[i].hdurl}" class="galleryImg imgRestrict pb-2">
      <iframe id="videoURLModal" src="${favs[i].videourl}" frameborder="0"></iframe>
      <div class="card-text d-flex justify-content-between">
        <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#learnMoreFav" class="btn btn-sm btn-primary learnFavMore" data-index="${i}">About</a>
        <button type="button" data-index="${i}" class="btn btn-sm btn-danger remove">Delete</button>
      </div>
    </span>`);
  }
  const list = html.join(' ');// Join all the HTML elements outside the loop
  $galleryGrid.innerHTML = list; // Set the joined HTML content to the grid
}
//-----------Templates------------
const homeHTML = `<div class="text-center">
<img src="images/large-screen.jpg" id="background">
<button id="telescope" class="today">
  <a class="today"><img src="images/telescope.png" class="telescope-img today"> </a>
</button>
<button id="favorites" class="favorite">
  <a><img src="images/book1.png" class="book favorite favorites-btn"> </a>
</button>
<button id="past" class="past">
  <a><img src="images/book2.png" class="book past past-btn"> </a>
</button>
</div>`
let todayHTML = buildToday();
const favoriteHTML = `
<div class="py-5 text-center container gallery-container">
<div class="row py-lg-5">
  <div class="col-lg-8 col-md-8 mx-auto">
    <h1 class="fw-light">My Favorites</h1>
  </div>
</div>
</div>
<div id="galleryGrid" class="galleryGrid">

</div>
<div class="modal fade modal-xl" id="learnMoreFav" tabindex="-1" aria-labelledby="learnMoreFavLabel"
aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header justify-content-end">
      <img type="button" class="btn-close-lm" data-bs-dismiss="modal" aria-label="Close" src="images/close.png">
    </div>
    <div class="modal-body faveModal" id="favModal">
     <h1>  Do not fear for I am here</h1>
     <img src="https://www.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg">
      </div><!--end modal-body-->
    </div><!--end modal-content-->
  </div> <!--end modal-dialog-->
</div><!--end modal-label-->
`;
let pastHTML = `<div class="search-window text-center align-m ">
<h1> Find Pictures From The Past</h1>
<span>Date: <input type="text" id="datepicker" autocomplete="off"></span>
<a class="btn past-btn submit" id="pastBtn" type="submit">Submit</a>
</div>`

const $body = document.querySelector("body")
let searchResults = buildPast();
const $mainHTML = document.getElementById("main")
addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("myhome")) {
    // alert("You are home!")
    $mainHTML.innerHTML = homeHTML
    $body.className = "homePage"
  } else if (e.target.classList.contains("today")) {
    // alert("The time is not today!");
    $mainHTML.innerHTML = todayHTML;
    $body.className = "todayPage";
  } else if (e.target.classList.contains("favorite")) {
    // alert("I'm mommy's favorite!")
    $mainHTML.innerHTML = favoriteHTML;
    $body.className = "favPage"
    buildGallery();
  } else if (e.target.classList.contains("past")) {
    // alert("Hindsight is 20/20")
    $mainHTML.innerHTML = pastHTML
    $body.className = "pastPage"
    // from https://api.jqueryui.com/datepicker/
    let finaldate = "";
    $(document).ready(function () {
      $(function () {
        $("#datepicker").datepicker({
          defaultDate: 0,
          dateFormat: 'yy-mm-dd',
          maxDate: '0',
          changeMonth: true,
          changeYear: true,
          minDate: new Date(1995, 6, 20 - 30, 1),
          yearRange: "1995:2023",
          onSelect: function () {
            selected = $(this).datepicker("getDate");
            d = new Date(selected);
            let fixed = d.toISOString();
            console.log(d);
            finaldate = fixed.substring(0, 10);
            console.log(finaldate);
            dateurl = "&date=" + finaldate
            buildPast()
          }
        });
      });
    });
  }
})

//---------------Buttons---------------------

function clickHandler (e) {
  console.log(e.target)
  let indexClicked = e.target.dataset.index
  if (e.target.classList.contains('add-fav') || e.target.classList.contains('add-fav-modal')) {
    if (!favs.find(data => data.date === e.target.dataset.date)) {
      favs.unshift({
        url: e.target.dataset.url,
        hdurl: e.target.dataset.hdurl,
        videourl: e.target.dataset.videourl,
        title: e.target.dataset.title,
        date: e.target.dataset.date,
        info: e.target.dataset.info,
      });
      swal.fire({
        icon: "success",
        title: "Added to My Favorites",
        timer: 1500,
      })
      localStorage.setItem('ImageInfo', JSON.stringify(favs));
    }
    else {
      swal.fire({ title: "You love it so much", text: "You've already added this one", icon: "info", timer: 1500, })
    }
  } else if (e.target.classList.contains('remove')) {
    favs.splice(indexClicked, 1)
    Swal.fire({
      icon: "error",
      title: "You've deleted this image",
      timer: 2000,
    });
    buildGallery()
    localStorage.setItem('ImageInfo', JSON.stringify(favs));
  } else if (e.target.classList.contains('learnFavMore')) {
    const $faveModal = document.querySelector('.faveModal')
    // Handle clicks on the "Learn-More" button
    // Access data associated with the clicked index
    swal.fire({
      icon: 'question',
      text: 'Clicked on "Learn-More" for title: ' + favs[indexClicked].title,
    });
    $faveModal.innerHTML = `
    <img src="${favs[indexClicked].url}" alt="${favs[indexClicked].title}" class="modalImg text-center" >
    <iframe src="${favs[indexClicked].videourl}" frameborder="0" class="videoURLModal"></iframe>
    <div class="col-6 d-flex justify-content-end">
    <p id="favorite-date">${favs[indexClicked].date}</p>
    </div>
    </div><!--end col-->
    <div class="row">
    <h3>${favs[indexClicked].title}</h3>
    <p id="favorite-explanation" class="caption">${favs[indexClicked].info}</p>`
  } else if (e.target.classList.contains('galleryImg')) {
    swal.fire({
      icon: "warning",
      title: "Oh noes",
      text: 'HD Version of "' + e.target.dataset.source + '"  coming soon',
    })
  } else if (e.target.classList.contains('overlay')) {
    if (overlay.style.background !== "transparent") {
      overlay.style.background = "transparent";
    }
    else {
      overlay.style.background = "#000"
    }
  } else if (e.target.classList.contains('submit')) {
    swal.fire({
      icon: "warning",
      text: "Clicked submit ",
    })
    $mainHTML.innerHTML = searchResults;
  } else if (e.target.classList.contains('backSearch')) {
    swal.fire({
      icon: "success",
      text: "Going back",
    })
    $mainHTML.innerHTML = pastHTML
    let finaldate = "";
    $(document).ready(function () {
      $(function () {
        $("#datepicker").datepicker({
          defaultDate: 0,
          dateFormat: 'yy-mm-dd',
          maxDate: '0',
          changeMonth: true,
          changeYear: true,
          minDate: new Date(1995, 6, 20 - 30, 1),
          yearRange: "1995:2023",
          onSelect: function () {
            selected = $(this).datepicker("getDate");
            d = new Date(selected);
            let fixed = d.toISOString();
            console.log(d);
            finaldate = fixed.substring(0, 10);
            console.log(finaldate);
            dateurl = "&date=" + finaldate
            buildPast()
          }
        });
      });
    });

  }
}
addEventListener('click', clickHandler)

