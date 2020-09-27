<template>
<div>
<Gallery />
</div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import store from '../main.js'

export default {
  name: 'home',
  props: ['photos'],
  components: {
    Gallery
  },
  created () {
    // console.log("gallery: listPhotos")
    store.dispatch('listPhotos')
  }
}
</script>
