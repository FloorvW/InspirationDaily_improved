<template>

<div class="wrapper">
  <div class="random-container">
    <p class="waitmessage">
      <i>Please wait while picture is loading...</i>
    </p>
    <img :src="image" />
    <button class="btn" @click="searchRandom">Search again</button>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      image: ' ',
      loaded: true
    }
  },
  methods: {
    // Random images is fetched
    // performance.now() parameter added to circumvent caching
    searchRandom () {
      this.image =
        'https://source.unsplash.com/random/800x450' +
        '?sig=' +
        performance.now()
    }
  },
  mounted () {
    this.image = 'https://source.unsplash.com/random/800x450'
  }
}
</script>

<style scoped>

.wrapper{
  height: 100%;
}

.random-container {
  text-align: center;
background-color:rgba(175, 187, 194, 0.3);
  height: 16rem;

}

img {
  border-radius: 0.75rem;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 120px;
}

.btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  position: relative;
  top: 42%;
}

.waitmessage {
  z-index: -1;
  text-align: center;
  position: relative;
  top: 160px;
  color: rgb(192, 192, 192);
}

.btn {

  margin-left: auto;
  margin-right: auto;
  margin-top: 0%;

  font-size: 18px;
 color: rgb(10, 42, 82);
  box-shadow: 0.5px 0.5px 0.5px 0.5px;
  padding: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-color: rgba(175, 187, 194, 0.486);
  border-radius: 0.75rem;
  background-color: rgba(175, 187, 194, 0.486);
  outline: none;

  background:linear-gradient(rgba(213, 242, 247, 0.2), rgba(232, 234, 238, 0.2));
}

.btn.active,
.btn:hover {
  color: #20289e;
}

@media screen and (max-width: 1000px) {
  img {
    float: none;
    width: 100%;
  }
  .waitmessage {
    font-size: 2vh;
  }
}
</style>
