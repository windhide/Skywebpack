<template>
  <div id="SeassoneResum">

    <div class="page-heading">
      <div class="container">
        <div class="heading-content">
          <h1>Sky :<em>  Children of the light</em></h1>
        </div>
      </div>
    </div>

    <div class="blog-entries">
      <div class="container">
        <div class="blog-posts">
          <div class="row">

            <template v-for="items in Seasson_Resum">

              <div class="col-md-50">
                <div class="blog-post">
                  <img :src="items.seassonResumImg" alt="">
                  <div class="text-content">
                    <h2>{{ items.seassonResumName }}</h2>
                    <p>季节时间：{{ items.seassonResumDate }}
                      <br>
                      持续时间：{{ items.seassonResumSumday }} 天
                      <br>
                      <br>
                      “{{ items.seassonResumIntroduce }}”</p>
                    <div class="simple-btn">
                      <a :href="linkthis+items.seassonResumId"  >More</a>
                    </div>
                  </div>
                </div>
              </div>

            </template>

          </div>
        </div>
      </div>
    </div>


    <Html_Options></Html_Options>

  </div>

</template>

<script>

import Html_Options from './Html_Options'

export default {
  name: 'SeassoneResum',
  components: {
    Html_Options
  },
  data () {
    return {
      msg: 'test',
      linkthis: '/Seasson_blog?id=',
      Seasson_Resum: {
        seassonResumId: 0,
        seassonResumImg: 'Erro!',
        seassonResumName: 'Erro!',
        seassonResumDate: 'Erro!',
        seassonResumSumday: 'Erro!',
        seassonResumIntroduce: 'Erro!',
        seassonResumOutImage: 'Erro!',
        seassonResumPriceImage: 'Erro!',
        seassonResumTypeid: 0
      }
    }
  },
  metaInfo: {
    title: '光遇攻略',
    meta: [
      { name: 'referrer', content: 'no-referrer' },
      // eslint-disable-next-line standard/object-curly-even-spacing
      { name: 'description', content: ''},
      // eslint-disable-next-line standard/object-curly-even-spacing
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // eslint-disable-next-line standard/object-curly-even-spacing
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      // eslint-disable-next-line standard/object-curly-even-spacing
      { charset: 'utf-8'}
    ],
    script: [
      {src: 'http://localhost:8080/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'},
      {src: 'http://localhost:8080/js/vendor/bootstrap.min.js'},
      {src: 'http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js'},
      {src: 'http://localhost:8080/js/vendor/bootstrap.min.js'},
      {src: 'http://localhost:8080/js/plugins.js'},
      {src: 'http://localhost:8080/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'},
      {src: 'http://localhost:8080/js/main.js'}
    ],
    link: [{rel: 'stylesheet', href: 'http://localhost:8080/css/bootstrap-theme.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/fontAwesome.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/bootstrap-theme.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/light-box.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/templatemo-style.css'}
    ]
  },
  created () {
    const _this = this
    this.axios.get('/api/Seasson_Resum').then(function (resp) { _this.Seasson_Resum = resp.data })
  }
}
</script>

<style scoped>

</style>
