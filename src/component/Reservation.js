import axios from "axios";
import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { Calendar } from "react-calendar";
import { Link, NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
import '../css/Reservation.css';
import KakaoMap from './KakaoMap';
import AddressContext from "./ContextAPI";
import { AddressProvider } from "./ContextAPI";
const { kakao } = window;

const Reservation = () => {

  //URL Parameter Data
  let param = useParams();
  let titleData = param.title ? param.title : "none";
  let areaData = param.area ? param.area : "seoul";
  let areaDetailData = param.areaDetail ? param.areaDetail : "none";
  let dateData = param.date ? param.date : "none";
  let timeData = param.time ? param.time : "none";

  let urlData = "/reservation/" + titleData + "/" + areaData + "/" + areaDetailData + "/" + dateData;

  const resMovieList = useRef(null);
  const timeSelectRequest = useRef(null);
  const mapContainer = useRef(null);

  let nav = useNavigate(null);

  //AddressContext
  const {state, action} = useContext(AddressContext);

  //지역 데이터
  const [areaDetail, setAreaDetail] = useState('서울');
  const [areaDetail2, setAreaDetail2] = useState(null);
  const [areaDetailList, setAreaDetailList] = useState([]);

  //주소 데이터
  const [address, setAddress] = useState('서울 강남구 강남대로 438 스타플렉스');

  //날짜 데이터
  const [selectedDate, setSelectedDate] = useState(null);

  //상영 시간 데이터 리스트
  const [playTimeList, setPlayTimeList] = useState([]);
  const [activePlayTimeList, setactivePlayTimeList] = useState("");

  //상세 지역 선택 시 스타일 적용
  const selectAreaDetail = (e) => {
    if (e.target.tagName != "A") return;

    const selectedArea = e.target.innerHTML;

    let arr = e.target.parentElement.parentElement.parentElement.children;

    for (let i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "transparent";
      arr[i].style.border = "none";
      arr[i].firstElementChild.firstElementChild.style.color = "black";
    }

    e.target.parentElement.parentElement.style.backgroundColor = "#333";
    e.target.parentElement.parentElement.style.border = "2px solid #777";
    e.target.style.color = "white";

    setAreaDetail2(selectedArea);
    
    action.setAddress({
      id: data.coordinate[areaData][selectedArea]
    });
  }

  //상세지역 화면 구성
  const activeAreaDetailList = areaDetailList.map((v, i, arr) =>
    <div key={v + i}><li><Link to={"/reservation/" + titleData + "/" + areaData + "/" + v}>{v}</Link></li></div>
  );

  //1차 지역 정보
  const areaList = ["서울", "경기", "인천", "강원", "대전/충청", "대구", "부산/울산", "경상", "광주/전라/제주"];
  const areaList2 = ["seoul", "gyeonggi", "incheon", "gangwon", "daejeon-choongcheong", "daegu", "busan-ulsan", "gyeongsang", "gwangju-jeonla-jeju"];

  //json 데이터 불러오기
  const [data, setData] = useState(null);

  //페이지 최초 렌더링 시 실행 및 areaDetail 바뀔 때 마다 실행
  useEffect(() => {
    (async () => {

      let url = "https://raw.githubusercontent.com/hormonee/ToyProjectData/master/ReservationData.json";

      let jsonData = await axios.get(url);
      setData(jsonData.data); //전체 데이터
      setLoading(true);

      await axios.get(url)
        .then(response => response.data)
        .then(data => {
          // 영화 클릭 정보 존재 시 스타일 적용
          const arr = resMovieList.current.children;

          for (let i = 0; i < arr.length; i++) {
            let movieName = arr[i].firstElementChild.children[1].children[0].innerHTML;

            if (movieName == data.title[titleData]) {
              arr[i].style.backgroundColor = "#333";
              arr[i].style.border = "3px solid #777";
              arr[i].firstElementChild.children[1].children[0].style.color = "white";
            }
          }
        });

      await axios.get(url)
        .then(response => response.data.area)
        .then(area => {
          //상세지역 리스트 구성
          const areaList = area[areaDetail];
          setAreaDetailList(areaList);
        });

    })();
  }, [areaDetail]);

  const [loading, setLoading] = useState(false);
  if (loading === false) {
    return <div style={{ display: "flex", justifyContent: 'center', height: '300px', lineHeight: '300px', fontSize: '20px' }}>Loading...</div>;
  }

  //영화 선택 시 스타일 적용
  const selectMovie = (e) => {
    if (e.target.tagName != "SPAN") return;

    let arr = e.target.parentElement.parentElement.parentElement.parentElement.children;
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "transparent";
      arr[i].style.border = "none";
      arr[i].firstElementChild.children[1].children[0].style.color = "#666";
    }

    e.target.parentElement.parentElement.parentElement.style.backgroundColor = "#333";
    e.target.parentElement.parentElement.parentElement.style.border = "3px solid #777";
    e.target.style.color = "white";
  }

  //지역 선택 시 스타일 및 상세 지역 목록 변경
  const changeAreaDetail = (e) => {
    const arr = e.target.parentElement.parentElement.parentElement.children;

    for (let i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "rgb(231, 231, 222)";
      arr[i].firstElementChild.firstElementChild.style.fontWeight = "500";
      arr[i].firstElementChild.children[1].style.display = "none";
    }

    e.target.nextElementSibling.style.display = 'block';
    e.target.parentElement.parentElement.style.backgroundColor = 'transparent';
    e.target.style.fontWeight = '800';

    //지역 디테일 값 변경
    setAreaDetail(e.target.innerHTML);
  }

  //날짜 선택 시 스타일 변경 및 상영 시간 정보 리스트화
  const selectDate = (e) => {
    if (e.target.tagName != "SPAN") return;

    //시간 옵션 선택 요구 문구 삭제
    timeSelectRequest.current.style.display = "none";

    //날짜 영역 스타일 변경
    const targetYear = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    const targetMonth = e.target.parentElement.parentElement.previousElementSibling.innerHTML;
    const targetDate = e.target.parentElement.children[1].innerHTML;
    const targetDay = e.target.parentElement.children[0].innerHTML;

    const arr = e.target.parentElement.parentElement.parentElement.parentElement.children;
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[i].children[2].children;

      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j].children[0].innerHTML == "토") {
          arr2[j].children[0].style.color = "rgb(62, 114, 235)";
          arr2[j].children[1].style.color = "rgb(62, 114, 235)";
        } else if (arr2[j].children[0].innerHTML == "일") {
          arr2[j].children[0].style.color = "rgb(160, 43, 0)";
          arr2[j].children[1].style.color = "rgb(160, 43, 0)";
        } else {
          arr2[j].children[0].style.color = "#777";
          arr2[j].children[1].style.color = "#666";
        }
        arr2[j].style.backgroundColor = "transparent";
        arr2[j].style.border = "none";
      }
    }

    e.target.parentElement.children[0].style.color = "white";
    e.target.parentElement.children[1].style.color = "white";
    e.target.parentElement.style.backgroundColor = "#333";
    e.target.parentElement.style.border = "2px solid #999";

    setSelectedDate({ year: targetYear, month: targetMonth, date: targetDate, day: targetDay });  //날짜 저장
    setPlayTimeList(data["playTime"][data.title[titleData]][areaData][areaDetailData][targetYear][targetMonth][targetDate]);  //상영 시간 저장

    nav("/reservation/" + titleData + "/" + areaData + "/" + areaDetailData + "/" + targetYear + "-" + targetMonth + "-" + targetDate);
  }

  // //kakao map API
  // useEffect(() => {

  //   const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
  //   const mapOption = {
  //     center: new kakao.maps.LatLng(37.4998, 127.0305), // 지도의 중심좌표
  //     level: 3 // 지도의 확대 레벨
  //   };

  //   // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  //   const map = new kakao.maps.Map(mapContainer, mapOption);

  //   // 주소-좌표 변환 객체를 생성합니다
  //   const geocoder = new kakao.maps.services.Geocoder();

  //   // 주소로 좌표를 검색합니다
  //   geocoder.addressSearch(address, function (result, status) {
  //     // 정상적으로 검색이 완료됐으면 
  //     if (status === kakao.maps.services.Status.OK) {

  //       var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

  //       // 결과값으로 받은 위치를 마커로 표시합니다
  //       var marker = new kakao.maps.Marker({
  //         map: map,
  //         position: coords
  //       });

  //       // 인포윈도우로 장소에 대한 설명을 표시합니다
  //       var infowindow = new kakao.maps.InfoWindow({
  //         content: '<div style="width:150px;text-align:center;padding:6px 0;">' + address + '위치' + '</div>'
  //       });
  //       infowindow.open(map, marker);

  //       // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
  //       map.setCenter(coords);
  //     }
  //   });

  // }, [address]);


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
                      <span className="option2-span3">▴</span>
                    </div>
                    <div className="option3">
                      <ul ref={resMovieList} onClick={selectMovie}>
                        <div><li><img src="/TP4_img/ageALL.svg" /><Link to="/reservation/0/seoul"><span>방탄소년단:옛투컴인시네마</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to={"/reservation/1/seoul/" + areaDetailData + "/" + dateData}><span>아바타-물의길</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/2/seoul/" + areaDetailData + "/" + dateData}><span>상견니</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to={"/reservation/3/seoul/" + areaDetailData + "/" + dateData}><span>더퍼스트슬램덩크</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/4/seoul/" + areaDetailData + "/" + dateData}><span>유령</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/5/seoul/" + areaDetailData + "/" + dateData}><span>메간</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to={"/reservation/6/seoul/" + areaDetailData + "/" + dateData}><span>교섭</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to={"/reservation/7/seoul/" + areaDetailData + "/" + dateData}><span>위너2022콘서트더서클-더무비</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/8/seoul/" + areaDetailData + "/" + dateData}><span>천룡팔부-교봉전</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to={"/reservation/9/seoul/" + areaDetailData + "/" + dateData}><span>영웅</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/10/seoul/" + areaDetailData + "/" + dateData}><span>다나카1st내한콘서트-생중계</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to={"/reservation/11/seoul/" + areaDetailData + "/" + dateData}><span>오늘밤,세계에서이사랑이사라진...</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit18.svg" /><Link to={"/reservation/12/seoul/" + areaDetailData + "/" + dateData}><span>바빌론</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/13/seoul/" + areaDetailData + "/" + dateData}><span>뮤지컬레드북</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit15.svg" /><Link to={"/reservation/14/seoul/" + areaDetailData + "/" + dateData}><span>라인</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to={"/reservation/15/seoul/" + areaDetailData + "/" + dateData}><span>엄마의땅-그리샤와숲의주인</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageLimit12.svg" /><Link to={"/reservation/16/seoul/" + areaDetailData + "/" + dateData}><span>열여덟,어른이되는나이</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to={"/reservation/17/seoul/" + areaDetailData + "/" + dateData}><span>장화신은고양이-끝내주는모험</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to={"/reservation/18/seoul/" + areaDetailData + "/" + dateData}><span>코코</span></Link></li></div>
                        <div><li><img src="/TP4_img/ageAll.svg" /><Link to={"/reservation/19/seoul/" + areaDetailData + "/" + dateData}><span>겨울왕국2</span></Link></li></div>
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
                      {/* {
                        areaList.map((v, i, arr) =>
                          <ul className="area">
                            <li>
                              <Link to={"/reservation/" + titleData + "/" + areaList2[i]}>{v}</Link>
                              <ul className="areaDetail_abled">
                                {
                                  data.area.v.map((v2) => {
                                    <li><Link to={"/reservation/" + titleData + "/" + areaList2[i] + "/" + v2}>test-{v2}</Link></li>
                                  })
                                }
                              </ul>
                            </li>
                          </ul>
                        )
                      } */}
                      <ul className="area area1">
                        <li className="area-li1">
                          <Link to={"/reservation/" + titleData + "/seoul"} onClick={changeAreaDetail} /* style={ ({isActive}) => (isActive ? styleArea : null) } */ >서울</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_abled" onClick={selectAreaDetail}>
                            {data && activeAreaDetailList}
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/gyeongi"} onClick={changeAreaDetail}>경기</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/incheon"} onClick={changeAreaDetail}>인천</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/incheon"} onClick={changeAreaDetail}>강원</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/daejeon-choongcheong"} onClick={changeAreaDetail}>대전/충청</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/daegu"} onClick={changeAreaDetail}>대구</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/busan-ulsan"} onClick={changeAreaDetail}>부산/울산</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li>
                          <Link to={"/reservation/" + titleData + "/gyeongsang"} onClick={changeAreaDetail}>경상</Link>
                          <span>▶︎</span>
                          <ul className="areaDetail_disabled">
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="area">
                        <li /* style={{ fontSize: '12px' }} */>
                          <Link to={"/reservation/" + titleData + "/gwangju-jeonla-jeju"} onClick={changeAreaDetail}>광주/전라/제주</Link>
                          <span>▶︎</span>
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
                        <ul className="jan-date" onClick={selectDate}>
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
                        <ul className="feb-date" onClick={selectDate}>
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
                      <div className="option2" ref={timeSelectRequest}>
                        <p>영화, 극장, 날짜를 선택해주세요.</p>
                      </div>
                      <div className="option3">
                        <div className="option3-inner">
                          {/* 데이터를 통한 상영 시간 맵핑 */}
                          {data &&
                            playTimeList.map((v, i, arr) =>
                              <div className="theaterInfo" key={"theaterInfo" + v + i} style={v[1].length == 0 ? { display: "none" } : null}>
                                <div className="theaterInfo-wrap" key={"theaterInfo-wrap" + v + i} style={v[1].length == 0 ? { display: "none" } : null}>
                                  <span className="theaterName" key={"theaterName" + v + i}>{v[0][0]}</span>
                                  <span className="theaterFloor" key={"theaterFloor" + v + i}>{v[0][1]}</span>
                                  <span className="theaterTotalSeat" key={"theaterTotalSeat" + v + i}>{v[0][2]}</span>
                                </div>
                                <ul className="movieTimeInfo" key={"movieTimeInfo" + v + i}>
                                  {
                                    v[1].map((v2, i2, arr2) =>
                                      <li key={"movieTimInfo-li" + v2 + i2} style={v2.length == 0 ? { display: "none" } : null}>
                                        <Link to="">
                                          <span className="movieStartTime" key={"movieStartTime" + v2 + i2}>{v2[0]}</span>
                                          <span className="seatAvailableNum" key={"seatAvailableNum" + v2 + i2}>{v2[1]}{v2[1] == "-" ? null : "석"}</span>
                                        </Link>
                                      </li>
                                    )
                                  }
                                </ul>
                              </div>
                            )
                          }
                        </div>
                      </div>
                      <KakaoMap />

                      {/* <div className="kakaoMap" ref={mapContainer} id="map" style={{ width: '320px', height: '300px', border: "1px solid #999" }}>

                      </div> */}

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

            <div className="resBottomBanner">
              <img src="https://adimg.cgv.co.kr/images/202301/Search2/996x140.jpg" />
            </div>
          </section>

        </div>
      </div >
    </Fragment >
  )
}
export default Reservation;