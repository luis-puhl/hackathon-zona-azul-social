<template>
  <div id="map">
    <div id="busca-container">
      <md-toolbar class="md-primary" md-elevation="10" id="busca">
        <md-button class="md-icon-button" @click="$emit('show-sidepanel')">
          <md-icon>menu</md-icon>
        </md-button>
        <md-field>
          <label>Seu destino...</label>
          <md-input></md-input>
        </md-field>
      </md-toolbar>
    </div>

    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" data-projection="EPSG:4326">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event" :tracking="true">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-circle :radius="5">
              <!-- fill -->
            </vl-style-circle>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>

    <md-speed-dial class="md-bottom-right" md-event="click" md-direction="bottom">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>
  import * as points from './points.json'
  export default {
    name: 'Map',
    data () {
      return {
        points,
        zoom: 14,
        center: [-49.029367199999996,-22.3444882],
        rotation: 0,
        geolocPosition: undefined,
      }
    }
  }
</script>

<style scoped>
#busca-container {
  position: absolute;
  width: 100%;
  left: 0;
}
:host, #map {
  height: 100%;
}
#busca {
  position: absolute;
  z-index: 2;
  left: 2rem;
  top: 3vh;

  /* background-color: white; */
  border-radius: 0.4rem;
  /* display: flex; */
  /* flex-direction: row; */
}
</style>
