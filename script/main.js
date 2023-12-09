//---------------Varibles---------------------
const baseurl = 'https://api.nasa.gov/planetary/apod?api_key='
let dateurl = ''
// let dateurl = "&date=2020-03-03" //video
// let dateurl = "&date=2017-07-16" //picture
//let test = 0;
const api_key = 'O1Y1c8dLaOAYMEU4ZsMCqcDyiJSARsA4bW1xpyAy' //my key diff for best security practice, normally on another script file
let favs = [] //empty array for favorites 
const $modal = document.querySelector('.learnMoreModal')

//-------------API---------------------

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

const ls = localStorage.getItem('ImageInfo')
if (ls) {
  favs = JSON.parse(ls)
}

//add and remove button
function clickHandler (e) {
  console.log(e.target)
  let indexClicked = e.target.dataset.index
  if (e.target.classList.contains('add-fav') || e.target.classList.contains('add-fav-modal')) {
    if (!favs.find(data => data.title === titleAPI)) {
      favs.unshift({
        url: urlAPI,
        // hdurl: urlHDAPI,
        title: titleAPI,
        date: dateAPI,
        info: infoAPI
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
  }
}
addEventListener('click', clickHandler)

