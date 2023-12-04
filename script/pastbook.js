//from Stack overflow :https://stackoverflow.com/questions/51659414/populate-dropdown-list-with-current-day-month-and-year
$(function () {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    maxDate: "0",
    minDate: new Date(1995, 6, 20 - 30, 1),
    yearRange: "1995:2023"

  });
});