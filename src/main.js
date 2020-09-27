import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    userPhotos: [],
    topic: undefined,
    color: undefined,
    user: undefined,
    key: 'Client-ID NzvzFaES6WCBY0qwjArIc45aNNnZRQDajC1CzRtYbO8'
  },
  getters: {
    getPhotos (state) {
      return state.photos
    },
    getTopic (state) {
      return state.topic
    },
    getColor (state) {
      return state.color
    },
    getKey (state) {
      return state.key
    },
    getUser (state) {
      return state.user
    },
    getUserPhotos (state) {
      return state.userPhotos
    }
  },
  mutations: {
    SET_PHOTOS: (state, photos) => {
      state.photos = photos
    },
    SET_TOPIC: (state, topic) => {
      state.topic = topic
    },
    SET_COLOR: (state, color) => {
      state.color = color
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_USERPHOTOS: (state, userPhotos) => {
      state.userPhotos = userPhotos
    }
  },
  actions: {
    // retrieves the latest photo-information from all topics from unsplash
    listPhotos (context) {
      axios
        .get(
          'https://api.unsplash.com/photos?order_by=latest&per_page=12',
          {
            headers: {
              Authorization: context.getters.getKey
            }
          }
        )
        .then((response) => {
          context.commit('SET_PHOTOS', response.data)
        })
    },
    searchPhotos (context) {
      // retrieves photo-information from the chosen topic and the chosen color
      var topic = context.getters.getTopic
      var color = context.getters.getColor
      var str = 'https://api.unsplash.com/search/photos?order_by=latest&per_page=12'
      if (topic !== undefined) {
        str += `&query=${context.getters.getTopic}`
      }
      if (color !== undefined) {
        str += `&color=${context.getters.getColor}`
      }
      axios
        .get(
          str,
          {
            headers: {
              Authorization: context.getters.getKey
            }
          }
        )
        .then((response) => {
          context.commit('SET_PHOTOS', response.data.results)
        })
    },
    searchByUser (context) {
      // retrieves photo-information from the user of the chosen picture
      axios
        .get(
          `https://api.unsplash.com/users/${context.getters.getUser}/photos?per_page=3`,
          {
            headers: {
              Authorization: context.getters.getKey
            }
          }
        )
        .then((response) => {
          context.commit('SET_USERPHOTOS', response.data)
        })
        .catch(() => {
          this.images = []
        })
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
