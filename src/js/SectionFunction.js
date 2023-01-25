



  //쿠키 이름, 쿠키 값 조회
  var cookieArr = document.cookie.split("; ");

  var cnt = 0;
  /* for (i in cookieArr) {
    if (cookieArr[i].split("=")[0] == "cjmPopupPage") {
      cnt++;
    }
  } */
  /* if (cnt == 0) {
    window.open("cjmPopup.html", "cjmPopupPage", "width=360px, height=325px");
  } */

  //remove top banner
  var topBannerDelBtn = document.getElementById("btn_ad_close");
  topBannerDelBtn.onclick = function () {
    document.querySelector("header .top-banner").style.display = "none";
  }

  //메뉴바 마우스 오버 아웃
  var gnb = document.querySelectorAll(".gnb > li > span > a");
  var menuTable = document.querySelector(".menuTable");
  // mouseover
  for (let i = 0; i < gnb.length; i++) {
    gnb[i].addEventListener('mouseover', function (e) {
      menuTable.classList.add("active");

      var ins = document.querySelectorAll(".in");
      for (let j = 0; j < ins.length; j++) {
        ins[j].addEventListener('mouseover', function () {
          menuTable.classList.add("active");
        });
      };
    });
  };
  //mouseout
  var headerElement = document.querySelector(".header_bottom_outer");
  headerElement.addEventListener('mouseout', function (e) {
    menuTable.classList.remove("active");
  });

  //video stop or play
  var videoPlayer = document.getElementById("videoPlayer");
  var stopPlayBtn = document.querySelector(".video_controller .stopPlayBtn");
  var stopPlayBtnImg = document.querySelector(".video_controller .stopPlayBtn > img");

  stopPlayBtn.onclick = function (e) {
    e.preventDefault();

    if (!videoPlayer.paused) {
      videoPlayer.pause();
      stopPlayBtnImg.src = "TP4_img/videoPlayIcon.png";
    } else {
      videoPlayer.play();
      stopPlayBtnImg.src = "TP4_img/videoPauseIcon.png";
    }
  }

  //영상 끝나면 버튼 전환
  setInterval(function () {
    if (videoPlayer.paused) {
      stopPlayBtnImg.src = "TP4_img/videoPlayIcon.png";
    }
  }, 200);

  //EVENT 리스트 자동 스와이프
  var eventSwipeIntervalNum = 0;
  eventSwipeIntervalNum = setInterval(function (e) {

    var event_list = document.querySelector(".event_content_outer_abled");
    var event_list_disabled = document.querySelector(".event_content_outer_disabled");

    event_list.classList.toggle("event_content_outer_abled");
    event_list_disabled.classList.toggle("event_content_outer_abled");
    event_list.classList.toggle("event_content_outer_disabled");
    event_list_disabled.classList.toggle("event_content_outer_disabled");
  }, 3000);


  //EVENT 리스트 자동 스와이프 정지 및 실행
  var eventListStopPlayBtn = document.getElementById("eventListStopPlayBtn");
  var eventContentOuter1 = document.querySelector(".event_content_outer1");
  var eventContentOuter2 = document.querySelector(".event_content_outer2");

  eventListStopPlayBtn.addEventListener('click', eventListStopPlayToggle);
  function eventListStopPlayToggle(e) {
    e.preventDefault();
    if (e.target.tagName != "IMG") return;

    if (e.target.alt == "pauseBtn") {
      window.clearInterval(eventSwipeIntervalNum);
      e.target.src = "TP4_img/playBtn.png";
      e.target.alt = "playBtn";

    } else if (e.target.alt == "playBtn") {
      eventSwipeIntervalNum = setInterval(function () {
        e.target.src = "TP4_img/pauseBtn.png";
        e.target.alt = "pauseBtn";

        eventContentOuter1.classList.toggle("event_content_outer_abled");
        eventContentOuter2.classList.toggle("event_content_outer_abled");
        eventContentOuter1.classList.toggle("event_content_outer_disabled");
        eventContentOuter2.classList.toggle("event_content_outer_disabled");
      }, 3000);
    };
  }

  //video sound controll
  var soundControllBtn = document.querySelector(".video_controller .soundControllBtn")
  var soundControllBtnImg = document.querySelector(".video_controller .soundControllBtn > img");

  soundControllBtn.addEventListener('click', controllSound);
  function controllSound(e) {
    e.preventDefault();

    if (videoPlayer.muted) {
      videoPlayer.muted = false;
      soundControllBtnImg.src = "TP4_img/videoSoundOnIcon.png";
    } else {
      videoPlayer.muted = true;
      soundControllBtnImg.src = "TP4_img/videoSoundOffIcon.png";
    }
  }

  //movie_list slide go right
  function slideGoRight() {
    var movie_chart = document.querySelector(".section_abled .movie_chart");
    var movie_chart_disabled = document.querySelector(".section_abled .movie_chart_disabled");

    movie_chart.classList.toggle("movie_chart");
    movie_chart_disabled.classList.toggle("movie_chart");
    movie_chart.classList.toggle("movie_chart_disabled");
    movie_chart_disabled.classList.toggle("movie_chart_disabled");
  }

  //movie_list slide go left
  function slideGoLeft() {
    var movie_chart = document.querySelector(".section_abled .movie_chart");
    var movie_chart_disabled = document.querySelector(".section_abled .movie_chart_disabled");

    movie_chart.classList.toggle("movie_chart");
    movie_chart_disabled.classList.toggle("movie_chart");
    movie_chart.classList.toggle("movie_chart_disabled");
    movie_chart_disabled.classList.toggle("movie_chart_disabled");
  }

  //무비차트 & 상영예정작 버튼 토클
  // var chartSort = document.querySelector(".section_abled .movie_sort_movieChart");
  var section1 = document.querySelector(".section1");
  var section2 = document.querySelector(".section2");
  // chartSort.addEventListener('click', toggleChart);

  function toggleChart(e) {
    e.preventDefault();

    if (e.target.tagName != "SPAN") return;

    if (e.target.innerHTML == "무비차트") {
      section2.classList.remove("section_abled");
      section1.classList.remove("section_disabled");
      section1.classList.add("section_abled");
      section2.classList.add("section_disabled");

      var movieChartInner1 = document.querySelector(".section_abled .movie_sort_movieChart_inner1 > span");
      var movieChartInner2 = document.querySelector(".section_abled .movie_sort_movieChart_inner2 > span");

      movieChartInner1.style.color = "black";
      movieChartInner2.style.color = "#777";

    } else if (e.target.innerHTML == "상영예정작") {
      section1.classList.remove("section_abled");
      section2.classList.remove("section_disabled");
      section2.classList.add("section_abled");
      section1.classList.add("section_disabled");

      var movieChartInner1 = document.querySelector(".section_abled .movie_sort_movieChart_inner1 > span");
      var movieChartInner2 = document.querySelector(".section_abled .movie_sort_movieChart_inner2 > span");

      movieChartInner2.style.color = "black";
      movieChartInner1.style.color = "#777";
    }
  }

  //event_list slide go right
  function eventGoRight() {
    var event_list = document.querySelector(".event_content_outer_abled");
    var event_list_disabled = document.querySelector(".event_content_outer_disabled");

    event_list.classList.toggle("event_content_outer_abled");
    event_list_disabled.classList.toggle("event_content_outer_abled");
    event_list.classList.toggle("event_content_outer_disabled");
    event_list_disabled.classList.toggle("event_content_outer_disabled");
  }

  //event_list slide go left
  function eventGoLeft() {
    var event_list = document.querySelector(".event_content_outer_abled");
    var event_list_disabled = document.querySelector(".event_content_outer_disabled");

    event_list.classList.toggle("event_content_outer_abled");
    event_list_disabled.classList.toggle("event_content_outer_abled");
    event_list.classList.toggle("event_content_outer_disabled");
    event_list_disabled.classList.toggle("event_content_outer_disabled");
  }

  //메뉴바 상단 고정 및 고정 버튼 토글
  var fixedBtn = document.querySelector(".fixedBtn");
  var topMenu, topMenuPosition;
  topMenu = document.querySelector(".header_bottom_outer");
  topMenuPosition = topMenu.offsetTop;  //메뉴바 처음 위치 인식
  console.log(topMenuPosition);

  function menuBarFixed() {
    topMenuPosition = document.querySelector(".top-banner").style.display == "none" ? 114 : 194;
    if (window.pageYOffset > topMenuPosition) {
      topMenu.classList.add("sticky");
      topMenu.classList.add("header_bottom_outer_fixed");
      topMenu.classList.remove("header_bottom_outer");
      fixedBtn.style.display = "flex";
    } else {
      topMenu.classList.remove("sticky");
      topMenu.classList.remove("header_bottom_outer_fixed");
      topMenu.classList.add("header_bottom_outer");
      fixedBtn.style.display = "none";
    };
  }
  document.addEventListener('scroll', menuBarFixed);

