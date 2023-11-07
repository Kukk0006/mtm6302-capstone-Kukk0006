//from Stack overflow :https://stackoverflow.com/questions/51659414/populate-dropdown-list-with-current-day-month-and-year

//need to limit to June 16 1995 and future dates
$(document).ready(function () {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let qntYears = 29; //changed to 29 years to go back to 1995 can make quasion to not hve to update every year
  let selectYear = $("#year");
  let selectMonth = $("#month");
  let selectDay = $("#day");
  let currentYear = new Date().getFullYear();

  for (let y = 0; y < qntYears; y++) {
    let date = new Date(currentYear);
    let yearElem = document.createElement("option");
    yearElem.value = currentYear
    yearElem.textContent = currentYear;
    selectYear.append(yearElem);
    currentYear--;
  }

  for (let m = 0; m < 12; m++) {
    let month = monthNames[m];
    let monthElem = document.createElement("option");
    monthElem.value = m;
    monthElem.textContent = month;
    selectMonth.append(monthElem);
  }

  let d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();
  let day = d.getDate();

  selectYear.val(year);
  selectYear.on("change", AdjustDays);
  selectMonth.val(month);
  selectMonth.on("change", AdjustDays);

  AdjustDays();
  selectDay.val(day)

  function AdjustDays () {
    let year = selectYear.val();
    let month = parseInt(selectMonth.val()) + 1;
    selectDay.empty();

    //get the last day, so the number of days in that month
    let days = new Date(year, month, 0).getDate();

    //lets create the days of that month
    for (let d = 1; d <= days; d++) {
      let dayElem = document.createElement("option");
      dayElem.value = d;
      dayElem.textContent = d;
      selectDay.append(dayElem);
    }
  }
});