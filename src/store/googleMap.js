export default {
  state () {
    return {
      search: '',
      cuisine: '',
      markers: [],
      center: {}
    }
  },
  mutations: {
    'SET_SEARCH' (state, search) {
      state.search = search
    },
    'SET_CUISINE' (state, cuisine) {
      state.cuisine = cuisine
    },
    'SET_CENTER' (state, position) {
      state.center = position
    },
    'SET_MARKERS' (state, markers) {
      state.markers = markers
    }
  },
  actions: {
    initSearch: ({ commit }, search) => {
      commit('SET_SEARCH', search)
    },
    initCuisine: ({ commit }, cuisine) => {
      commit('SET_CUISINE', cuisine)
    },
    initCenter: ({ commit }, position) => {
      commit('SET_CENTER', position)
    },
    initMarkers: ({ commit }, markers) => {
      commit('SET_MARKERS', markers)
    },
  },
  getters: {
    search: state => state.search,
    cuisine: state => state.cuisine,
    center: state => state.center,
    markers: state => state.markers,
  }
}