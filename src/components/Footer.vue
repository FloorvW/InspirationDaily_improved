 <template>
  <footer class="footer">
        <div class="column">
          <h3 class="footertitle">Inspiration<span>Daily</span></h3>
          <a :href="this.sites[0]">Home</a>
          <a :href="this.sites[2]">Categories</a>
          <a :href="this.sites[3]">Random</a>
        </div>
  </footer>
</template>

<script>
import router from '../router/index.js'

export default {
  name: 'Footer',
  data () {
    return {
      sites: []
    }
  },
  methods: {
    // get routes in order to generate sitemap
    getRoutesList (routes, pre) {
      return routes.reduce((array, route) => {
        const path = `${pre}${route.path}`
        if (route.path !== '*') {
          array.push(path)
        }
        if (route.children) {
          array.push(...this.getRoutesList(route.children, `${path}/`))
        }
        return array
      }, [])
    },
    redirectTo () {}
  },
  mounted () {
    this.sites = this.getRoutesList(
      router.options.routes,
      'http://localhost:8080'
    )
  }
}
</script>

<style scoped>

footer {
  color: blue;
  display: flex;
  justify-content: center;
   background-color: rgba(157, 186, 210,0.2);
}

footer a {
  margin: 2rem;
  text-decoration: none;
  color: rgb(85, 112, 138);
  font-size: 1.1rem;
  font-size: 14px;
}

.footertitle {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  color: blue;
  font-size: 16px;
  letter-spacing: 1px;
  margin-left: 3%;

}

span{
    color: rgb(10, 42, 82);
}
</style>
