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

    <!-- Info window -->
    <gmap-info-window 
      :options="infoOptions" 
      :position="infoWindowPos" 
      :opened="infoWinOpen" 
      @closeclick="infoWinOpen=false"
    >
      <!-- Info card -->
      <gmap-info-card :marker="infoContent"></gmap-info-card>
    </gmap-info-window>
  </gmap-map>
</template>

<script>
  import { mapGetters } from 'vuex'
  import InfoCard from './InfoCard'
  import { eventManager } from '../main'

  export default {
    data: () => ({
      zoom: 10,
      center: {
        lat: 28.6139,
        lng: 77.2090
      },
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
        // 'center',
        'markers',
      ])
    },
    created () {
      // Updates center position of the map
      eventManager.$on('updateCenterPosition', (position) => {
        this.center = position
      })
      eventManager.$on('isRestaurantClicked', (marker, index) => {
        this.toggleInfoWindow(marker, index)
      })
    },
    methods: {
      toggleInfoWindow (marker, index) {
        this.infoContent = marker
        this.infoWindowPos = marker.position

        //check if its the same marker that was selected if yes toggle
        if (this.currentMindex === index) {
          this.infoWinOpen = !this.infoWinOpen
        }
        // if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true
          this.currentMindex = index
        }
      }
    },
    components: {
      gmapInfoCard: InfoCard
    }
  }
</script>

