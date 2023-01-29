import React, { useEffect, useRef, useState } from "react";
import { Fragment } from 'react';
import '../css/Main.css';

const Article = () => {

    const [isActive, setActive] = useState(true);

    //event_list slide go right
    const eventGoRight = () => {
        setActive(!isActive);
    };

    //event_list slide go left
    const eventGoLeft = () => {
        setActive(!isActive);
    };

    //Dan Abramov - useInterval Function
    function useInterval(callback, delay) {
        const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

        useEffect(() => {
            savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
            }

            if (delay !== null) {
                let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
                return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
            }
        }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
    }

    //EVENT 리스트 자동 스와이프
    const [delay, setDelay] = useState(3000);
    const [isRunning, setIsRunning] = useState(true);

    var deleteUseInterval = useInterval(() => {
        setActive(!isActive);
    }, isRunning ? delay : null);

    //EVENT 리스트 자동 스와이프 정지 및 실행
    const eventListStopPlayToggle = (e) => {
        e.preventDefault();
        
        if (e.target.tagName != "IMG") return;

        if (e.target.alt == "pauseBtn") {
            setIsRunning(!isRunning);
            e.target.src = "/TP4_img/playBtn.png";
            e.target.alt = "playBtn";

        } else if (e.target.alt == "playBtn") {
            e.target.src = "/TP4_img/pauseBtn.png";
            e.target.alt = "pauseBtn";
            setIsRunning(!isRunning);
        };
    }

    return (
        <Fragment>
            {/*  <!-- Event --> */}
            <article className="mainPageEvent">
                <div className="event_outer">
                    <div className="event">
                        <div className="event_left">
                            <p>EVENT</p>
                        </div>
                        <div className="event_right event_right1">
                            <a href="#" className=""><span>전체보기</span></a>
                            <img src="/TP4_img/arrowRight.png" />
                        </div>
                        <div className="event_right event_right2">
                            <a href="#" id="eventListStopPlayBtn" onClick={eventListStopPlayToggle}><img src="/TP4_img/pauseBtn.png" alt="pauseBtn" style={{ width: '12px', height: '16px' }} /></a>
                        </div>
                    </div>
                    {/*  <!-- 이벤트 1번째 페이지 --> */}
                    <div className={isActive ? "event_content_outer_abled" : "event_content_outer_disabled"}>
                        <div className="event_content">
                            <div>
                                <img className="event_img" src="TP4_img/eventSlideImg1.jpeg" />
                            </div>
                            <p className="event_info">CGV x TVING 월정기 혜택 [CGV PLUS]</p>
                            <p className="event_period">2022.12.02~2032.12.02</p>
                        </div>
                        <div className="event_content">
                            <div>
                                <img className="event_img" src="/TP4_img/eventSlideImg2.jpeg" />
                            </div>
                            <p className="event_info">★미니게임천국★ [교섭] 예매권 이벤트</p>
                            <p className="event_period">2023.01.05~2032.01.16</p>
                        </div>
                        <div className="event_content event_content3">
                            <div className="eventContentGoRight" onClick={eventGoRight}>
                                <img src="TP4_img/arrowRight.png" style={{ width: '16px', height: '16px' }} />
                            </div>
                            <div>
                                <img className="event_img" src="/TP4_img/eventSlideImg3.jpeg" />
                            </div>
                            <p className="event_info">우리 동네 CGV 카카오톡 채널 추가하자!</p>
                            <p className="event_period">2022.12.19~2023.01.17</p>
                        </div>
                    </div>
                    {/*  Event 2번쨰 페이지  */}
                    <div className={!isActive ? "event_content_outer_abled" : "event_content_outer_disabled"}>
                        <div className="event_content event_content4">
                            <div className="eventContentGoLeft" onClick={eventGoLeft}>
                                <img src="/TP4_img/arrowLeft.png" style={{ width: '16px', height: '16px' }} />
                            </div>
                            <div>
                                <img className="event_img" src="/TP4_img/eventSlideImg4.jpeg" />
                            </div>
                            <p className="event_info">[3000년의 기다림] 필름마크</p>
                            <p className="event_period">2023.01.03~2023.01.15</p>
                        </div>
                        <div className="event_content">
                            <div>
                                <img className="event_img" src="/TP4_img/eventSlideImg5.jpeg" />
                            </div>
                            <p className="event_info">[스위치] 필름마크</p>
                            <p className="event_period">2023.01.03~2023.01.15</p>
                        </div>
                        <div className="event_content">
                            <div>
                                <img className="event_img" src="/TP4_img/eventSlideImg6.jpeg" />
                            </div>
                            <p className="event_info">[CGV VIP] VIP PLAY </p>
                            <p className="event_period">2022.12.01~2023.02.28</p>
                        </div>
                    </div>
                </div>
            </article>
        </Fragment>
    )
}

export default Article;