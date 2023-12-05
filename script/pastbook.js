//from https://api.jqueryui.com/datepicker/
let finaldate = "";
$(document).ready(function () {
  $(function () {
    $("#datepicker").datepicker({
      defaultDate: 0,
      dateFormat: 'yy-mm-dd',
      maxDate: '0',
      changeMonth: true,
      changeYear: true,
      minDate: new Date(1995, 6, 20 - 30, 1),
      yearRange: "1995:2023",
      onSelect: function () {
        selected = $(this).datepicker("getDate");
        d = new Date(selected);
        let fixed = d.toISOString();
        console.log(d);
        finaldate = fixed.substring(0, 10);
        console.log(finaldate);
        dateurl = "&date=" + finaldate
        fetchNASAData()
      }

    });
  });
});
// document.getElementById('pastBtn').addEventListener('click', function (e) {
//   swal.fire({
//     icon: "success",
//     title: "Date Me!",
//     text: "on" + ' ' + dateurl,
//   })

// })

//on select method, prevent default, constrain input
