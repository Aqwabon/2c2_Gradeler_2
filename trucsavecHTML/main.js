import './style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});



// <!--Ajouter le GeoJson-->
// var vectorLayer = new ol.layer.Vector({
//     source: new ol.source.GeoJSON({
//       url: "C:\Users\elang1\Desktop\2c2_geoweb\gradeler\geonum_docker\pays.geojson"
//     })
//   });
  
//   // Add Vector layer to map
//   map.addLayer(vectorLayer);
  

// <!--Ajouter le fond de carte-->
// var stamen = new ol.layer.Tile({
//     source: new ol.source.Stamen({
//       layer: 'watercolor'
//     })
//   }); 


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Ma carte</title>
//   </head>
//   <body>
//     <div id="map"></div>
//     <script type="module" src="C:\Users\elang1\Desktop\2c2_geoweb\gradeler\geonum_docker\trucsavecHTML\main.js"></script>
//   </body>
// </html>




// <!DOCTYPE html>
// <html lang="fr">
// <head>
// <meta charset="UTF-8" />
// <title>Carte OpenLayers Globale</title>
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@latest/ol.css" />
// <style>
// body { margin: 0; padding: 0; font-family: sans-serif; }
// #map { width: 100vw; height: 100vh; }
// .map-title {
// position: absolute;
// top: 15px;
// left: 50%;
// transform: translateX(-50%);
// background: rgba(255, 255, 255, 0.8);
// padding: 8px 16px;
// border-radius: 10px;
// font-size: 20px;
// font-weight: bold;
// z-index: 1000;
// }
// </style>
// </head>
// <body>
// <div class="map-title">Carte OpenLayers</div>
// <div id="map"></div>


// <script src="https://cdn.jsdelivr.net/npm/ol@latest/dist/ol.js"></script>
// <script>
// // Fond de carte Stamen Toner
// const stamenLayer = new ol.layer.Tile({
// source: new ol.source.Stamen({ layer: 'toner' })
// });


// // Couche GeoJSON
// const countriesLayer = new ol.layer.Vector({
// source: new ol.source.Vector({
// url: 'C:\Users\elang1\Desktop\2c2_geoweb\gradeler\geonum_docker\pays.geojson',
// format: new ol.format.GeoJSON()
// }),
// style: new ol.style.Style({
// fill: new ol.style.Fill({ color: 'rgba(0, 123, 255, 0.3)' }),
// stroke: new ol.style.Stroke({ color: '#0056b3', width: 1 })
// })
// });


// // Initialisation de la carte
// const map = new ol.Map({
// target: 'map',
// layers: [stamenLayer, countriesLayer],
// view: new ol.View({
// center: ol.proj.fromLonLat([0, 20]),
// zoom: 2
// })
// });
// </script>
// </body>
// </html>