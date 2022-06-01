<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="app">

    <div id="video-container">
      <div class="video-overlay"></div>
      <div class="video-content">
        <div class="inner">
          <h1>光 ·<em> 遇</em></h1>
          <p>Sky : Children of the light</p>
          <p>{{ homepageimagetable.sayMesseage }}</p>
          <div class="scroll-icon">
            <a class="scrollTo" data-scrollTo="portfolio" href="#"><img src="http://localhost:8080/img/scroll-icon.png" alt=""></a>
          </div>
        </div>
      </div>omepageimagetable[
      <img v-bind:src="homepageimagetable[0].homepageFirstImage" class="main-image-img" />
    </div>

    <!-- 待修改 -->
    <div class="full-screen-portfolio" id="portfolio">
      <div class="container-fluid">
        <template v-for="items in Sprit_Anps">
          <div class="col-md-4 col-sm-6">
            <div class="portfolio-item">
              <a :href="items.clickimage" data-lightbox="image-1"><div class="thumb">
                <div class="hover-effect">
                  <div class="hover-content">
                    <h1>{{ items.sprittype }} <em>{{ items.spritName }}</em></h1>
                    <p>复刻时间： {{ items.lastTime }} 价格： {{ items.allCount }}</p>
                  </div>
                </div>
                <div class="image">
                  <img :src="items.littleimage" >
                </div>
              </div></a>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!--                     导航栏                         -->
    <Html_Options></Html_Options>
    <!--                     导航栏                         -->
  </div>
</template>

<script>

// eslint-disable-next-line camelcase
import Html_Options from './Html_Options'

export default {
  name: 'app',
  components: {
    Html_Options
  },
  data () {
    return {
      msg: 'test',
      homepageimagetable: {
        id: 1,
        homepageFirstImage: 'test',
        saymesseage: 'test'
      },
      Sprit_Anps: {
        id: 0,
        SpritName: 'test',
        Sprittype: 'test',
        lastTime: 'test',
        AllCount: 'test',
        littleimage: 'test',
        clickimage: 'test'
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
    this.axios.get('http://localhost:8080/Sprit_Anps').then(function (resp) { _this.Sprit_Anps = resp.data })
    this.axios.get('/api/HomePage_img').then(function (resp) { _this.homepageimagetable = resp.data })
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
</style>
