<template>
  <div>

    <nav>
      <div class="logo">
        <a href="/">Sky<em>光 · 遇</em></a>
      </div>
      <div class="menu-icon">
        <span></span>
      </div>
    </nav>

    <section class="overlay-menu">
      <div class="container">
        <div class="row">
          <div class="main-menu">
            <ul>
              <template v-for="optionshtml in Hoptions">
                <li>
                  <a :href="optionshtml.olink">{{ optionshtml.otext }}</a>
                </li>
              </template>
            </ul>
            <p>WindHide</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container-fluid">
        <div class="col-md-12">
          <p>©  湘ICP备2020021650号 | Power by WindHide<br>(小星)</p>
        </div>
      </div>
    </footer>

    <!-- Modal button -->
    <div class="popup-icon">
      <button id="modBtn" class="modal-btn"><img src="http://localhost:8080/img/contact-icon.png" alt=""></button>
    </div>

    <!-- Modal                                               反馈模态框                   -->
    <div id="modal" class="modal">
      <!-- Modal Content -->
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h3 class="header-title">反馈</h3>
          <div class="close-btn"><img src="http://localhost:8080/img/close_contact.png" alt=""></div>
        </div>
        <!-- Modal Body -->
        <div class="modal-body">
          <div class="col-md-6 col-md-offset-3">
            <form id="contact" action="" method="post">
              <div class="row">

                <div class="col-md-12">
                  <fieldset>
                    <input name="email" type="email" class="form-control" id="email" placeholder="您的邮件" required="">
                  </fieldset>
                </div>
                <div class="col-md-12">
                  <fieldset>
                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="您的反馈\意见" required=""></textarea>
                  </fieldset>
                </div>
                <div class="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="btn">发送！</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Html_Options',
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
    this.axios.get('/api/Options_html').then(function (resp) { _this.Hoptions = resp.data })
  }
}
</script>

<style scoped>

</style>
