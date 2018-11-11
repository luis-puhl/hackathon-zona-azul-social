<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" data-projection="EPSG:4326">
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-geoloc @update:position="geolocPosition = $event" :tracking="true">
      <template slot-scope="geoloc">
        <vl-feature v-if="geoloc.position" id="position-feature">
          <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
          <vl-style-circle :radius="5">

            </vl-style-circle>
        </vl-feature>
      </template>
    </vl-geoloc>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
  import * as points from './points.json'
  export default {
    data () {
      return {
        points,
        zoom: 14,
        center: [-49.029367199999996,-22.3444882],
        rotation: 0,
        geolocPosition: undefined,
      }
    },
  }
</script>
