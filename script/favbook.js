let faveBookHTML = []
let faveID = 0
for (const fav of favs) {
  faveID++;
  console.log(faveID);
  faveBookHTML.push(
    `<div class="${faveID}">
    <img
  src="${fav.url}"
  class="mainImg p-2">
<img src="images/corner-tabs.png" class="cornerTL corner">
<img src="images/corner-tabs.png" class="cornerTR corner">
<img src="images/corner-tabs.png" class="cornerBR corner">
<!-- Default dropup button -->
<div class="btn-group dropup cornerBL corner">
  <img src="images/corner-w-dots.png" type="button" class="more-info  dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul class="dropdown-menu">

    <li><a class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#learnMore"
        class="main-button learn-more">Learn More</a></li>
    <li><a class="dropdown-item remove" href="#">Remove</a></li>
  </ul>
</div><!--End Pop-up menu-->
</div>` )
}
// const list = `${faveBookHTML.join('')}`
document.getElementById('one').innerHTML = faveBookHTML[0]
document.getElementById('two').innerHTML = faveBookHTML[1]
document.getElementById('three').innerHTML = faveBookHTML[2]
document.getElementById('four').innerHTML = faveBookHTML[3]


