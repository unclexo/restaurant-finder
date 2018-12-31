<template>
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
</template>
