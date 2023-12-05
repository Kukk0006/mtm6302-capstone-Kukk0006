let faveBookHTML = []
let faveBookHTMLInner = []
let faveBookHTMLPictures = []
let faveID = 0
let test = 1


let k = 0 //k is used to track the image for mapping src to img id
for (i = 1; i <= favs.length / 4;) {             // i is used to track the page
  // console.log(`Page ${i}`);
  faveBookHTML.push(`
  <div class="p${i} page" id="p${i}">Hello ${i}
  <div class="row ps-4" id="row-1">
  Row one
  </div><!--end row-->
  <div class="row ps-4" id="row-2">
  Row two
  </div><!--end row-->
  </div>`)//pushes to array so not to override previous
  document.getElementById("flipbook").innerHTML = faveBookHTML
  i++;
}

for (j = 0; j < favs.length; j++) // j is used to track the images for formatting
{
  {
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
    j++;
  }
}
const bookInner = faveBookHTMLInner.join('');
document.getElementById("row-1").innerHTML = bookInner;

// const chunkSize = 2; // Number of objects per section
// const pages = document.querySelectorAll('.page'); // Get all pages

// for (let i = 0; i < faveBookHTMLInner.length; i += chunkSize) {
//   const chunk = faveBookHTMLInner.slice(i, i + chunkSize); // Get a chunk of up to 4 objects

//   const pageIndex = Math.floor(i / chunkSize); // Determine which section to append to

//   const page = pages[pageIndex]; // Get the section to append to

//   const container = document.createElement('div'); // Create a container for the objects
//   chunk.forEach((obj) => {
//     const div = document.createElement('div');
//     div.innerHTML = obj; // Use obj as HTML content (from faveBookHTMLInner)
//     container.appendChild(div); // Append each object to the container
//   });

//   page.querySelector('.row').appendChild(container); // Append the container to the row of the section
// }