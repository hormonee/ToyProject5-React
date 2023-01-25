import React from "react";
import { Fragment } from "react";


const Cjm = () => {

  //쿠키 이름, 쿠키 값 조회
  var cookieArr = document.cookie.split("; ");

  var cnt = 0;
  for (let i in cookieArr) {
    if (cookieArr[i].split("=")[0] == "cjmPopupPage") {
      cnt++;
    }
  }
  if (cnt == 0) {
    window.open("cjmPopup.html", "cjmPopupPage", "width=360px, height=325px");
  }

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
  }, 500);

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

  return (
    <Fragment>

    </Fragment>
  )
}
export default Cjm;