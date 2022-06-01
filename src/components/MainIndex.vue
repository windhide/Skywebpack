<template>
  <div id="MainIndex" style="height: 100%">
    <table class="doc-loader"  style="background-color:pink;">
      <tbody>
      <tr>
        <td>
          <img src="http://localhost:8080/MainsStatic/images/ajax-document-loader.gif" alt="Loading...">
          <h3 style="color: white;">猫猫菇正在很努力的加载网站了！</h3>
        </td>
      </tr>
      </tbody>
    </table>

    <nav id="header-main-menu">
      <ul class="main-menu sm sm-clean">
        <template v-for="items in Hoptions">

          <li>
            <a :href="items.olink">{{ items.otext }}</a>
          </li>
        </template>
      </ul>
      <form role="search" class="search-form">
        <label>
          <input type="search" class="search-field" placeholder="Search …" value="" name="s" title="Search for:">
        </label>
      </form>
    </nav>

    <div id="particles-js" class="blog-top-content-holder relative" style="width: 100%;height:100% ">

      <div class="header-holder">
        <div class="toggle-holder relative right">
          <div id="toggle" class="">
            <div class="first-menu-line"></div>
            <div class="second-menu-line"></div>
            <div class="third-menu-line"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>

      <div class="header-logo">
        <a href="index.html">
          <img src="http://localhost:8080/MainsStatic/images/default_droppler_logo.png" alt="Droppler">
        </a>

      </div>
      <div class="blog-top-content content-1170 center-relative center-text relative">
        <h1 class="entry-title">小星</h1>
        <p class="site-description">这个网站单纯做着玩的</p>
        <p class="site-description">感谢您访问这个网站</p>
      </div>
      <div class="clear"></div>
      <div class="icon-scroll"></div>
    </div>

    <article style="background-image: url(https://qq.cn.hn/FDr);" class="entry-holder blog-item-holder has-post-thumbnail">
      <div class="entry-content relative">
        <div class="content-1170 center-relative center-text">
          <h2 class="entry-title">
            <a href="single.html">
              Sky : Children of the Light
            </a>
          </h2>
          <a href="index" data-rel="prettyPhoto[1]">
            <div class="video-popup">
              <img src="http://localhost:8080/MainsStatic/images/read_more_icon.svg" alt="Play">
            </div>
            <div class="video-popup-text">进入复刻页面</div>
          </a>
          <div class="clear"></div>
        </div>
      </div>
    </article>



    <article style="background-image: url(https://qq.cn.hn/FDg);" class="entry-holder blog-item-holder has-post-thumbnail">
      <div class="entry-content relative">
        <div class="content-1170 center-relative center-text">
          <h2 class="entry-title">
            <a href="single.html">
              光·遇
            </a>
          </h2>
          <a href="Seasson_resume">
            <div class="read-more-holder">
              <img src="http://localhost:8080/MainsStatic/images/read_more_icon.svg" alt="Read more.">
            </div>
            <div class="read-more-text">进入季节详情</div>
          </a>
          <div class="clear"></div>
        </div>
      </div>
    </article>

    <div class="page-pagination-holder relative">
      <a href="index">
        <div class="previous-post-link">复刻信息</div>
      </a>
      <a href="Seasson_resume">
        <div class="next-post-link">季节信息</div>
      </a>
      <div class="clear"></div>
    </div>

    <div class="fixed scroll-top">
      <img src="images/back_to_top.png" alt="Go Top">
    </div>
  </div>

</template>

<script>

export default {
  name: 'MainIndex',
  data () {
    return {
      msg: 'test',
      Hoptions: {
        id: 1,
        otext: 'test',
        olink: 'test'
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
    link: [{rel: 'shortcut icon', href: 'http://localhost:8080/MainsStatic/images/favicon.png'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/clear.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/common.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/carouFredSel.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/prettyPhoto.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/sm-clean.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/MainsStatic/css/style.css'}
    ],
    script: [
      {src: 'http://localhost:8080/MainsStatic/js/jquery.js'},
      {src: 'http://localhost:8080/MainsStatic/js/particles.min.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.fitvids.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.smartmenus.min.js'},
      {src: 'http://localhost:8080/MainsStatic/js/isotope.pkgd.js'},
      {src: 'http://localhost:8080/MainsStatic/js/imagesloaded.pkgd.js'},
      {src: 'http://localhost:8080/MainsStatic/js/isotope.pkgd.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.carouFredSel-6.0.0-packed.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.mousewheel.min.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.touchSwipe.min.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.easing.1.3.js'},
      {src: 'http://localhost:8080/MainsStatic/js/imagesloaded.pkgd.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.prettyPhoto.js'},
      {src: 'http://localhost:8080/MainsStatic/js/jquery.nicescroll.min.js'},
      {src: 'http://localhost:8080/MainsStatic/js/main.js'},
      {src: 'http://localhost:8080/MainsStatic/js/app.js'}
    ]
  },
  created () {
    const _this = this
    this.axios.get('/api/Options_html').then(function (resp) { _this.Hoptions = resp.data })
  }
}
</script>

<style scoped>

</style>
