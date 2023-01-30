import React, { createContext, useContext, useEffect, useState } from 'react';
import AddressContext from './ContextAPI';

const { kakao } = window;

const KakaoMap = () => {

  const {state, action} = useContext(AddressContext);
  var map;

  useEffect(() => {
    //Kakao Map API
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    const mapOption = {
      center: new kakao.maps.LatLng(37.4998, 127.0305), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(state.id, function (result, status) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">' + state.id + ' 위치' + '</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }

    });
  }, [state.id]);


  return (
    <div className="kakaoMap" id="map" style={{ width: '320px', height: '300px', border: "1px solid #999" }}>
    </div>
  )
}
export default KakaoMap;