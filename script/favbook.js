
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
let k = 0 //k is used to track the image for mapping src to img id
for (i = 1; i <= favs.length / 4;) {             // i is used to track the page
  // console.log(`Page ${i}`);
  faveBookHTML.push(`
  <div class="p${i}" id="p${i}">Hello ${i}
  <div class="row ps-4" id="row-1">
  Row one
  </div><!--end row-->
  </div>`)//pushes to array so not to override previous
  document.getElementById("flipbook").innerHTML = faveBookHTML
  const bookInner = faveBookHTMLInner.join('')
  document.getElementById("row-1").innerHTML = bookInner
  for (j = 0; j < 5; j++) // j is used to track the images for formatting
  {
    if (j === 4) {
      faveBookHTMLInner.push(`
        <div class="col-6 p-1">
        <div class="parent" id="${i}-${j}"> 
          <img
          src="${favs[k].url}"
          class="mainImg p-2 pictureNum${k}">
          <img src="images/corner-tabs.png" class="cornerTL corner">
          <img src="images/corner-tabs.png" class="cornerTR corner">
          <img src="images/corner-tabs.png" class="cornerBR corner">
          <div class="btn-group dropup cornerBL corner"><!-- Default dropup button -->
            <img src="images/corner-w-dots.png" type="button" class="more-info  dropdown-toggle delete" data-bs-toggle="dropdown" data-index="${k}" aria-expanded="false">
            <ul class="dropdown-menu">
                <li><a class="dropdown-item main-button learnMore" type="button" data-bs-toggle="modal" data-bs-target="#learnMore" data-index="${k}">Learn More</a></li>
                <li><a class="dropdown-item remove " href="#">Remove</a></li>
              </ul>
            </div><!--end button div-->
        </div><!--end parent-->
      </div><!--End col 1-->
      `)

      // console.log(`Image ${j}`);
      // console.log(`Image Tracked as ${k}`)
      k++;
      i++;

    } else {

      // console.log(`Image ${j}`);
      // console.log(`Image Tracked as ${k}`)
      k++;
    }
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