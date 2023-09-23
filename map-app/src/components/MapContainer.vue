<template>
    <div class="map-container">
        <div id="map" class="map"></div>
        <div id="info">&nbsp;</div>
    </div>
    <div class="legend">
      <div class="bar">
        <span class="middle-line"></span>
      </div>
      <div class="numbers">
        <p>0%</p>
        <p>25%</p>
        <p>50%</p>
        <p>75%</p>
        <p>100%</p>
      </div>
    </div>

    <CountryInfo v-if="showCountryInfo" :countryName="this.countryName" />

</template>
  
  <style>
    @font-face {
    font-family: 'Nunito-Regular';
    font-weight: 400;
    src: local('Nunito-Regular'), url(../fonts/Nunito-Regular.ttf) format('truetype');
    }

  .map-container {
    position: relative;
    height: 100vh;
}

.map {
    width: 100%;
    height: 100vh;
  }
  
  .legend {
    width: 100%;
    height: 25px;
    position: absolute;
    z-index: 99;
    bottom: 10px;
    left: 10px;

    display: flex;   
    flex-direction: column;
    justify-content: center; 
    align-items: center;
  }
  
  .bar {
    width: 50%;
    height: 25%;
    min-height: 10px;
    background-image: linear-gradient(to right, #FF7A00, #02FFFF);
    position: relative;
    border-radius: 75px;
    opacity: 0.75;
  }

    .bar::before,
    .bar::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 2px;
        background-color: #1a2b39;
    }

    .bar::before {
        left: 25%; /* first line */
    }

    .middle-line {
        content: "";
        position: absolute;
        height: 100%;
        width: 2px;
        background-color: #1a2b39; 
        left:50%;
    }

    .bar::after {
        left: 75%; /* third line */
    }

    .numbers {
        width: 50%;
        color: white;
        font-family: "Nunito-Regular";
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

  </style>

<script>
import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import CountryInfo from './CountryInfo.vue';

let countryName = "";

export default {
    name: 'MapContainer',
    components: {CountryInfo},
    props: {},
    data() {
        return {
            showCountryInfo: false,
            countryName: "",
        }
    },
    mounted() {

        const vectorLayer = new VectorLayer({
            background: 'transparent',
            source: new VectorSource({
                // url: "/data/countries.geojson",
                url: "https://services7.arcgis.com/IyvyFk20mB7Wpc95/arcgis/rest/services/Sustainable_Development_Report_2023_(with_indicators)_/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
                format: new GeoJSON(),
            }),
            style: {
                'fill-color': ['string', ['get', 'COLOR'], '#eee'],
            },
        });
        console.log(vectorLayer)
        const map = new Map({
            layers: [vectorLayer],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 1,
            })
        });
        const featureOverlay = new VectorLayer({
            source: new VectorSource(),
            map: map,
            style: {
                'stroke-color': 'rgba(112, 151, 117, 0.7)',
                'fill-color': 'rgba(112, 151, 117, 0.7)',
                'stroke-width': 2,
            },
        });

        let highlight;
        const displayFeatureInfo = function (pixel) {
            const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
                return feature;
            });

            const info = document.getElementById('info');
            if (feature) {
                info.innerHTML = feature.get('ADMIN') || '&nbsp;';
                countryName = feature.get('ADMIN')
            } else {
                info.innerHTML = '&nbsp;';
            }

            if (feature !== highlight) {
                if (highlight) {
                    featureOverlay.getSource().removeFeature(highlight);
                }
                if (feature) {
                    featureOverlay.getSource().addFeature(feature);
                }
                highlight = feature;
            }
        };
        map.on('pointermove', function (evt) {
            if (evt.dragging) {
                return;
            }
            const pixel = map.getEventPixel(evt.originalEvent);
            displayFeatureInfo(pixel);
        });

        map.on('click', (evt) => {
            this.countryName = countryName;
            this.showCountryInfo = true;
        });
    },
    methods: {
        countryClicked() {
            this.$router.push({
                name: 'countryInfo',
                params: {
                    countryName: countryName
                }
            });
            console.log(countryName)
        }
    },
}
</script>