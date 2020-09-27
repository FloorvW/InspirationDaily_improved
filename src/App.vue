<template>
  <div id="App">
    <div class="wrapper">
    <nav>
      <div class="logo">
        <h4>Inspiration<span>Daily</span></h4>
      </div>
      <div class="spacer"></div>
      <ul id="nav-links">
        <li>
          <router-link class="menu" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="menu" to="/categories">Categories</router-link>
        </li>
        <li>
          <router-link class="menu" to="/random">Random</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <Footer />
      </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  font-size: 22px;
  width: 100%;
  height: 100%;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100%;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color:white;
  position: fixed;
  width: 100%;
}

.spacer {
  flex-grow: 1;
}

.logo {
  color: blue;
  font-size: 22px;
  letter-spacing: 2px;
  margin-left: 3%;
}

span {
  color: rgb(10, 42, 82);
}

ul {
  background-color: white;
}

#nav-links {
  display: flex;
  justify-content: space-around;
  width: 40%;
}

#nav-links a {
  color: rgb(157, 186, 210);
  letter-spacing: 2px;
  font-size: 17px;
  text-decoration: none;
}

.menu:hover {
  border: 2px solid;
  border-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: white;
}

li {
  list-style-type: none;
}

.router-link-exact-active {
  border: 2px solid;
  border-radius: 30px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: white;
}

.wrapper{
  display:flex;
  flex-direction: column;
  min-height: 100vh;
}

@media screen and (max-width: 768px) {
  #nav-links {
    position: absolute;
    justify-content: center;
    top: 8vh;
    width: 100%;
    padding-bottom: 5%;
  }

  li {
    list-style-type: none;
    padding-right: 30px;
    padding-left: 30px;
  }

  .logo {
    position: absolute;
    justify-content: center;
  }
}
</style>
