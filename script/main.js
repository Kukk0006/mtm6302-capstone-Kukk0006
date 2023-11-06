let baseurl = 'https://api.nasa.gov/planetary/apod?api_key='
// let dateurl = "&date=2020-03-03"
//let test = 0;

const api_key = 'O1Y1c8dLaOAYMEU4ZsMCqcDyiJSARsA4bW1xpyAy' //my key
let btn = document.querySelector("button");
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${baseurl}${api_key}`)
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
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('explanation').textContent = data.explanation
  if (data.media_type == "video") {
    document.getElementById('videoURL').src = data.url
    document.getElementById('videoURLModal').src = data.url
  } else {
    document.getElementById('picture').src = data.url//multiple id's??????
    document.getElementById('pictureModal').src = data.url
    document.getElementById('pictureHD').src = data.hdurl
  }
}
// easier way with objects week7 class......

//ofTheDay
const $overlay = document.getElementById('overlay')
$overlay.addEventListener('click', function () {
  if (overlay.style.background !== "transparent") {
    overlay.style.background = "transparent";
  }
  else {
    overlay.style.background = "#000"
  }
})

