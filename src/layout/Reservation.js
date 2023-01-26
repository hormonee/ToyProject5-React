import { Fragment } from "react"
import '../css/Reservation.css';
import Header from './Header';

const Reservation = () => {

  console.log(Header);
  console.log(Header.menuTable);

  //display: out
  const delDropDown = () => {
    Header.menuTable.current.style.display = "none";
  }


  return (
    <Fragment>
      <div className="outer">
        <div className="outer-wrap">
          <div className="threeBtns" onMouseOver={delDropDown}>
            <button className="threeBtns1"><span>예매 다시하기</span></button>
            <button className="threeBtns2"><span>상영 시간표</span></button>
            <button className="threeBtns3"><span>ENGLISH</span></button>
          </div>

          <section>
            <div className="section-wrap">

              <div className="steps steps1">
                <div className="title">
                  영화
                </div>
                <div className="options options1">
                  <div className="options-wrap">
                    <div className="option1">
                      <span className="option1-span1">전체</span>
                      <span className="option1-span2">아트하우스</span>
                      <span className="option1-span3">특별관</span>
                    </div>
                    <div className="option2">
                      <span className="option2-span1">예매율순</span>
                      <span className="option2-span2">가나다순</span>
                    </div>
                    <div className="option3">
                      <ul>
                        <li><img src="TP4_img/ageALL.svg" /><span>방탄소년단:옛투컴인시네마</span></li>
                        <li><img src="TP4_img/ageLimit12.svg" /><span>아바타-물의길</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>상견니</span></li>
                        <li><img src="TP4_img/ageLimit12.svg" /><span>더퍼스트슬램덩크</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>유령</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>메간</span></li>
                        <li><img src="TP4_img/ageLimit12.svg" /><span>교섭</span></li>
                        <li><img src="TP4_img/ageAll.svg" /><span>위너2022콘서트더서클-더무비</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>천룡팔부-교봉전</span></li>
                        <li><img src="TP4_img/ageLimit12.svg" /><span>영웅</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>다나카1st내한콘서트-생중계</span></li>
                        <li><img src="TP4_img/ageLimit12.svg" /><span>오늘밤,세계에서이사랑이사라진...</span></li>
                        <li><img src="TP4_img/ageLimit18.svg" /><span>바빌론</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>뮤지컬레드북</span></li>
                        <li><img src="TP4_img/ageLimit15.svg" /><span>라인</span></li>
                        <li><img src="TP4_img/ageAll.svg" /><span>엄마의땅-그리샤와숲의주인</span></li>
                        <li><img src="TP4_img/ageLimit12.svg" /><span>열여덟,어른이되는나이</span></li>
                        <li><img src="TP4_img/ageAll.svg" /><span>장화신은고양이-끝내주는모험</span></li>
                        <li><img src="TP4_img/ageAll.svg" /><span>코코</span></li>
                        <li><img src="TP4_img/ageAll.svg" /><span>겨울왕국2</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="steps steps2">
                <div className="title">
                  극장
                </div>
                <div className="options options2">
                  <div className="options-wrap">
                    <div className="option1">
                      <span className="option1-span1">전체</span>
                      <span className="option1-span2">아트하우스</span>
                      <span className="option1-span3">특별관</span>
                    </div>
                    <div className="option2">
                      <ul className="area">
                        <li>
                          서울(31)
                          <ul className="areaDetail_abled">
                            <li>강남</li>
                            <li>강변</li>
                            <li>건대입구</li>
                            <li>구로</li>
                            <li>대학로</li>
                            <li>동대문</li>
                            <li>등촌</li>
                            <li>명동</li>
                            <li>명동역 씨네라이..</li>
                            <li>미아</li>
                            <li>방학</li>
                            <li>불광</li>
                            <li>상봉</li>
                            <li>성신여대입구</li>
                            <li>송파</li>
                            <li>수유</li>
                            <li>신촌아트레온</li>
                            <li>씨네드쉐프 압구정</li>
                            <li>씨네드쉐프 용산...</li>
                            <li>압구정</li>
                            <li>여의도</li>
                            <li>연남</li>
                            <li>영등포</li>
                            <li>왕십리</li>
                            <li>용산아이파크몰</li>
                            <li>중계</li>
                            <li>천호</li>
                            <li>청담씨네시티</li>
                            <li>피카디리1958</li>
                            <li>하계</li>
                            <li>홍대</li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          경기(55)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          인천(11)
                          <ul className="areaDetail_disabled">
                            <li>계양</li>
                            <li>부평</li>
                            <li>송도타임스페이스</li>
                            <li>연수역</li>
                            <li>인천</li>
                            <li>친천도화</li>
                            <li>인천시민공원</li>
                            <li>인천연수</li>
                            <li>인천화익</li>
                            <li>주안역</li>
                            <li>청라</li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          강원(5)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          대전/충청(24)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          대구(8)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          부산/울산(17)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          경상(16)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li style={{ fontSize: '12px' }}>
                          광주/전라/제주(24)
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="steps steps3">
                <div className="step step1">
                  <div className="title">
                    날짜
                  </div>
                  <div className="options">
                    <div className="options-wrap">
                      <div className="jan">
                        <div className="jan-year">2023</div>
                        <div className="jan-month">1</div>
                        <ul>
                          <li>
                            <span className="day">월</span>
                            <span className="date">30</span>
                          </li>
                          <li>
                            <span className="day">화</span>
                            <span className="date">31</span>
                          </li>
                        </ul>
                      </div>
                      <div className="feb">
                        <div className="feb-year">2023</div>
                        <div className="feb-month">2</div>
                        <ul className="feb-date">
                          <li>
                            <span className="day">수</span>
                            <span className="date">1</span>
                          </li>
                          <li>
                            <span className="day">목</span>
                            <span className="date">2</span>
                          </li>
                          <li>
                            <span className="day">금</span>
                            <span className="date">3</span>
                          </li>
                          <li className="saturday">
                            <span className="day saturday">토</span>
                            <span className="date">4</span>
                          </li>
                          <li className="sunday">
                            <span className="day sunday">일</span>
                            <span className="date">5</span>
                          </li>
                          <li>
                            <span className="day">월</span>
                            <span className="date">6</span>
                          </li>
                          <li>
                            <span className="day">화</span>
                            <span className="date">7</span>
                          </li>
                          <li>
                            <span className="day">수</span>
                            <span className="date">8</span>
                          </li>
                          <li>
                            <span className="day">목</span>
                            <span className="date">9</span>
                          </li>
                          <li>
                            <span className="day">금</span>
                            <span className="date">10</span>
                          </li>
                          <li className="saturday">
                            <span className="day saturday">토</span>
                            <span className="date">11</span>
                          </li>
                          <li className="sunday">
                            <span className="day sunday">일</span>
                            <span className="date">12</span>
                          </li>
                          <li>
                            <span className="day">월</span>
                            <span className="date">13</span>
                          </li>
                          <li>
                            <span className="day">화</span>
                            <span className="date">14</span>
                          </li>
                          <li>
                            <span className="day">수</span>
                            <span className="date">15</span>
                          </li>
                          <li>
                            <span className="day">목</span>
                            <span className="date">16</span>
                          </li>
                          <li>
                            <span className="day">금</span>
                            <span className="date">17</span>
                          </li>
                          <li className="saturday">
                            <span className="day saturday">토</span>
                            <span className="date">18</span>
                          </li>
                          <li className="sunday">
                            <span className="day sunday">일</span>
                            <span className="date">19</span>
                          </li>
                          <li>
                            <span className="day">월</span>
                            <span className="date">20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="steps steps4">
                <div className="step step1">
                  <div className="title">
                    시간
                  </div>
                  <div className="options">
                    <div className="options-wrap">
                      <div className="option1">
                        <div className="option1-inner">
                          <span className="morning">조조</span>
                          <span className="night">심야</span>
                        </div>
                      </div>
                      <div className="option2">
                        <p>영화, 극장, 날짜를 선택해주세요.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <article>
            <div className="article-inner">
              <div className="articleLeft">
                <span>영화 선택</span>
                <span>극장 선택</span>
                <span>좌석선택</span>
                <span className="payment">결제</span>
              </div>
              <div className="articleRight">
                <span></span>
              </div>
            </div>
          </article>

        </div>
      </div >
    </Fragment >
  )
}
export default Reservation;