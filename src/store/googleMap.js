export default {
  state () {
    return {
      search: 'thai',
      cuisine: 0,
      markers: [],
    }
  },
  mutations: {
    'SET_SEARCH' (state, search) {
      state.search = search
    },
    'SET_CUISINE' (state, cuisine) {
      state.cuisine = cuisine
    },
    'SET_MARKERS' (state, markers) {
      state.markers = markers
    },
    'APPEND_MARKERS' (state, appendMarkers) {
      state.markers = state.markers.concat(appendMarkers)
    }
  },
  actions: {
    initSearch: ({ commit }, search) => {
      commit('SET_SEARCH', search)
    },
    initCuisine: ({ commit }, cuisine) => {
      commit('SET_CUISINE', cuisine)
    },
    initMarkers: ({ commit }, markers) => {
      commit('SET_MARKERS', markers)
    },
    appendMarkers: ({ commit }, appendMarkers) => {
      commit('APPEND_MARKERS', appendMarkers)
    }
  },
  getters: {
    search: state => state.search,
    cuisine: state => state.cuisine,
    markers: state => state.markers,
  }
}