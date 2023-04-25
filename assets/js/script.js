var today = dayjs()

var timeBlock = doucment.querySelector(".container");

$(function () {
  $("#currentDate").text(today.format(" dddd, MMMM DD, YYYY, h:mm a"));
  console.log(currentDate);

  $(".saveBtn").on("click", function () {  
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));

function auditTask() {
  var currentHour = today.hour();

  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr("id").split("hour")[1]);

    if (timeId < currentHour) {
      $(this).addClass("future");
    }

    else if (timeId === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }

    else {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
  })};

  auditTask();

  setTimeout(function () {
    location = "";
  }, 1000 * 60);

});