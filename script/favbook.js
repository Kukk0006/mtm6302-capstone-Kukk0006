console.log("My Gallery")


//empty array for the generated html to be pushed to, so it's all accessed at once -faster load time and streamlined
const gallery = []

//for...of loop to go through each item in the array and push the generated html into the empty array
for (let i = 0; i < favs.length; i++) {
  gallery.push(`<span class="card grid-item">
    <img src="${favs[i].url}" alt="${favs[i].title}" data-source="${favs[i].title}" data-info="${favs[i].info}" data-date="${favs[i].date}" data-index="${i}" class="galleryImg imgRestrict pb-2"> <br>
    <div class="card-text d-flex justify-content-between">
      <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#learnMoreFav" class="btn btn-sm btn-primary learnFavMore" data-index="${i}">Remind Me</a>
      <button type="button" data-index="${i}" class="btn btn-sm btn-danger remove">Delete</button>
    </div>
  </span>`);
}

//joins all the elements in the gallery array with spaces between each item, default is comma
const list = `
  ${gallery.join('')}`

//inserts the html into the dom 
const $list = document.getElementById('galleryGrid')
$list.innerHTML = $list.innerHTML + list

// From IMDAC
const $card = document.querySelector('card')
const $faveModal = document.querySelector('.faveModal')
function clickHandler (e) {
  if (e.target.classList.contains('galleryImg')) {
    // Show the modal with the clicked image information
    swal.fire({
      icon: "warning",
      title: "Oh noes",
      text: "HD Version of " + e.target.dataset.source + " coming soon",
    })
  } else if (e.target.classList.contains('learnFavMore')) {
    // Handle clicks on the "Learn-More" button
    const indexClicked = e.target.dataset.index;
    const imageData = favs[indexClicked]; // Access data associated with the clicked index
    // swal.fire({
    //   icon: 'question',
    //   text: 'Clicked on "Learn-More" for title: ' + imageData.title,
    // });
    $faveModal.innerHTML = `
    <img src="${favs[indexClicked].url}" alt="${favs[indexClicked].title}" class="modalImg">
    <div class="col-6 d-flex justify-content-end">
      <p id="favorite-date">${favs[indexClicked].date}</p>
    </div>
    </div><!--end col-->
    <div class="row">
    <h3>${favs[indexClicked].title}</h3>
    <p id="favorite-explanation" class="caption">${favs[indexClicked].info}</p>`
  }
}
$list.addEventListener('click', clickHandler);
