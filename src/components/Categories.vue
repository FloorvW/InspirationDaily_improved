<template>
  <div>
    <div class="allbtns">
      <div id="category" class="categoriebtns">
        <button class="btn1" id="fashion">Fashion</button>
        <button class="btn1" id="architecture">Architecture</button>
        <button class="btn1" id="food">Food</button>
        <button class="btn1" id="design">Design</button>
        <button class="btn1" id="sports">Sports</button>
        <button class="btn1" id="work">Work</button>
      </div>
      <div id="color" class="colorbtns">
        <button class="btn2" id="black_and_white"></button>
        <button class="btn2" id="black"></button>
        <button class="btn2" id="white"></button>
        <button class="btn2" id="yellow"></button>
        <button class="btn2" id="orange"></button>
        <button class="btn2" id="red"></button>
        <button class="btn2" id="purple"></button>
        <button class="btn2" id="magenta"></button>
        <button class="btn2" id="green"></button>
        <button class="btn2" id="teal"></button>
        <button class="btn2" id="blue"></button>
      </div>
      <div id="sort" class="sortbybtns">
        <button class="btn3" id="height">Landscape</button>
        <button class="btn3" id="width">Portrait</button>
      </div>
    </div>
    <Gallery />
  </div>
</template>

<script>
import Gallery from './Gallery.vue'
import store from '../main.js'

export default {
  name: 'categories',
  components: {
    Gallery
  },
  mounted () {
    var header = document.getElementById('category')
    var btns = header.getElementsByClassName('btn1')
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        header = document.getElementById('category')
        var current = header.getElementsByClassName('active')
        if (current[0] != null) {
          current[0].className = current[0].className.replace(' active', '')
        }
        this.className += ' active'
        var topic = this.id
        store.commit('SET_COLOR', undefined)
        store.commit('SET_TOPIC', topic)
        store.dispatch('searchPhotos')
      })
    }
    header = document.getElementById('color')
    btns = header.getElementsByClassName('btn2')
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        header = document.getElementById('color')
        var current = header.getElementsByClassName('active')
        if (current[0] != null) {
          current[0].className = current[0].className.replace(' active', '')
        }
        this.className += ' active'
        var color = this.id
        store.commit('SET_COLOR', color)
        store.dispatch('searchPhotos')
      })
    }
    header = document.getElementById('sort')
    btns = header.getElementsByClassName('btn3')
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        header = document.getElementById('sort')
        var current = header.getElementsByClassName('active')
        if (current[0] != null) {
          current[0].className = current[0].className.replace(' active', '')
        }
        this.className += ' active'
        var sortType = this.id
        if (sortType === 'width') {
          store.state.photos.sort(function (a, b) {
            if (a.width > b.width) {
              return 1
            }
            if (a.width < b.width) {
              return -1
            }
            return 0
          })
        } else {
          store.state.photos.sort(function (a, b) {
            if (a.height > b.height) {
              return 1
            }
            if (a.height < b.height) {
              return -1
            }
            return 0
          })
        }
      })
    }
  },
  created () {
    // console.log("gallery: listPhotos");
    store.dispatch('listPhotos')
  }
}
</script>

<style scoped>
.categoriebtns {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  padding-top: 5%;
}

.colorbtns {
  display: flex;
  justify-content: center;
  background: linear-gradient(
    rgba(213, 242, 247, 0.2),
    rgba(232, 234, 238, 0.2)
  );
  color: rgb(205, 203, 203);
  border: 2px solid;
  height: 1vh;
  box-shadow: 0.5px 0.5px 0.5px 0.5px;
  border-color: rgba(175, 187, 194, 0.486);
  /* background-color: rgba(175, 187, 194, 0.486); */
  height: 100%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  margin-left: 28%;
  margin-right: 28%;
  border-radius: 1.4rem;
  padding-left: 6%;
  padding-right: 6%;
}

.sortbybtns {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.allbtns {
  /* background-color:  rgba(66, 65, 65, 0.1);
  padding-bottom: 3%;
  margin-left:25%;
  margin-right: 25%;
  margin-top: 8%;
  margin-bottom: 5%;
  border-radius: 0.75rem;
  border: 1px; */
  /* background:linear-gradient(rgba(157, 186, 210,0.3), rgb(185, 214, 223,0.2)); */
  /* margin-bottom: 0.3%; */
  padding-bottom: 2%;

  /* margin-left: 2%;
 margin-right: 2%; */
  margin-top: 3%;
  background-color: rgba(175, 187, 194, 0.3);
  /* background-color:rgba(175, 187, 194, 0.486); */
}

/* .btn1:hover {
  color: rgb(99, 135, 218);
} */

.btn1,
.btn3 {
  font-size: 18px;
  color: rgb(10, 42, 82);
  /* border: 2px solid; */
  box-shadow: 0.5px 0.5px 0.5px 0.5px;
  padding: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-color: rgba(175, 187, 194, 0.486);
  border-radius: 0.75rem;
  /* background-color: rgba(175, 187, 194, 0.486); */
  outline: none;
  margin-left: 8px;
  background: linear-gradient(
    rgba(213, 242, 247, 0.2),
    rgba(232, 234, 238, 0.2)
  );
}

.btn1.active,
.btn1:hover,
.btn3.active,
.btn3:hover {
  color: #20289e;
}

.btn2 {
  border: none;
  border-radius: 65px;
  border-color: rgba(175, 187, 194, 0.486);
  box-shadow: 0.5px 0.5px 0.5px 0.5px;
  padding: 1.5%;
  margin-left: 4%;
  margin-right: 4%;
  outline: none;
}

.btn2.active,
.btn2:hover {
  border: 2px solid;

  border-color: rgba(213, 242, 247, 0.2);
  padding: 1% 5%;
  /* margin-left: 1%;
  margin-right: 1%; */
  background-color: none;
}

/* .btn2.active {
  color: #20289e;
} */

/* .btn3 {
  font-size: 18px;
  color: rgb(205, 203, 203); */
/* border: 2px solid; */
/* box-shadow: 0.5px 0.5px 0.5px 0.5px;
  border-color: rgba(175, 187, 194, 0.486);
  border-radius: 0.75rem; */
/* background-color: rgba(175, 187, 194, 0.486); */
/* outline: none; */
/* margin-left: 8px; */
/* background: linear-gradient(
    rgba(213, 242, 247, 0.2),
    rgba(232, 234, 238, 0.2)
  );
  padding: 5px 10px;
  margin-left: 2px;
  margin-right: 8px;
  margin-top: 2%;
  outline: none;
} */

/* .btn3.active,
.btn3:hover {
 color: rgb(10, 42, 82);
} */

.btn:not(:last-child) {
  margin-right: 10px;
}

@media screen and (max-width: 1000px) {
  .categoriebtns {
    padding-top: 10%;
  }

  .btn1 {
    font-size: 12px;
  }

  .btn2 {
    padding: 1.2%;
    margin-left: 4%;
    margin-right: 4%;
  }

  .sortby {
    padding-top: 5%;
  }
  .btn3 {
    font-size: 12px;
  }

  .colorbtns {
    margin-left: 10%;
    margin-right: 10%;
  }
}

@media screen and (max-width: 600px) {
  .categoriebtns {
    padding-top: 130px;
  }
}

@media screen and (max-width: 800px) {
  .categoriebtns {
    padding-top: 140px;
  }
}
#blackwhite {
  background-color: grey;
}

#black {
  background-color: black;
}

#white {
  background-color: white;
  border-color: lightgrey;
}

#yellow {
  background-color: yellow;
}

#orange {
  background-color: orange;
}

#red {
  background-color: red;
}

#purple {
  background-color: purple;
}

#magenta {
  background-color: magenta;
}

#green {
  background-color: green;
}

#teal {
  background-color: teal;
}

#blue {
  background-color: blue;
}
</style>
