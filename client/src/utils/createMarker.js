/**  
 마커 생성 함수
 @locObj 마커가 생성될 로케이션 정보를 담은 객체
 @map 생성된 카카오맵 인스턴스
 @markerImage 마커로 표시될 마커 이미지
 @kakao 카카오맵 인스턴스
 @returns {object} 생성된 마커
*/

const createMarker = (locObj, map, markerImage, kakao) => {
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(locObj.latitude, locObj.longitude),
    clickable: true,
    image: markerImage,
  });
  // 지도에 마커 추가
  marker.setMap(map);
  // 클릭시 커스텀 오버레이 생성
  const popupWindow = new kakao.maps.CustomOverlay({
    position: marker.getPosition(),
  });
  // 마커 팝업 마크업 생성 및 이벤트 핸들러 할당
  const markerClickPopup = document.createElement("div");
  markerClickPopup.setAttribute("class", "marker_container");
  const markerBox = document.createElement("div");
  markerBox.setAttribute("class", "marker_box");
  markerBox.onclick = function () {
    window.location.assign(`./tickets/${locObj.id}`);
  };
  const imgElement = document.createElement("img");
  Object.assign(imgElement, {
    width: 80,
    className: "poster",
    src: locObj.img,
  });
  const titleElement = document.createElement("p");
  titleElement.setAttribute("class", "marker_title");
  titleElement.textContent = locObj.title;
  const artistElement = document.createElement("p");
  artistElement.setAttribute("class", "marker_artist");
  artistElement.textContent = locObj.nickname;
  const addressElement = document.createElement("p");
  addressElement.setAttribute("class", "marker_address");
  addressElement.textContent = locObj.address;
  const showAtElement = document.createElement("p");
  showAtElement.setAttribute("class", "marker_date");
  showAtElement.textContent = locObj.showAt;
  const expiredAtElement = document.createElement("p");
  expiredAtElement.setAttribute("class", "marker_date");
  expiredAtElement.textContent = locObj.expiredAt;
  const closeButtonElement = document.createElement("div");
  closeButtonElement.setAttribute("class", "close");
  closeButtonElement.textContent = "닫기";
  closeButtonElement.onclick = function (e) {
    e.stopPropagation();
    popupWindow.setMap(null);
  };
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("class", "triangle");
  svgElement.setAttribute("viewBox", "0 0 300 512");
  const trianglePathElem = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  trianglePathElem.setAttribute("class", "triangle_path");
  trianglePathElem.setAttributeNS(
    null,
    "d",
    "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
  );
  svgElement.appendChild(trianglePathElem);
  markerBox.append(
    imgElement,
    titleElement,
    artistElement,
    addressElement,
    showAtElement,
    expiredAtElement,
    closeButtonElement,
    svgElement
  );
  markerClickPopup.appendChild(markerBox);
  popupWindow.setContent(markerClickPopup);

  // 마커 호버 마크업
  const markerHoverPopup = `
    <div class="hover_container">
    <p class="hover_title">${locObj.title}</p>
    <p class="hover_date">${locObj.address}</p>
    </div>`;
  const hoverWindow = new kakao.maps.CustomOverlay({
    content: markerHoverPopup,
    position: marker.getPosition(),
  });
  // 카카오 맵 이벤트 리스너
  kakao.maps.event.addListener(
    marker,
    "click",
    (() => {
      return function () {
        popupWindow.setMap(map);
        const moveLocation = new kakao.maps.LatLng(
          locObj.latitude,
          locObj.longitude
        );
        map.setLevel(4, { anchor: moveLocation });
        map.setCenter(moveLocation);
      };
    })(locObj)
  );
  kakao.maps.event.addListener(marker, "mouseover", function () {
    hoverWindow.setMap(map);
  });
  kakao.maps.event.addListener(marker, "mouseout", function () {
    hoverWindow.setMap(null);
  });
  kakao.maps.event.addListener(marker, "zoom_changed", function () {
    hoverWindow.setMap(null);
  });

  return [marker, hoverWindow];
};

export default createMarker;
