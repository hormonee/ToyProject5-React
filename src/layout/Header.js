import { Fragment, useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/Main.css';


const Header = () => {

    //remove top banner
    const topBannerDiv = useRef(null);
    const deleteTopBanner = () => {
        topBannerDiv.current.style.display = 'none';
    }

    //마우스 눌렀을 때 강조
    const focusOn = (e) => {
        e.preventDefault();

        if (e.target.tagName != "A") return;

        e.target.style.border = "3px solid rgb(220, 200, 200)";
    }
    const focusOn2 = (e) => {
        e.preventDefault();

        if (e.target.tagName != "SPAN") return;

        e.target.style.border = "3px solid rgb(220, 200, 200)";
    }
    const focusOn3 = (e) => {
        e.preventDefault();

        if (e.target.tagName != "IMG") return;

        e.target.style.border = "3px solid rgb(220, 200, 200)";
    }
    //마우스 뗐을 때 강조 취소
    const focusOut = (e) => {
        e.preventDefault();

        if (e.target.tagName != "A") return;

        e.target.style.border = "none";
    }
    const focusOut2 = (e) => {
        e.preventDefault();

        if (e.target.tagName != "SPAN") return;

        e.target.style.border = "none";
    }
    const focusOut3 = (e) => {
        e.preventDefault();

        if (e.target.tagName != "IMG") return;

        e.target.style.border = "none";
    }

    //메뉴바 상단 고정 및 고정 버튼 토글
    const fixedBtn = useRef(null);
    const topMenu = useRef(null);
    var topMenuPosition = 194;
    const [isActive, setActive] = useState(false);

    function menuBarFixed() {
        topMenuPosition = topBannerDiv.current.style.display == "none" ? 114 : 194;

        if (window.scrollY > topMenuPosition) {
            setActive(true);
            fixedBtn.current.style.display = "flex";
        } else {
            setActive(false);
            fixedBtn.current.style.display = "none";
        };
    }

    useEffect(() => {
        window.addEventListener('scroll', menuBarFixed);
        return () => {
            window.removeEventListener('scroll', menuBarFixed);
        };
    }, []);

    // //메뉴바 마우스 오버 아웃
    const mainHeader = useRef(null);
    const menuTable = useRef(null);
    const menuTableOuter = useRef(null);    // 드롭 다운 함수 안에 심어보자 flex 로 말고 바로 스타일로!
    //display: flex
    const dropDownMenu = () => {
        menuTable.current.style.display = "flex";
    }
    //display: out
    const delDropDown = () => {
        menuTable.current.style.display = "none";
    }

    //메뉴바 드롭다운 상태 해제
    const delFixedMenuBar = (e) => {
        if (menuTable.current.style.display == "flex" && window.pageYOffset >= topMenuPosition) {
            if (e.clientY > 263) {
                menuTable.current.style.display = "none";
            };
        } else if(menuTable.current.style.display == "flex" && window.pageYOffset < topMenuPosition) {
            if (e.nativeEvent.offsetY > 210) {
                menuTable.current.style.display = "none";
            };
        }
    }
    const delFixedMenuBar2 = (e) => {
        if (e.nativeEvent.offsetY > 18) {
            menuTable.current.style.display = "none";
        };
    }


    return (
        <Fragment>
            <header>
                <div className="header-outer">
                    <div className="top-banner" ref={topBannerDiv}>
                        <a href="#">
                            <img src="/TP4_img/header_banner.png" alt="header_banner" />
                            <button id="btn_ad_close" onClick={deleteTopBanner}><img src="/TP4_img/btn_ad_close.png" alt="btn_ad_close" /></button>
                        </a>
                    </div>
                    <div className="main-header-outer">
                        <div className="main-header" ref={mainHeader} onMouseOver={delDropDown}>
                            <div className="main-header-contents">
                                <div className="main-header-inner main-header-inner1">
                                    <Link to="/" onMouseDown={focusOn3} onMouseUp={focusOut3}><img src="/TP4_img/logoRed.png"/></Link>
                                    <span>C U L T U R E P L E X</span>
                                </div>
                                <ul className="main-header-inner main-header-inner2">
                                    <li className="header_middle_ad">
                                        <a href="#">
                                            <img src="/TP4_img/header_middle_ad.png" />
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="/TP4_img/loginPassword.png" />
                                            <span>로그인</span>
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="/TP4_img/loginJoin.png" />
                                            <span>회원가입</span>
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="/TP4_img/loginMember.png" />
                                            <span>MY CGV</span>
                                        </a>
                                    </li>
                                    <li className="header_middle_user">
                                        <a href="#">
                                            <img src="/TP4_img/loginCustomer.png" />
                                            <span>고객센터</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={isActive ? "sticky header_bottom_outer_fixed in" : "header_bottom_outer"} id="hbo" ref={topMenu} onMouseMove={delFixedMenuBar}>
                            <div className="header_bottom_wrap in">
                                <div className="header_bottom in">
                                    <div className="menu_bar in">
                                        <ul className="gnb in" onMouseDown={focusOn} onMouseUp={focusOut}>
                                            <li className="in">
                                                <span className="in"><Link to="/movielist" onMouseOver={dropDownMenu}>영화</Link></span>
                                            </li>
                                            <li className="in">
                                                <span className="in"><a href="#" className="in" onMouseOver={dropDownMenu}>극장</a></span>
                                            </li >
                                            <li className="menu_bar_reservation in">
                                                <span className="in"><Link to="/reservation/none/seoul" onMouseOver={dropDownMenu}>예매</Link></span>
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
                                            <img src="/TP4_img/icon_search.png" style={{ width: '26px', height: '26px' }} className="in" />
                                        </div>
                                    </div>
                                </div>
                                <div className="fixedBtn" ref={fixedBtn}>
                                    <Link to="/reservation" href="#" className="reserveBtn"><span>예매하기</span></Link>
                                    <a href="#" className="gotoTopBtn">
                                        <img src="/TP4_img/gotoTopImg.png" style={{ width: '15px', height: '21px' }} />
                                    </a>
                                </div>
                            </div>
                            <div className="menuTableOuter" ref={menuTableOuter}>
                                {/* <div className={isActive ? "menuTable active" : "menuTable"} ref={menuTable}> */}
                                {/* <div className={menuTableName} ref={menuTable}> */}
                                <div className="menuTable" ref={menuTable} onMouseDown={focusOn2} onMouseUp={focusOut2}>
                                    <div className="snb in">
                                        <ul className="in">
                                            <li className="snbLi1 in">영화</li>
                                            <li className="in"><span><Link to="/movielist">무비차트</Link></span></li>
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
                                            <li className="in"><span><Link to="/reservation/none/seoul">빠른예매</Link></span></li>
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
                                            <li className="in"><span onMouseMove={delFixedMenuBar2}>씨네샵</span></li>
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
            <Outlet />
        </Fragment>
    )
}
export default Header;