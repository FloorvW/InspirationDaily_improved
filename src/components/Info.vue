<template>
<div>
  <div class="info-container" >
    <div>
      <img :src="photo.urls.regular" />
    </div>
    <div>
      <div class="info-textbox">
        <h3 class="description" v-if="photo.alt_description">{{photo.alt_description}}</h3>
        <br>
        <p v-if="photo.user.name">{{ photo.user.name }}</p>
        <br>
        <p v-if="photo.user.bio">{{ photo.user.bio}}</p>
      </div>
      <div>
         <p class="moreby">More pictures by {{photo.user.name}}:</p>
      </div>
    </div>
    <div class="row">
      <div class="column" v-for="photo in photos" :key="photo.id">
        <img :src="photo.urls.small" style="width: 100%" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import store from '../main.js'

export default {
  name: 'Photo',
  data () {
    return {
      photo: undefined
    }
  },
  computed: {
    photos () {
      // console.log("photos: " + store.getters.getPhotos);
      return store.getters.getUserPhotos
    }
  },
  methods: {
    // photoUrl(filename) {
    //   return require(`../assets/images/${filename}`);
    // },
    closeLightbox () {
      this.$router.push('/')
    }
    // searchByUser(){
    // store.commit("SET_USER", this.photo.user);
    // store.dispatch("searchByUser");
    // }
  },
  created () {
    var photos = store.state.photos
    for (var photo of photos) {
      if (photo.id === this.$route.params.id) {
        this.photo = photo
        store.commit('SET_USER', photo.user.username)
        store.dispatch('searchByUser')
      }
    }
    //   return null;
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.moreby{
   color:rgba(109, 111, 129, 0.4);
   margin-bottom: 2%;
}

.info-container {
  text-align: center;
  background-color:rgba(175, 187, 194, 0.3);
  z-index:-1;
  padding: 10%;
  padding-bottom: 20%;

  position: relative;
  top: -40%;
}

.info-container img {
  width: 50%;
  height: 50%;
  border-radius: 0.75rem;
  /* border: none; */
  /* padding: 10px; */
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.8);
}

.info-textbox {
  background-color: rgba(169, 169, 169, 0.42);
  padding: 2%;
  padding-top: 10%;
  padding-bottom: 10%;
  width: 50%;
  position: relative;
  top: -80px;
  z-index: -2;
  border-radius: 0.75rem;
  margin: 2%;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  color:rgb(109, 111, 129);
}

.description:first-letter{
  text-transform: capitalize
}

@media screen and (max-width: 1000px){
  .info-textbox{
    font-size: 50%;
  padding-top: 15%;
  padding-bottom: 10%;
}
.info-container{
  padding-left: 0%;
  padding-right: 0%;
}
.info-container img{
  margin-top: 30%;
}
button{
  margin-top: 30%;
}
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}
</style>
