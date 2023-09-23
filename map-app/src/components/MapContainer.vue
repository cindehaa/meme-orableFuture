<template>
    <div id="map" class="map"></div>
    <div id="info">&nbsp;</div>
</template>

<style>
.map {
    width: 100%;
    height: 400px;
}
</style>

<script>
import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';

export default {
    name: 'MapContainer',
    components: {},
    props: {},
    mounted() {

        const vectorLayer = new VectorLayer({
            background: '#1a2b39',
            source: new VectorSource({
                url: "/data/countries.geojson",
                format: new GeoJSON(),
            }),
            style: {
                'fill-color': ['string', ['get', 'COLOR'], '#eee'],
            },
        });
        const map = new Map({
            layers: [vectorLayer],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 1,
            }),
        });
        const featureOverlay = new VectorLayer({
            source: new VectorSource(),
            map: map,
            style: {
                'stroke-color': 'rgba(255, 255, 255, 0.7)',
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

        map.on('click', function (evt) {
            displayFeatureInfo(evt.pixel);
        });
    }
}
</script>