<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      clipped
      v-model="drawer"
      class="grey lighten-4"
    >
      <!-- Restaurants list -->
      <app-restaurants-list></app-restaurants-list>
    </v-navigation-drawer>

    <v-toolbar color="#4169E1" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5" :style="{ color: '#ffffff' }">Get&nbsp;<span class="font-weight-light">Taste</span></span>
      <!-- Search bar -->
      <app-search-bar></app-search-bar>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout>
          <!-- Google map -->
          <app-google-map></app-google-map>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import SearchBar from './components/SearchBar'
  import GoogleMap from './components/GoogleMap'
  import RestaurantsList from './components/RestaurantsList'

  export default {
    data: () => ({
      drawer: null,
    }),
    components: {
      appSearchBar: SearchBar,
      appGoogleMap: GoogleMap,
      appRestaurantsList: RestaurantsList,
    }
  }
</script>

<style>
.search-btn {
  height: 48px;
  margin: 0px 8px;
}
</style>
