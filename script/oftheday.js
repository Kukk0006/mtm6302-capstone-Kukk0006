const $overlay = document.getElementById('overlay')
$overlay.addEventListener('click', function () {
  if (overlay.style.background !== "transparent") {
    overlay.style.background = "transparent";
  }
  else {
    overlay.style.background = "#000"
  }
})