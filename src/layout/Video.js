import { Fragment } from "react"
import { Outlet } from "react-router-dom";


const Video = () => {

  // //video stop or play
  // var videoPlayer = document.getElementById("videoPlayer");
  // var stopPlayBtn = document.querySelector(".video_controller .stopPlayBtn");
  // var stopPlayBtnImg = document.querySelector(".video_controller .stopPlayBtn > img");

  // stopPlayBtn.onclick = function (e) {
  //   e.preventDefault();

  //   if (!videoPlayer.paused) {
  //     videoPlayer.pause();
  //     stopPlayBtnImg.src = "TP4_img/videoPlayIcon.png";
  //   } else {
  //     videoPlayer.play();
  //     stopPlayBtnImg.src = "TP4_img/videoPauseIcon.png";
  //   }
  // }

  // //영상 끝나면 버튼 전환
  // setInterval(function () {
  //   if (videoPlayer.paused) {
  //     stopPlayBtnImg.src = "TP4_img/videoPlayIcon.png";
  //   }
  // }, 500);

  // //video sound controll
  // var soundControllBtn = document.querySelector(".video_controller .soundControllBtn")
  // var soundControllBtnImg = document.querySelector(".video_controller .soundControllBtn > img");

  // soundControllBtn.addEventListener('click', controllSound);
  // function controllSound(e) {
  //   e.preventDefault();

  //   if (videoPlayer.muted) {
  //     videoPlayer.muted = false;
  //     soundControllBtnImg.src = "TP4_img/videoSoundOnIcon.png";
  //   } else {
  //     videoPlayer.muted = true;
  //     soundControllBtnImg.src = "TP4_img/videoSoundOffIcon.png";
  //   }
  // }

  return (
    <Fragment>
      <div className="video">
        <div className="video_wrap">
          <div className="video_inner">
            <video id="videoPlayer" src="TP4_img/ghostPreview.mp4">
            </video>
            <div className="video_controll_wrap">
              <div className="video_info">
                <strong>유령</strong>
                <br /><br />
                <span>항일조직 스파이 '유령'</span>
                <br />
                <span>작전을 성공시켜야만 한다.</span>
                <br /><br />
              </div>
              <div className="video_controller">
                <a href="#" className="detailViewBtn"><span>상세보기</span></a>
                < img src="TP4_img/arrowRight.png" />
                <a href="#" className="stopPlayBtn">
                  <img src="TP4_img/videoPauseIcon.png" className="videoPlayControll" />
                </a>
                <a href="#" className="soundControllBtn">
                  <img src="TP4_img/videoSoundOffIcon.png" className="videoSoundControll" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}
export default Video;