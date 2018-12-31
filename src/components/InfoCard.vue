<template>
  <v-card>
    <!-- Card image -->
    <v-img
      :src="marker.featuredImg"
      aspect-ratio="2.75"
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

    <!-- Card details -->
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ marker.name }}</h3>
        <p><strong>{{ marker.cuisines }}</strong></p>
        <div>{{ marker.address }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    props: {
      marker: Object
    }
  }
</script>