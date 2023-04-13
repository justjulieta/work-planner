var currentDateElement = dayjs().format("[Today is] dddd, MMMM DD, YYYY");

$('#currentDay').text(currentDate);

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
  $(".saveBtn").on(click, function () {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".text").val();
  });
  localStorage.removeItem(hour, text);
  });
});