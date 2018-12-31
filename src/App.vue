<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      clipped
      v-model="drawer"
      class="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        Restaurants list container
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="#4169E1" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5" :style="{ color: '#ffffff' }">Get&nbsp;<span class="font-weight-light">Taste</span></span>
      
      <v-form :style="{ width: '100%' }">
        <v-layout align-start justify-start row mt-2>
          <!-- Search box -->
          <v-flex md8>
            <v-text-field
              solo
              flat
              hide-details
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
            ></v-select>
          </v-flex>
          <!-- Search button -->
          <v-flex md2>
            <v-btn
              color="error"
              class="search-btn"
            >
              Search
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout justify-center align-center>
          <h1>Google map container</h1>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    })
  }
</script>

<style>
.search-btn {
  height: 48px;
  margin: 0px 8px;
}
</style>
