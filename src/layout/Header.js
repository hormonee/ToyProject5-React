import '../css/Main.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="header-outer">
                    <div className="top-banner">
                        <a href="#">
                            <img src="TP4_img/header_banner.png" alt="header_banner"/>
                            <button id="btn_ad_close"><img src="TP4_img/btn_ad_close.png" alt="btn_ad_close"/></button>
                        </a>
                    </div>
                    <div className="main-header">
                        <div className="main-header-contents">
                            <div className="main-header-inner main-header-inner1">
                                <a href="#"><img src="TP4_img/logoRed.png"/></a>
                                <span>C U L T U R E P L E X</span>
                            </div>
                            <ul className="main-header-inner main-header-inner2">
                                <li className="header_middle_ad">
                                    <a href="#">
                                        <img src="TP4_img/header_middle_ad.png"/>
                                    </a>
                                </li>
                                <li className="header_middle_user">
                                    <a href="#">
                                         <img src="TP4_img/loginPassword.png"/>
                                        <span>로그인</span>
                                    </a>
                                </li>
                                <li className="header_middle_user">
                                    <a href="#">
                                         <img src="TP4_img/loginJoin.png"/>
                                        <span>회원가입</span>
                                    </a>
                                </li>
                                <li className="header_middle_user">
                                    <a href="#">
                                        <img src="TP4_img/loginMember.png"/>
                                        <span>MY CGV</span>
                                    </a>
                                </li>
                                <li className="header_middle_user">
                                    <a href="#">
                                         <img src="TP4_img/loginCustomer.png"/>
                                        <span>고객센터</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header_bottom_outer in" id="hbo">
                        <div className="header_bottom_wrap in">
                            <div className="header_bottom in">
                                <div className="menu_bar in">
                                    <ul className="gnb in">
                                        <li className="in">
                                            <span className="in"><a href="#" className="in">영화</a></span>
                                        </li>
                                        <li className="in">
                                            <span className="in"><a href="#" className="in">극장</a></span>
                                        </li >
                                        <li className="menu_bar_reservation in">
                                            <span className="in"><a href="#" className="in">예매</a></span>
                                        </li>
                                        <li className="in">
                                            <span className="in"><a href="#" className="in">스토어</a></span>
                                        </li>
                                        <li className="in">
                                            <span className="in"><a href="#" className="in">이벤트</a></span>
                                        </li>
                                        <li className="in">
                                            <span className="in"><a href="#" className="in">혜택</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="search_bar in">
                                    <div className="search_bar_inner1 in">
                                        <input type="text" placeholder="유령" className="in" />
                                          <img src="TP4_img/icon_search.png" style={{width: '26px', height: '26px'}} className="in"/>
                                    </div>
                                </div>
                            </div>
                            <div className="fixedBtn">
                                <a href="#" className="reserveBtn"><span>예매하기</span></a>
                                <a href="#" className="gotoTopBtn">
                                     <img src="TP4_img/gotoTopImg.png" style={{width:'15px', height:'21px'}}/>
                                </a>
                            </div>
                        </div>
                        <div className="menuTableOuter">
                            <div className="menuTable in">
                                <div className="snb in">
                                    <ul className="in">
                                        <li className="snbLi1 in">영화</li>
                                        <li className="in">무비차트</li>
                                        <li className="in">아트하우스</li>
                                        <li className="in">ICECON</li>
                                    </ul>
                                </div>
                                <div className="snb in">
                                    <ul className="in">
                                        <li className="snbLi1 in">극장</li>
                                        <li className="in">CGV 극장</li>
                                        <li className="in">특별관</li>
                                    </ul>
                                </div>
                                <div className="snb in">
                                    <ul className="in">
                                        <li className="snbLi1 in">예매</li>
                                        <li className="in">빠른예매</li>
                                        <li className="in">상영스케줄</li>
                                        <li className="in">English Ticketing</li>
                                        <li className="in">English Schedule</li>
                                    </ul>
                                </div>
                                <div className="snb in">
                                    <ul className="in">
                                        <li className="snbLi1 in">스토어</li>
                                        <li className="in">영화관람권</li>
                                        <li className="in">기프트카드</li>
                                        <li className="in">콤보</li>
                                        <li className="in">팝콘</li>
                                        <li className="in">음료</li>
                                        <li className="in">스낵</li>
                                        <li className="in">플레이존</li>
                                        <li className="in">씨네샵</li>
                                    </ul>
                                </div>
                                <div className="snb in">
                                    <ul className="in">
                                        <li className="snbLi1 in">이벤트</li>
                                        <li className="in">SPECIAL</li>
                                        <li className="in">영화/예매</li>
                                        <li className="in">멤버십/CLUB</li>
                                        <li className="in">CGV 극장별</li>
                                        <li className="in">제휴할인</li>
                                        <li className="in">당첨자 발표</li>
                                        <li className="in">종료된 이벤트</li>
                                    </ul>
                                </div>
                                <div className="snb in">
                                    <ul className="in">
                                        <li className="snbLi1 in">혜택</li>
                                        <li className="in">CGV 할인정보</li>
                                        <li className="in">CLUB 서비스</li>
                                        <li className="in">VIP 라운지</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header