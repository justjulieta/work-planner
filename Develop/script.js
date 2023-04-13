var currentDateElement = dayjs().format("[Today's date is] dddd, MMMM DD, YYYY, h:mm a");

$("#currentDay").text(currentDate);

function timeTracker () {
  const currentTime = dayjs().hour();
  $(".time-block").each(function () {
    var blockTime = parseInt($$(this).attr("id").split("hour")[1]);
    
    if (blockTime < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (blockTime === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

$(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings("description").val();
    localStorage.setItem(time, description);
  });

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#houR12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));

  timeTracker();
});

$(function () {
  $(".saveBtn").on(click, function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.removeItem(time, description);
  });
});