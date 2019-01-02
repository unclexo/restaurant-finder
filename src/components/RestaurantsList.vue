<template>
  <v-list two-line>
    <template v-for="(marker, index) in markers">
      
      <!-- Restaurant list -->
      <v-list-tile
        ripple
        :key="marker.title"
        @click="onClickList(marker, index)"
      >
        <!-- Restaurant avatar -->
        <v-avatar
          :tile="true"
          :size="56"
          :style="{ marginRight: '8px' }"
        >
          <v-img
            aspect-ratio="1"
            :src="marker.thumb"
            class="grey lighten-2"
          >
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-avatar>

        <!-- Restaurant short desc -->
        <v-list-tile-content>
          <v-list-tile-title>{{ marker.name }}</v-list-tile-title>
          <v-list-tile-sub-title class="text--primary">{{ marker.cuisines }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ marker.locality }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- Restaurant divider -->
      <v-divider
        :key="index"
        v-if="index + 1 < markers.length"
      ></v-divider>

    </template>

    <!-- Infinite Loader -->
    <infinite-loading @infinite="infiniteHandler" spinner="spiral">
      <div slot="no-more" class="no-more">The End</div>
      <div slot="no-results" class="no-results">No restaurants found.</div>
    </infinite-loading>

  </v-list>
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import { eventManager } from '../main'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    data: () => ({
      start: 0,
    }),
    computed: {
      ...mapGetters([
        'search',
        'cuisine',
        'markers',
      ])
    },
    methods: {
      onClickList(marker, index) {
        eventManager.$emit('isRestaurantClicked', marker, index)
      },
      infiniteHandler($state) {
        axios.get('/search', {
          params: {
            q: this.search,
            start: this.start,
            cuisines: this.cuisine,
          }
        })
          .then(response => {
            if (response.data && this.start < parseInt(response.data.results_found + 20)) {
              const appendMarkers = response.data.restaurants.map(restaurant => {
                return {
                  id: restaurant.restaurant.id,
                  name: restaurant.restaurant.name,
                  thumb: restaurant.restaurant.thumb,
                  cuisines: restaurant.restaurant.cuisines,
                  address: restaurant.restaurant.location.address,
                  featuredImg: restaurant.restaurant.featured_image,
                  locality: restaurant.restaurant.location.locality_verbose,
                  position: {
                    lat: parseFloat(restaurant.restaurant.location.latitude),
                    lng: parseFloat(restaurant.restaurant.location.longitude),
                  },
                }
              })

              // Increases the start
              this.start += 20

              if (appendMarkers.length > 0) {
                // Updates map center position
                eventManager.$emit('updateCenterPosition', appendMarkers[0].position)
                
                // Appends markers to the state
                this.$store.dispatch('appendMarkers', appendMarkers)
              }

              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch(error => {
            alert(error.message)
          })
      }
    },
    components: {
      InfiniteLoading,
    }
  }
</script>

<style>
.no-more, .no-results {
  color: grey;
  margin: 10px 0 0;
}
</style>

