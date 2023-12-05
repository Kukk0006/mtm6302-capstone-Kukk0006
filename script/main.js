let baseurl = 'https://api.nasa.gov/planetary/apod?api_key='
let dateurl = ''
// let dateurl = "&date=2020-03-03" //video
// let dateurl = "&date=2016-07-16" //picture
//let test = 0;
const api_key = 'O1Y1c8dLaOAYMEU4ZsMCqcDyiJSARsA4bW1xpyAy' //my key diff for best security practice, normally on another script file
let favs = [] //empty array for favorites 
const $modal = document.querySelector('.learnMoreModal')

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${baseurl}${api_key}${dateurl}`)
    // ${dateurl}
    // can insert after API key to access specific date
    const data = await response.json()
    console.log('NASA APOD data', data)

    displayData(data)
  } catch (error) {
    console.log(error)
  }
}
fetchNASAData()
const displayData = data => {
  titleAPI = document.getElementById('title').textContent = data.title
  dateAPI = document.getElementById('date').textContent = data.date
  infoAPI = document.getElementById('explanation').textContent = data.explanation
  if (data.media_type == "video") {
    videoAPI = document.getElementById('videoURL').src = data.url
    document.getElementById('overlay').classList.remove('overlay')
    document.getElementById('videoURLModal').src = data.url
  } else {
    urlAPI = document.getElementById('picture').src = data.url
    urlModal = document.getElementById('pictureModal').src = data.url
    urlHDAPI = document.getElementById('pictureHD').src = data.hdurl
  }
}

//add and remove button
function clickHandler (e) {
  console.log(e.target)
  let indexClicked = e.target.dataset.index
  if (e.target.classList.contains('add-fav') || e.target.classList.contains('add-fav-modal')) {
    // alert("Fav added!");
    if (!favs.find(data => data.title === titleAPI)) {
      favs.unshift({
        url: urlAPI,
        urlHD: urlHDAPI,
        title: titleAPI,
        date: dateAPI,
        info: infoAPI
      });
      localStorage.setItem('ImageInfo', JSON.stringify(favs));
      alert("New Favorite")
    }
    else {
      swal.fire("You love it so much, you've already added this one", "", "warning")
    }
  } else if (e.target.classList.contains("learnMore")) {
    $modal.innerHTML = `            
    <div class="row justify-content-center">
    <div class="col-6">
      <p id="favorite-title">${favs[indexClicked].title}</p>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <p id="favorite-date">${favs[indexClicked].date}</p>
    </div>
  </div><!--end row-->
  <div class="row">
    <p id="favorite-explanation">${favs[indexClicked].info}</p>
  </div><!--end row-->`
  }
  else if (e.target.classList.contains('remove')) {
    favs.splice(indexClicked, 1)
    localStorage.setItem('ImageInfo', JSON.stringify(favs));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Trying to delete this image!",
    });
  } buildFavs()
}
addEventListener('click', clickHandler)

function buildFavs () {
  const ls = localStorage.getItem('ImageInfo')
  if (ls) {
    favs = JSON.parse(ls)
  }
}
buildFavs()




//Fav-----------------------------------------------------------
//

//past-----------------------------------------------------------
//use submit button to change let dateurl


//ofTheDay---------------------------------------------------
