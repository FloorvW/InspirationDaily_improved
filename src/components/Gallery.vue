<template>
    <div class="background">
    <div class="inner-background">
      <div class="gallery">
        <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
          <router-link :to="`/info/${photo.id}`">
            <img :src="photo.urls.small" />
          </router-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import store from '../main.js'

export default {
  name: 'Gallery',
  computed: {
    photos () {
      // console.log("gallery-computed :" + store.getters.getPhotos)
      return store.getters.getPhotos
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.gallery {
  display: grid;
  height: 100%;
  border-radius: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.background {
/* background-color:rgba(175, 187, 194, 0.486); */
  display: absolute;
  padding-top: 2%;
  height:100%;
  border-radius: 0.75rem;
}

.gallery-panel img {
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
