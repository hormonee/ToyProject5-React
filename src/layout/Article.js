import '../css/Main.css';

const Article = () => {
    return (
        <>
            {/*  <!-- Event --> */}
            <article>
                <div class="event_outer">
                    <div class="event">
                        <div class="event_left">
                            <p>EVENT</p>
                        </div>
                        <div class="event_right event_right1">
                            <a href="#" class=""><span>전체보기</span></a>
                             <img src="TP4_img/arrowRight.png"/>
                        </div>
                        <div class="event_right event_right2">
                            <a href="#" id="eventListStopPlayBtn"><img src="TP4_img/pauseBtn.png" alt="pauseBtn" style={{width: '12px', height: '16px'}}/></a>
                        </div>
                    </div>
                    {/*  <!-- 이벤트 1번째 페이지 --> */}
                    <div class="event_content_outer1 event_content_outer_abled">
                        <div class="event_content">
                            <div>
                                <img class="event_img" src="TP4_img/eventSlideImg1.jpeg"/>
                            </div>
                            <p class="event_info">CGV x TVING 월정기 혜택 [CGV PLUS]</p>
                            <p class="event_period">2022.12.02~2032.12.02</p>
                        </div>
                        <div class="event_content">
                            <div>
                                  <img class="event_img" src="TP4_img/eventSlideImg2.jpeg"/>
                            </div>
                            <p class="event_info">★미니게임천국★ [교섭] 예매권 이벤트</p>
                            <p class="event_period">2023.01.05~2032.01.16</p>
                        </div>
                        <div class="event_content event_content3">
                            <div class="eventContentGoRight" onclick="eventGoRight();">
                                <img src="TP4_img/arrowRight.png" style={{width: '16px', height: '16px'}}/>
                            </div>
                            <div>
                                <img class="event_img" src="TP4_img/eventSlideImg3.jpeg"/>
                            </div>
                            <p class="event_info">우리 동네 CGV 카카오톡 채널 추가하자!</p>
                            <p class="event_period">2022.12.19~2023.01.17</p>
                        </div>
                    </div>
                    {/*  Event 2번쨰 페이지  */}
                    <div class="event_content_outer2 event_content_outer_disabled">
                        <div class="event_content event_content4">
                            <div class="eventContentGoLeft" onclick="eventGoLeft();">
                            <img src="TP4_img/arrowLeft.png" style={{width: '16px', height: '16px'}}/>
                            </div>
                            <div>
                                <img class="event_img" src="TP4_img/eventSlideImg4.jpeg"/>
                            </div>
                            <p class="event_info">[3000년의 기다림] 필름마크</p>
                            <p class="event_period">2023.01.03~2023.01.15</p>
                        </div>
                        <div class="event_content">
                            <div>
                                <img class="event_img" src="TP4_img/eventSlideImg5.jpeg"/>
                            </div>
                            <p class="event_info">[스위치] 필름마크</p>
                            <p class="event_period">2023.01.03~2023.01.15</p>
                        </div>
                        <div class="event_content">
                            <div>
                                <img class="event_img" src="TP4_img/eventSlideImg6.jpeg"/>
                            </div>
                            <p class="event_info">[CGV VIP] VIP PLAY </p>
                            <p class="event_period">2022.12.01~2023.02.28</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Article;