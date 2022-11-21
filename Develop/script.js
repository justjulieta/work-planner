$(document).ready(() => {
  });
  
  $("#currentDay").text(dayjs().format("dddd MMMM DD YYYY"));

  function colorBlock() {
    let timeNow = dayjs().hour();
    $(".time-schedule").each(function () {
      let timeSchedule = parseInt($(this).attr("id").split("hour")[1])
      if (timeSchedule < scheduleHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeSchedule === scheduleHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }

  $(function saveData() {
    var saveBtn = $(".saveBtn");
    saveBtn.on("click", handleSave);

    function handleSave(event) {
      event.preventDefault();
      console.log("save clicked");
      
      var textInput = $(this).siblings('textarea').val();
      var textAreaId = $(this).siblings('textarea').attr('id');

    localStorage.setItem(textAreaId, JSON.stringify(textInput));
      $('#savedevent').fadeIn(0).delay(1000).fadeOut();
    }
  });
