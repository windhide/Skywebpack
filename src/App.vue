<template>

    <router-view></router-view>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'test'

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
    link: [{rel: 'stylesheet', href: 'http://localhost:8080/css/bootstrap-theme.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/fontAwesome.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/bootstrap-theme.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/light-box.css'},
      {rel: 'stylesheet', href: 'http://localhost:8080/css/templatemo-style.css'}
    ],
    script: [
      {src: 'http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js'},
      {src: 'http://localhost:8080/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'},
      {src: 'http://localhost:8080/js/vendor/bootstrap.min.js'},
      {src: 'http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js'},
      {src: 'http://localhost:8080/js/vendor/bootstrap.min.js'},
      {src: 'http://localhost:8080/js/plugins.js'},
      {src: 'http://localhost:8080/js/main.js'},
      {src: 'http://localhost:8080/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'}
    ]
  }
}
</script>

<style>
</style>
