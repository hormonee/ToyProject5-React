import { Fragment } from 'react';
import Header from './layout/Header';
import Section from './layout/Section';
import Article from './layout/Article';
import { Route, Routes } from 'react-router-dom';
import Reservation from './component/Reservation';
import Video from './layout/Video';
import MovieList from './component/MovieList';
import MovieDetail from './component/MovieDetail';
import MovieDetailInfo from './component/MovieDetailInfo';
import MovieDetailTrailor from './component/MovieDetailTrailor';
import AddressContext from './component/ContextAPI';
import { AddressProvider } from './component/ContextAPI';
import KakaoMap from './component/KakaoMap';

function App() {

  // //쿠키 이름, 쿠키 값 조회
  // var cookieArr = document.cookie.split("; ");

  // var cnt = 0;
  // for (let i in cookieArr) {
  //   if (cookieArr[i].split("=")[0] == "cjmPopupPage") {
  //     cnt++;
  //   }
  // }
  // if (cnt == 0) {
  //   window.open("cjmPopup.html", "cjmPopupPage", "width=360px, height=325px");
  // }


  return (
    <Fragment>
      <AddressProvider>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/' element={<Video />}>
              <Route path='/' element={<Section />}>
                <Route path='/' element={<Article />} />
              </Route>
            </Route>
            <Route path='/movielist' element={<MovieList />}>

            </Route>
            <Route path='/moviedetail' element={<MovieDetail />}>
              <Route path='/moviedetail/1' element={<MovieDetailInfo />} />
              <Route path='/moviedetail/2' element={<MovieDetailTrailor />} />
            </Route>

            <Route path='/reservation' element={<Reservation />} />
            <Route path='/reservation/:title' element={<Reservation />} />
            <Route path='/reservation/:title/:area' element={<Reservation />} />
            <Route path='/reservation/:title/:area/:areaDetail' element={<Reservation />} />
            <Route path='/reservation/:title/:area/:areaDetail/:date' element={<Reservation />} />
            <Route path='/reservation/:title/:area/:areaDetail/:date/:time' element={<Reservation />} />
            
          </Route>
        </Routes>
      </AddressProvider>
    </Fragment>
  );
}
export default App;
