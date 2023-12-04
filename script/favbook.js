
let faveBookHTML = []
let faveBookHTMLInner = []
let faveBookHTMLPictures = []


let faveID = 0
let test = 1

// const list = `${faveBookHTML.join('')}`
// document.getElementById('four').innerHTML = faveBookHTML[i]

// for (let i = 0; i < favs.length - 1;) { // runs throught the entire array
//   document.getElementById("picture" + faveID).src = faveBookHTML[i];
//   console.log(favs[i]);
//   test++;
//   console.log(i)
// }
let k = 1 //k is used to track the image for mapping src to img id
for (i = 1; i < 3; i++) {             // i is used to track the page
  console.log(`Page ${i}`);
  faveBookHTML.push(`<div class="p${i}" id="p${i}">Hello ${i}</div>`)//pushes to array so not to override previous
  document.getElementById("flipbook").innerHTML = faveBookHTML
  document.getElementById("p1").innerHTML = faveBookHTMLInner
  for (j = 0; j < 1; j++)            // j is used to track the images for formatting
  {
    let htmlPlace = document.getElementById("${i}-${j}")

    faveBookHTMLInner.push(`
    <div class="row ps-4">
      <div class="col-6 p-1">
        <div class="parent" id="${i}-${j}"> 
          <img
          src="${favs[0].url}"
          class="mainImg p-2">
          <img src="images/corner-tabs.png" class="cornerTL corner">
          <img src="images/corner-tabs.png" class="cornerTR corner">
          <img src="images/corner-tabs.png" class="cornerBR corner">
          <div class="btn-group dropup cornerBL corner"><!-- Default dropup button -->
            <img src="images/corner-w-dots.png" type="button" class="more-info  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#learnMore"
              class="main-button learn-more">Learn More</a></li>
                <li><a class="dropdown-item remove" href="#">Remove</a></li>
              </ul>
            </div><!--end button div-->
        </div><!--end parent-->
      </div><!--End col 1-->
      <div class="col-6 p-1">
      <div class="parent" id="${i}-${j}"> 
        <img
        src="${favs[1].url}"
        class="mainImg p-2">
        <img src="images/corner-tabs.png" class="cornerTL corner">
        <img src="images/corner-tabs.png" class="cornerTR corner">
        <img src="images/corner-tabs.png" class="cornerBR corner">
        <div class="btn-group dropup cornerBL corner"><!-- Default dropup button -->
          <img src="images/corner-w-dots.png" type="button" class="more-info  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <ul class="dropdown-menu">
              <li><a class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#learnMore"
            class="main-button learn-more">Learn More</a></li>
              <li><a class="dropdown-item remove" href="#">Remove</a></li>
            </ul>
          </div><!--end button div-->
      </div><!--end parent-->
    </div><!--End col 1-->
  </div><!--End row 1-->
  <div class="row ps-4">
  <div class="col-6 p-1">
    <div class="parent" id="${i}-${j}"> 
      <img
      src="${favs[2].url}"
      class="mainImg p-2">
      <img src="images/corner-tabs.png" class="cornerTL corner">
      <img src="images/corner-tabs.png" class="cornerTR corner">
      <img src="images/corner-tabs.png" class="cornerBR corner">
      <div class="btn-group dropup cornerBL corner"><!-- Default dropup button -->
        <img src="images/corner-w-dots.png" type="button" class="more-info  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#learnMore"
          class="main-button learn-more">Learn More</a></li>
            <li><a class="dropdown-item remove" href="#">Remove</a></li>
          </ul>
        </div><!--end button div-->
    </div><!--end parent-->
  </div><!--End col 1-->
  <div class="col-6 p-1">
  <div class="parent" id="${i}-${j}"> 
    <img
    src="${favs[3].url}"
    class="mainImg p-2">
    <img src="images/corner-tabs.png" class="cornerTL corner">
    <img src="images/corner-tabs.png" class="cornerTR corner">
    <img src="images/corner-tabs.png" class="cornerBR corner">
    <div class="btn-group dropup cornerBL corner"><!-- Default dropup button -->
      <img src="images/corner-w-dots.png" type="button" class="more-info  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <ul class="dropdown-menu">
          <li><a class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#learnMore"
        class="main-button learn-more">Learn More</a></li>
          <li><a class="dropdown-item remove" href="#">Remove</a></li>
        </ul>
      </div><!--end button div-->
  </div><!--end parent-->
</div><!--End col 1-->
</div><!--End row 2-->`)
    console.log(`Image ${j}`);
    console.log(`Image Tracked as ${k}`)
    k++;
  }
}
//page template
//outside loop
/*<div class="p${i}"> //first loop
          <div class="row ps-4">//inner loop
            <div class="col-6 p-1">
              <div class="parent" id="${i}-${j}"> 
htmlPlace.innerHTML = favebookHTML[k]
              </div>
            </div><!--End col 1-->
            <div class="col-6 p-1">
              <div class="parent" id="${i}-${j}">
htmlPlace.innerHTML = favebookHTML[k]
              </div>
            </div><!--end col 2-->
          </div><!--End row 1-->
          <div class="row ps-4">
            <div class="col-6 p-1">
              <div class="parent" id="${i}-${j}">
htmlPlace.innerHTML = favebookHTML[k]
              </div>
            </div><!--end col 1-->
            <div class="col-6 p-1">
              <div class="parent" id"${i}-${j}">
htmlPlace.innerHTML = favebookHTML[k]
              </div>
            </div><!--end col 2-->
          </div><!--End row 2-->
        </div><!--end pg3-->
        
        at the end of all this it pushes into a final array then join then innerHTML of the book.......*/