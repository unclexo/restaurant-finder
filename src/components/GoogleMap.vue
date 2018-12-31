<template>
  <!-- Google map -->
  <gmap-map
    :zoom="zoom"
    :center="center"
    style="width: 100%; height: 100%"
  >
    <!-- Markers -->
    <gmap-marker
      :key="index"
      :clickable="true"
      :draggable="true"
      :position="marker.position"
      v-for="(marker, index) in markers"
      @click="toggleInfoWindow(marker, index)"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      zoom: 10,
      infoContent: {},
      infoWindowPos: null,
      infoWinOpen: false,
      currentMindex: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    }),
    computed: {
      ...mapGetters([
        'center',
        'markers',
      ])
    },
  }
</script>

