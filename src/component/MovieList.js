import { Link } from 'react-router-dom';
import '../css/MovieList.css';


const MovieList = () => {



    return (


        <div className="contaniner">

            <div className="contents">

                {/* 시작 */}
                <div className="wrap-moveie-chart">

                    <div className="tit-heading-wrap">
                        <h3>무비차트</h3>
                        <div className="submenu">
                            <ul>
                                <li className="on">
                                    <a href="">무비차트</a>
                                </li>

                                <li>
                                    <a href="">상영예정작</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="sect-sorting">
                        <div className="nowshow">
                            <input type="checkbox" id="chk_nowshow" title="현재 선택됨" />
                            <label >현재 상영작만 보기</label>
                        </div>
                        <label className="hidden"></label>

                        <select id="order_type" name="order-type">
                            <option title="현재 선택됨" value="1">예매율순</option>
                            <option value="2">평점순</option>
                            <option value="3">관람객순</option>
                        </select>

                        <button type="button" className="round gray">
                            <span>GO</span>
                        </button>
                    </div>

                    <div className="sect-movie-chart">

                        <h4 className="hidden">무비차트 - 예매율순</h4>
                        <ol>
                            <li className='cl'>
                                <div className="box-image">
                                    <strong className="rank">No.1</strong>
                                    <span className="thumb-image">
                                        <Link to="/moviedetail/1"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86072/86072_320.jpg" /></Link>
                                        {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                        <i className="cgvIcon etc age12">12</i>
                                        {/*  <!-- <span className="ico-grade 12">12</span> --> */}
                                    </span>
                                    {/* <span className="screentype">

                                        <a className="imax" href="#" title="IMAX 상세정보 바로가기" data-regioncode="07">IMAX</a>

                                        <a className="forDX" href="#" title="4DX 상세정보 바로가기" data-regioncode="4D14">4DX</a>

                                        <a className="screenx" href="#" title="SCREENX 상세정보 바로가기" data-regioncode="SCX">SCREENX</a>

                                    </span> */}
                                </div>
                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86072">
                                        <strong className="title">아바타-물의 길</strong>
                                    </a>

                                    <div className="score">
                                        <strong className="percent">예매율<span>24.6%</span></strong>
                                        {/* <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg great"></span>
                                            <span className="percent">96%</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2022.12.14
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/1/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20031534&amp;MOVIE_CD_GROUP=20030160">예매</Link>
                                    </span>
                                </div>

                            </li>


                            <li>
                                <div className="box-image">
                                    <strong className="rank">No.2</strong>
                                    <a href="/movies/detail-view/?midx=86750">
                                        <span className="thumb-image">
                                            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86750/86750_320.jpg" alt="상견니 포스터" />
                                            {/*  <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                            <i className="cgvIcon etc age15">15</i>
                                            {/*  <!-- <span className="ico-grade 15">15</span> --> */}
                                        </span>

                                    </a>
                                    <span className="screentype">
                                    </span>
                                </div>


                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86750">
                                        <strong className="title">상견니</strong>
                                    </a>

                                    <div className="score">
                                        <strong className="percent">예매율
                                            <span>10.6%</span></strong>
                                        {/*  <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg great"></span>
                                            <span className="percent">85%</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2023.01.25
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/2/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20031703&amp;MOVIE_CD_GROUP=20031703">예매</Link>
                                    </span>
                                </div>
                            </li>





                            <li>
                                <div className="box-image">
                                    <strong className="rank">No.3</strong>
                                    <a href="/movies/detail-view/?midx=86720">
                                        <span className="thumb-image">
                                            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86720/86720_320.jpg" alt="더 퍼스트 슬램덩크 포스터" />
                                            {/*  <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                            <i className="cgvIcon etc age12">12</i>
                                            {/*    <!-- <span className="ico-grade 12">12</span> --> */}
                                        </span>

                                    </a>
                                    <span className="screentype">

                                    </span>
                                </div>

                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86720">
                                        <strong className="title">더 퍼스트 슬램덩크</strong>
                                    </a>

                                    <div className="score">
                                        <strong className="percent">예매율<span>6.8%</span></strong>
                                        {/*    <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg great"></span>
                                            <span className="percent">97%</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2023.01.04
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/3/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20031676&amp;MOVIE_CD_GROUP=20031612">예매</Link>
                                    </span>
                                </div>
                            </li>

                        </ol>



                        <ol>
                            <li>
                                <div className="box-image">
                                    <strong className="rank">No.4</strong>
                                    <a href="/movies/detail-view/?midx=86728">
                                        <span className="thumb-image">
                                            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86728/86728_320.jpg" alt="유령 포스터" />
                                            {/*  <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                            <i className="cgvIcon etc age15">15</i>
                                            {/*  <!-- <span className="ico-grade 15">15</span> --> */}
                                        </span>
                                    </a>
                                    <span className="screentype">

                                        <a className="imax" href="#" data-regioncode="07">IMAX</a>

                                    </span>
                                </div>
                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86728">
                                        <strong className="title">유령</strong>
                                    </a>

                                    <div className="score">
                                        <strong className="percent">예매율<span>4.9%</span></strong>
                                        {/*  <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg good"></span>
                                            <span className="percent">82%</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2023.01.18
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/4/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20031631&amp;MOVIE_CD_GROUP=20031631">예매</Link>
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div className="box-image">
                                    <strong className="rank">No.5</strong>
                                    <a href="/movies/detail-view/?midx=86751">
                                        <span className="thumb-image">
                                            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86751/86751_320.jpg" alt="메간 포스터" />
                                            {/*  <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                            <i className="cgvIcon etc age15">15</i>
                                            {/*  <!-- <span className="ico-grade 15">15</span> --> */}
                                        </span>
                                    </a>
                                    <span className="screentype">

                                    </span>
                                </div>
                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86751">
                                        <strong className="title">메간</strong>
                                    </a>

                                    <div className="score">
                                        <strong className="percent">예매율<span>4.8%</span></strong>
                                        {/*  <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg great"></span>
                                            <span className="percent">87%</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2023.01.25
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/5/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20031704&amp;MOVIE_CD_GROUP=20031704">예매</Link>
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div className="box-image">
                                    <strong className="rank">No.6</strong>
                                    <a href="/movies/detail-view/?midx=86157">
                                        <span className="thumb-image">
                                            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86157/86157_320.jpg" alt="교섭 포스터" />
                                            {/*  <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                            <i className="cgvIcon etc age12">12</i>
                                            {/* <!-- <span className="ico-grade 12">12</span> --> */}
                                        </span>
                                    </a>
                                    <span className="screentype">

                                    </span>
                                </div>
                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86157">
                                        <strong className="title">교섭</strong>
                                    </a>

                                    <div className="score">
                                        <strong className="percent">예매율<span>4.6%</span></strong>
                                        {/*   <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg good"></span>
                                            <span className="percent">81%</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2023.01.18
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/6/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20030337&amp;MOVIE_CD_GROUP=20030337">예매</Link>
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div className="box-image">
                                    <strong className="rank">No.7</strong>
                                    <a href="/movies/detail-view/?midx=86754">
                                        <span className="thumb-image">
                                            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86754/86754_320.jpg" alt="위너 2022 콘서트 더 서클 - 더 무비 포스터" />
                                            {/*  <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                                            <i className="cgvIcon etc ageAll">All</i>
                                            {/* <!-- <span className="ico-grade All">All</span> --> */}
                                        </span>
                                    </a>
                                    <span className="screentype">
                                    </span>
                                </div>
                                <div className="box-contents">
                                    <a href="/movies/detail-view/?midx=86754">
                                        <strong className="title">위너 2022 콘서트 더 서클 - 더 무비</strong>
                                    </a>
                                    <div className="score">
                                        <strong className="percent">예매율<span>1.4%</span></strong>
                                        {/*  <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)--> */}
                                        <div className="egg-gage small">
                                            <span className="egg good"></span>
                                            <span className="percent">?</span>
                                        </div>
                                    </div>

                                    <span className="txt-info">
                                        <strong>
                                            2023.01.25
                                            <span>개봉</span>

                                        </strong>
                                    </span>
                                    <span className="like">
                                        <Link to="/reservation/7/seoul" className="link-reservation" href="/ticket/?MOVIE_CD=20031711&amp;MOVIE_CD_GROUP=20031711">예매</Link>
                                    </span>
                                </div>
                            </li>

                        </ol>
                        <div className="chart-ad">
                            <div className="box-com">
                                <img src="/TP4_img/1221_160x300.jpg" width="155" height="300"  
                                
                                id="Movie_Chart" name="Movie_Chart" title="기업광고 -CGV"/>
                            </div>

                            <div className="chart_ad_desc">
                                <dl>
                                    <dt>
                                        <img src="http://img.cgv.co.kr/R2014/images/ad/ico_ad1.png" alt="ad" />
                                        <span id="ad_txt1">CGV 기프트 카드</span>
                                    </dt>
                                    <dd>
                                        <span id="ad_txt2">감사의 마음을 선물하세요! </span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="chart-ad-bottom" id="chart-ad-bottom">
                            <img src="/TP4_img/0123_980x90.jpg" width="980" height="90" title="" name="SponsorBar_980" id="SponsorBar_980"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    

}
export default MovieList;