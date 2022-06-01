<template>
  <div id="Seassonblog">

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
              <div class="col-md-50">
                <div class="single-blog-post">
                  <img :src="Seasson_Resum.seassonResumOutImage" alt="宣传图">
                  <img :src="Seasson_Resum.seassonResumPriceImage" alt="价格图">

                  <div class="text-content">
                    <h2>{{ Seasson_Resum.seassonResumName }}</h2>
                    <br>
                    <span><a href="#">季节日期：{{ Seasson_Resum.seassonResumDate }}</a><br><br><a href="#">季节总时间：{{ Seasson_Resum.seassonResumSumday }} 天</a></span>
                    <br><br>
                    <p>{{ Seasson_Resum.seassonResumIntroduce }}
                      <br><br><a href="Seasson_resume" style="color: #f4dd5b;">返回</a></p>
                    <div class="tags-share">
                      <div class="row">
                        <div class="col-md-6">
                          <ul class="tags">
                            <li>Tags:</li>
                            <li><a href="https://space.bilibili.com/7555823">Bilibili</a>,</li>
                            <li><a href="https://weibo.com/5020576637">微博</a>,</li>
                            <li><a href="https://www.facebook.com/WindHide">脸书</a>,</li>
                            <li><a href="https://twitter.com/WindHide520">推特</a></li>
                          </ul>
                          <br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Html_Options></Html_Options>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import Html_Options from './Html_Options'
export default {
  name: 'Seassonblog',
  components: {
    Html_Options
  },
  data () {
    return {
      msg: 'test',
      Seasson_Resum: {
        seassonResumId: 0,
        seassonResumImg: 'Erro!',
        seassonResumName: 'Erro!',
        seassonResumDate: 'Erro!',
        seassonResumSumday: 'Erro!',
        seassonResumIntroduce: 'Erro!',
        seassonResumOutImage: 'Erro!',
        seassonResumPriceImage: 'Erro!',
        seassonResumTexT: 'Erro!',
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
    this.axios.get('/api/Seasson_Blog?id='+this.$route.query.id).then(function (resp) { _this.Seasson_Resum = resp.data })
  }
}
</script>

<style scoped>

</style>
