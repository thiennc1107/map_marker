import L from 'leaflet'
import { } from 'leaflet'
import { PosDTO } from './store';
import { db } from './firebase';

let map = L.map('map').setView([10.851734, 106.773175], 40);

    /*==============================================
                TILE LAYER and WMS
    ================================================*/
    //osm layer
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// google street
let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);

let myIcon = L.icon({
    iconUrl: 'public/text.png',
    iconSize: [40, 40],
    iconAnchor: [22, 94],
});


let singleMarker = L.marker([10.851734, 106.773175], {icon: myIcon}).addTo(map);

let pos = map.getCenter()

let mapHandler = () => {
  pos = map.getCenter()
  singleMarker.setLatLng(pos)
}

map.on("drag", mapHandler)

map.on("zoom", mapHandler)


let posList: PosDTO[] = []

let coordinateList = document.querySelector<HTMLOListElement>("#saved-list");

let saveCoordinateButton = document.querySelector<HTMLButtonElement>("#save-coordinate")

if (saveCoordinateButton != undefined) {
  saveCoordinateButton.onclick = () => {
    let coordinateItem = document.createElement('li');
    coordinateItem.appendChild(document.createTextNode(`Lattitude: ${pos.lat}, Longtitude: ${pos.lng}`));
    coordinateList?.appendChild(coordinateItem)
    posList.push(PosDTO.toDTO(pos))
    console.table(posList);
  }
}

let savePathButton = document.querySelector<HTMLButtonElement>("#save-path")

if (savePathButton != undefined) {

  savePathButton.onclick = () => {
    PosDTO.saveCoordinate('test', posList, db)
    if (coordinateList != undefined) {
      coordinateList.innerHTML = "";
      posList = [];
      console.table(posList);
    }
  }
}

let resetPathButton = document.querySelector<HTMLButtonElement>("#reset-path")

if (resetPathButton != undefined) {
  resetPathButton.onclick = () => {
    if (coordinateList != undefined) {
      coordinateList.innerHTML = "";
      posList = [];
      console.table(posList);
    }
  }
}
