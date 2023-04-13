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

  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));

  timeTracker();
});

$(function () {
  $(".saveBtn").on(click, function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.removeItem(time, description);
  });
});