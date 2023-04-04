var start = true;
var time = 30;

$('a.showtimer').click(function() {
  $('div.timeShow').slideToggle("slow")
  $("#buttonstart").text("START");
  clearInterval(timer);
  $("#time").text("00:00")
  start = true;
});

$("#button1").click(function() {
  if($(this).hasClass("starting")) {
    clearInterval(timer);
    time = 30;
    start = true;
  }
  
  if(start) {
    $("#button1").addClass("starting")
    time = 30;
    start = false;
  
  timer = setInterval(function() {

    if(time == 0) {
      clearInterval(timer);
      start = true;
    }

    if(time < 10) {
      time = "0" + time;
    }

    $("#time").html("00:"+time);
    time--;
  }, 1000);
}
});

$("#buttonstart").click(function() {
  if($(this).hasClass("starting")) {
    clearInterval(timer);
    $("#buttonstart").text("START");
    $("#buttonstart").removeClass("starting");
    $("#time").text("00:00")
    start = true;
  }
  else if(start) {
    time = 0;
    $("#buttonstart").text("RESET");
    $("#buttonstart").addClass("starting");

    start = false;
  
  timer = setInterval(function() {

    if(time == 30) {
      clearInterval(timer);
      $("#buttonstart").text("START");
      $("#buttonstart").css("width", "80px")
      start = true;
    }

    if(time < 10) {
      time = "0" + time;
    }

    $("#time").html("00:"+time);
    time++;
  }, 1000);
}
});

$(".showset").click(function() {
  $(".sets").slideToggle();
});

$("li.set").on("click", function(event) {
  if($(this).hasClass("on")) {
    $(this).removeClass("on")
  }
  else {
    $(this).addClass("on");
  }
})


// 예시 자바스크립트 코드
let checkboxes = document.querySelectorAll(".checkbox");

// 각 checkbox에 대해 이벤트 리스너를 추가합니다.
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    // 현재 checkbox의 이미지를 가져옵니다.
    let currentImage = checkbox.style.backgroundImage;

    // 이미지가 없는 경우 새로운 이미지를 설정합니다.
    if (!currentImage) {
      checkbox.style.backgroundImage = "url('/images/programs/xx.png')";
    } 
    // 그렇지 않은 경우(이미지가 설정된 경우) 이미지를 제거합니다.
    else {
      checkbox.style.backgroundImage = "";
    }

    // 변경된 이미지를 로컬 스토리지에 저장합니다.
    localStorage.setItem(checkbox.id, checkbox.style.backgroundImage);
  });

  // 새로고침 시 이전에 저장한 이미지가 있다면 가져와서 설정합니다.
  let savedImage = localStorage.getItem(checkbox.id);
  if (savedImage) {
    checkbox.style.backgroundImage = savedImage;
  }
});


