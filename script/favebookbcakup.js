console.log("hello")


//empty array for the generated html to be pushed to, so it's all accessed at once -faster load time and streamlined
const gallery = []

//for...of loop to go through each item in the array and push the generated html into the empty array
for (const fav of favs) {
  gallery.push(`<span class="grid-item" >
  <img src="${fav.url}" alt="${fav.title}" data-large="${fav.urlHD}" data-source="${fav.title}" data-info="${fav.info}" data-date="${fav.date}" class="galleryImg imgRestrict"> <br>
  </span>`)

}

//joins all the elements in the gallery array with spaces between each item, default is comma
const list = `
  ${gallery.join('')}`

//inserts the html into the dom 
const $list = document.getElementById('galleryGrid')
$list.innerHTML = $list.innerHTML + list

// From IMDAC
const $img = document.querySelector('.galleryImg')
const $modal2 = document.querySelector('.modal')


function clickHandler (e) {
  if (e.target.classList.contains('galleryImg')) {
    // Show the modal with the clicked image information
    console.log(e.target)
    $modal2.innerHTML = `
    <div class="modal fade modal-xl" id="learnMore" tabindex="-1" aria-labelledby="learnMoreLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="learnMoreLabel">APOD</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
          <div class="container-fluid learnMoreModal">
            <div class="row justify-content-center">
              <div class="col-6">
                <p id="favorite-title">Title</p>
              </div>
              <img src="${e.target.dataset.large}" alt="${e.target.dataset.source}" class="modalImg">
              <div class="col-6 d-flex justify-content-end">
                <p id="favorite-date">${e.target.dataset.date}</p>
              </div>
            </div><!--end row-->
            <div class="row">
            <h3>${e.target.dataset.source}</h3>
              <p id="favorite-explanation" class="caption">${e.target.dataset.info}</p>
            </div><!--end row-->
          </div><!--container fluid-->
        </div><!--end modal-body-->
        </div><!--end modal-content-->
  </div> <!--end modal-dialog-->
</div><!--end modal-label-->`


    $modal2.classList.add('show');
    $modal2.classList.remove('imgRestrict');
  }
}

$list.addEventListener('click', clickHandler);

$modal2.addEventListener('click', function () {
  $modal2.classList.remove('show');
});