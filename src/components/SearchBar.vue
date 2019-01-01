<template>
  <v-form :style="{ width: '100%' }">
    <v-layout align-start justify-start row mt-2>
      <!-- Search box -->
      <v-flex md8>
        <v-text-field
          solo
          flat
          hide-details
          v-model="search"
          label="Type restaurant name"
          prepend-inner-icon="search"
        ></v-text-field>
      </v-flex>

      <!-- Select box -->
      <v-flex md2 ml-2>
        <v-select
          solo
          flat
          label="Cuisine"  
          item-text="text"
          item-value="value"
          :items="cuisines"
          v-model="cuisine"
        ></v-select>
      </v-flex>

      <!-- Search button -->
      <v-flex md2>
        <v-btn
          color="error"
          class="search-btn"
          @click="getRestaurantMarkers"
        >
          Search
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      search: 'thai',
      cuisine: 0,
      cuisines: [],
    }),
    methods: {
      getRestaurantMarkers () {
        axios.get('/search', {
          params: {
            q: this.search,
            count: 15,
            cuisines: this.cuisine,
          }
        })
          .then(response => {
            if (response.data && response.data.restaurants.length > 0) {
              // Prepares markers
              const markers = response.data.restaurants.map(restaurant => {
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

              // Initializes various states
              this.$store.dispatch('initSearch', this.search)
              this.$store.dispatch('initCuisine', this.cuisine)
              this.$store.dispatch('initMarkers', markers)
              this.$store.dispatch('initCenter', markers[0].position)
            }
          })
          .catch(error => {
            alert(error.message)
          })
      }
    },
    created () {
      // Gets restaurants as defaults
      this.getRestaurantMarkers()

      // Gets cuisines as defaults
      axios.get('/cuisines', {
        params: {
          lat: 1.0,
          lon: 1.0,
        }
      })
        .then( response => {
          if (response.data && response.data.cuisines.length > 0) {
            const cuisines = response.data.cuisines.map(cuisine => {
              return {
                text: cuisine.cuisine.cuisine_name,
                value: cuisine.cuisine.cuisine_id,
              }
            })

            cuisines.unshift({ text: 'No Cuisine', value: 0 })
            this.cuisines = cuisines
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
</script>
