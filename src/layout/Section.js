import '../css/Main.css';



const Section = () => {

 


    return (
        <>

            <div className="video">
                <div className="video_wrap">
                    <div className="video_inner">
                        <video id="videoPlayer" src="TP4_img/ghostPreview.mp4" >
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
            {/*  <!-- movie slide --> */}
            <section className="section1 section_abled">
                <div className="movie_contents">
                    <div className="movie_sort">
                        <div className="movie_sort_movieChart">
                            <a href="#" className="movie_sort_movieChart_inner movie_sort_movieChart_inner1"><span
                                               /*  onClick={toggleChart} */ >무비차트</span></a>
                            <span></span>
                            <a href="#" className="movie_sort_movieChart_inner movie_sort_movieChart_inner2"><span
                                               /*  onClick={toggleChart} */>상영예정작</span></a>
                        </div>
                        <div className="movie_sort_all">
                            <a href="#" className="movie_sort_all_inner1"><span>전체보기</span></a>
                            <img src="TP4_img/arrowRight.png" />
                        </div>
                    </div>
                    <div className="movie_chart_outer">
                        <div className="movie_chart">
                            <ul className="movie_list movie_list1">
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list1.jpeg" />
                                        <i className="movie_list_num">1</i>
                                    </div>
                                    <p>아바타-물의 길</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>96%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 61.3%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list2.jpeg" />
                                        <i className="movie_list_num">2</i>
                                    </div>
                                    <p>더 퍼스트 슬램덩크</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>97%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 7.7%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list3.jpeg" />
                                        <i className="movie_list_num">3</i>
                                    </div>
                                    <p>교섭</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>99%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 6.2%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list4.jpeg" />
                                        <i className="movie_list_num">4</i>
                                    </div>
                                    <p>유령</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />

                                            <span>99%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 5.1%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner movie_list_inner5">
                                    <div className="movieChartGoRight"/*  onClick={slideGoRight} */>
                                        <img src="TP4_img/arrowRight.png" style={{ width: '16px', height: '16px' }} />
                                    </div>
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list5.jpeg" />
                                        <i className="movie_list_num">5</i>
                                    </div>
                                    <p>영웅</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>94%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 4.0%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*  <!-- 2번쨰 무비차트 리스트 --> */}
                        <div className="movie_chart_disabled">
                            <ul className="movie_list movie_list2">
                                <li className="movie_list_inner movie_list_inner6">
                                    <div className="movieChartGoLeft" /* onClick={slideGoLeft} */>
                                        <img src="TP4_img/arrowLeft.png" style={{ width: '16px', height: '16px' }} />
                                    </div>
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list6.jpeg" />
                                        <i className="movie_list_num">6</i>
                                    </div>
                                    <p>장화신은 고양이 끝・・・</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>96%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 3.2%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list7.jpeg" />
                                        <i className="movie_list_num">7</i>
                                    </div>
                                    <p>스위치</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>94%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 2.9%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list8.jpeg" />
                                        <i className="movie_list_num">8</i>
                                    </div>
                                    <p>웃는남자 감독판</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>97%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 2.6%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list9.jpeg" />
                                        <i className="movie_list_num">9</i>
                                    </div>
                                    <p>오늘 밤, 세계에서・・・</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>91%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 1.8%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_list10.jpeg" />
                                        <i className="movie_list_num">10</i>
                                    </div>
                                    <p>마리앙투아네트</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>99%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 1.0%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section2 section_disabled">
                <div className="movie_contents">
                    <div className="movie_sort">
                        <div className="movie_sort_movieChart">
                            <a href="#" className="movie_sort_movieChart_inner movie_sort_movieChart_inner1"><span
                            >무비차트</span></a>
                            <span></span>
                            <a href="#" className="movie_sort_movieChart_inner movie_sort_movieChart_inner2"><span
                            >상영예정작</span></a>
                        </div>
                        <div className="movie_sort_all">
                            <a href="#" className="movie_sort_all_inner1"><span>전체보기</span></a>
                            <img src="TP4_img/arrowRight.png" />
                        </div>
                    </div>
                    <div className="movie_chart_outer">
                        <div className="movie_chart">
                            <ul className="movie_res_list movie_list1">
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list1.jpeg" />
                                        <i className="movie_list_num">1</i>
                                    </div>
                                    <p>프린스 챠밍</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>98%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.1%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list2.jpeg" />
                                        <i className="movie_list_num">2</i>
                                    </div>
                                    <p>문맨</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />

                                            <span>95%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.8%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list3.jpeg" />
                                        <i className="movie_list_num">3</i>
                                    </div>
                                    <p>시간을 꿈꾸는 소녀</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>?</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.8%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list4.jpeg" />
                                        <i className="movie_list_num">4</i>
                                    </div>
                                    <p>해시태그 시그네</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>98%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.2%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner movie_list_inner5">
                                    <div className="movieChartGoRight">
                                        <img src="TP4_img/arrowRight.png" style={{ width: '16px', height: '16px' }} />
                                    </div>
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list5.jpeg" />
                                        <i className="movie_list_num">5</i>
                                    </div>
                                    <p>나는 마을 방과후 교・・・</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>?</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.0%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 2번쨰 상영예정 무비차트 리스트  */}
                        <div className="movie_chart_disabled">
                            <ul className="movie_list movie_list2">
                                <li className="movie_list_inner movie_list_inner6">
                                    <div className="movieChartGoLeft"  >
                                        <img src="TP4_img/arrowLeft.png" style={{ width: '16px', height: '16px' }} />
                                    </div>
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list6.jpeg" />
                                        <i className="movie_list_num">6</i>
                                    </div>
                                    <p>[아트&다이닝]빈센・・・</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>?</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.0%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list7.jpeg" />
                                        <i className="movie_list_num">7</i>
                                    </div>
                                    <p>[사이다경제]서울・・・</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>?</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.0%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list8.jpeg" />
                                        <i className="movie_list_num">8</i>
                                    </div>
                                    <p>교섭</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>99%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 6.2%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list9.jpeg" />
                                        <i className="movie_list_num">9</i>
                                    </div>
                                    <p>유령</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>99%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 5.1%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                                <li className="movie_list_inner">
                                    <div className="movie_img_wrap">
                                        <img src="TP4_img/movie_res_list10.jpeg" />
                                        <i className="movie_list_num">10</i>
                                    </div>
                                    <p>유랑의 달</p>
                                    <div className="movie_info_wrap">
                                        <div className="movie_info_left">
                                            <img src="TP4_img/goldenEgg.png" style={{ width: '16px', height: '16px' }} />
                                            <span>98%</span>
                                        </div>
                                        <div className="movie_info_right">
                                            <span>예매율 0.0%</span>
                                        </div>
                                    </div>
                                    <div className="hover_cont">
                                        <a href="#" className="hover_cont_inner1">상세보기</a>
                                        <a href="#" className="hover_cont_inner2">예매하기</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section;