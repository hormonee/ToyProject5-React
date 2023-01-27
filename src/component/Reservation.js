import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom";
import '../css/Reservation.css';

const Reservation = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const tempArea = "인천";

    axios.get("https://raw.githubusercontent.com/hormonee/ToyProjectData/master/ReservationData.json")
      .then(response => {
        setData(response.data);
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.seoul);
      });
  }, []);

  let param = useParams();
  let title = param.title;
  let area = param.area;
  let areaDetail = param.areaDetail;
  let date = param.date;
  let time = param.time;

  /*
  const [queryString, setQueryString] = useSearchParams();
  console.log(queryString);

  let area = queryString.get("area");
  let areaDetail = queryString.get("areaDetail");
  console.log(area);
  console.log(areaDetail);
  */

  const resMovieList = useRef(null);

  const selectMovie = (e) => {
    if(e.target.tagName != "SPAN") return;

    // console.log(e.target.parentElement.parentElement);
    console.log(e.target.parentElement.parentElement.parentElement);
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement.children);
    // console.log(e.target.parentElement.parentElement.parentElement);
    let arr = e.target.parentElement.parentElement.parentElement.parentElement.children;
    for(let i=0; i<arr.length; i++) {
      arr[i].style.backgroundColor = "transparent";
      arr[i].style.border = "none";
      arr[i].firstElementChild.children[1].children[0].style.color = "#666";
    }

    e.target.parentElement.parentElement.parentElement.style.backgroundColor = "#333";
    e.target.parentElement.parentElement.parentElement.style.border = "3px solid #777";
    e.target.style.color = "white";
  }




  return (
    <Fragment>
      <div className="outer">
        <div className="outer-wrap">
          <div className="threeBtns">
            <button className="threeBtns1"><span>예매 다시하기</span></button>
            <button className="threeBtns2"><span>상영 시간표</span></button>
            <button className="threeBtns3"><span>ENGLISH</span></button>
          </div>

          <section className="resSection">
            <div className="section-wrap">

              <div className="steps steps1">
                <div className="sort">
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
                      <ul ref={resMovieList} onClick={selectMovie}>
                        <div><li><img src="/TP4_img/ageALL.svg" /><Link to="/reservation/bts"><span>방탄소년단:옛투컴인시네마</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to="/reservation/avatar"><span>아바타-물의길</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/sgn"><span>상견니</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to="/reservation/tfs"><span>더퍼스트슬램덩크</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/ghost"><span>유령</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/mg"><span>메간</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to="/reservation/gs"><span>교섭</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to="/reservation/winner"><span>위너2022콘서트더서클-더무비</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/gbj"><span>천룡팔부-교봉전</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to="/reservation/hero"><span>영웅</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/danaka"><span>다나카1st내한콘서트-생중계</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to="/reservation/tonight"><span>오늘밤,세계에서이사랑이사라진...</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit18.svg" /><Link to="/reservation/babylon"><span>바빌론</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/redbook"><span>뮤지컬레드북</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to="/reservation/line"><span>라인</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to="/reservation/grisha"><span>엄마의땅-그리샤와숲의주인</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to="/reservation/eighteen"><span>열여덟,어른이되는나이</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to="/reservation/rainbootscat"><span>장화신은고양이-끝내주는모험</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to="/reservation/coco"><span>코코</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to="/reservation/frozen"><span>겨울왕국2</span></Link></li></div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="steps steps2">
                <div className="sort">
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
                          <Link to="/reservation?area=서울">서울(31)</Link>
                          <ul className="areaDetail_abled">
                            <li><Link to="/reservation?area=seoul&areaDetail=gangnam">강남</Link></li>
                            <li><Link to="">강변</Link></li>
                            <li><Link to="">건대입구</Link></li>
                            <li><Link to="">구로</Link></li>
                            <li><Link to="">대학로</Link></li>
                            <li><Link to="">동대문</Link></li>
                            <li><Link to="">등촌</Link></li>
                            <li><Link to="">명동</Link></li>
                            <li><Link to="">명동역 씨네라이..</Link></li>
                            <li><Link to="">미아</Link></li>
                            <li><Link to="">방학</Link></li>
                            <li><Link to="">불광</Link></li>
                            <li><Link to="">상봉</Link></li>
                            <li><Link to="">성신여대입구</Link></li>
                            <li><Link to="">송파</Link></li>
                            <li><Link to="">수유</Link></li>
                            <li><Link to="">신촌아트레온</Link></li>
                            <li><Link to="">씨네드쉐프 압구정</Link></li>
                            <li><Link to="">씨네드쉐프 용산...</Link></li>
                            <li><Link to="">압구정</Link></li>
                            <li><Link to="">여의도</Link></li>
                            <li><Link to="">연남</Link></li>
                            <li><Link to="">영등포</Link></li>
                            <li><Link to="">왕십리</Link></li>
                            <li><Link to="">용산아이파크몰</Link></li>
                            <li><Link to="">중계</Link></li>
                            <li><Link to="">천호</Link></li>
                            <li><Link to="">청담씨네시티</Link></li>
                            <li><Link to="">피카디리1958</Link></li>
                            <li><Link to="">하계</Link></li>
                            <li><Link to="">홍대</Link></li>
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
                  <div className="sort">
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
                  <div className="sort">
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

            <div className="selection-outer">
              <div className="selection-inner">
                <div className="selectionLeft">
                  <span>영화 선택</span>
                  <span>극장 선택</span>
                  <span>좌석선택</span>
                  <span className="payment">결제</span>
                </div>
                <div className="selectionRight">
                  <span></span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div >
    </Fragment >
  )
}
export default Reservation;