import { Fragment, useRef, useState } from 'react';
import '../css/Main.css';


const Header = () => {

    //remove top banner
    const topBannerDiv = useRef(null);
    const deleteTopBanner = () => {
        topBannerDiv.current.style.display = 'none';
    }

    // //메뉴바 마우스 오버 아웃
    const mainHeader = useRef(null);
    const menuTable = useRef(null);
    const fullMenuTable = useRef(null);
    //display: flex
    const dropDownMenu = () => {
        menuTable.current.style.display = "flex";
    }
    //display: out
    const delDropDown = () => {
        menuTable.current.style.display = "none";
    }


    return (
        <Fragment>
            <header>
                <div className="header-outer">
                    <div className="top-banner" ref={topBannerDiv}>
                        <a href="#">
                            <img src="TP4_img/header_banner.png" alt="header_banner" />
                            <button id="btn_ad_close" onClick={deleteTopBanner}><img src="TP4_img/btn_ad_close.png" alt="btn_ad_close" /></button>
                        </a>
                    </div>
                    <div className="main-header-outer">
                        <div className="main-header" ref={mainHeader} onMouseOver={delDropDown}>
                            <div className="main-header-contents">
                                <div className="main-header-inner main-header-inner1">
                                    <a href="#"><img src="TP4_img/logoRed.png" /></a>
                                    <span>C U L T U R E P L E X</span>
                                </div>
                                <ul className="main-header-inner main-header-inner2">
                                    <li className="header_middle_ad">
                                        <a href="#">
                                            <img src="TP4_img/header_middle_ad.png" />
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="TP4_img/loginPassword.png" />
                                            <span>로그인</span>
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="TP4_img/loginJoin.png" />
                                            <span>회원가입</span>
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="TP4_img/loginMember.png" />
                                            <span>MY CGV</span>
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="TP4_img/loginCustomer.png" />
                                            <span>고객센터</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header_bottom_outer in" id="hbo" ref={fullMenuTable} /* onMouseOut={delDropDown} */>
                            <div className="header_bottom_wrap in">
                                <div className="header_bottom in">
                                    <div className="menu_bar in">
                                        <ul className="gnb in">
                                            <li className="in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>영화</a></span>
                                            </li>
                                            <li className="in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>극장</a></span>
                                            </li >
                                            <li className="menu_bar_reservation in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>예매</a></span>
                                            </li>
                                            <li className="in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>스토어</a></span>
                                            </li>
                                            <li className="in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>이벤트</a></span>
                                            </li>
                                            <li className="in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>혜택</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="search_bar in">
                                        <div className="search_bar_inner1 in">
                                            <input type="text" placeholder="유령" className="in" />
                                            <img src="TP4_img/icon_search.png" style={{ width: '26px', height: '26px' }} className="in" />
                                        </div>
                                    </div>
                                </div>
                                <div className="fixedBtn">
                                    <a href="#" className="reserveBtn"><span>예매하기</span></a>
                                    <a href="#" className="gotoTopBtn">
                                        <img src="TP4_img/gotoTopImg.png" style={{ width: '15px', height: '21px' }} />
                                    </a>
                                </div>
                            </div>
                            <div className="menuTableOuter">
                                {/* <div className={isActive ? "menuTable active" : "menuTable"} ref={menuTable}> */}
                                {/* <div className={menuTableName} ref={menuTable}> */}
                                <div className="menuTable" ref={menuTable}>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">영화</li>
                                            <li className="in"><span>무비차트</span></li>
                                            <li className="in"><span>아트하우스</span></li>
                                            <li className="in"><span>ICECON</span></li>
                                        </ul>
                                    </div>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">극장</li>
                                            <li className="in"><span>CGV 극장</span></li>
                                            <li className="in"><span>특별관</span></li>
                                        </ul>
                                    </div>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">예매</li>
                                            <li className="in"><span>빠른예매</span></li>
                                            <li className="in"><span>상영스케줄</span></li>
                                            <li className="in"><span>English Ticketing</span></li>
                                            <li className="in"><span>English Schedule</span></li>
                                        </ul>
                                    </div>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">스토어</li>
                                            <li className="in"><span>영화관람권</span></li>
                                            <li className="in"><span>기프트카드</span></li>
                                            <li className="in"><span>콤보</span></li>
                                            <li className="in"><span>팝콘</span></li>
                                            <li className="in"><span>음료</span></li>
                                            <li className="in"><span>스낵</span></li>
                                            <li className="in"><span>플레이존</span></li>
                                            <li className="in"><span>씨네샵</span></li>
                                        </ul>
                                    </div>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">이벤트</li>
                                            <li className="in"><span>SPECIAL</span></li>
                                            <li className="in"><span>영화/예매</span></li>
                                            <li className="in"><span>멤버십/CLUB</span></li>
                                            <li className="in"><span>CGV 극장별</span></li>
                                            <li className="in"><span>제휴할인</span></li>
                                            <li className="in"><span>당첨자 발표</span></li>
                                            <li className="in"><span>종료된 이벤트</span></li>
                                        </ul>
                                    </div>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">혜택</li>
                                            <li className="in"><span>CGV 할인정보</span></li>
                                            <li className="in"><span>CLUB 서비스</span></li>
                                            <li className="in"><span>VIP 라운지</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="video">
                <div className="video_wrap" onMouseOver={delDropDown}>
                    <div className="video_inner">
                        <video id="videoPlayer" src="TP4_img/ghostPreview.mp4" onMouseOver={delDropDown}>
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
        </Fragment>
    )
}
export default Header;