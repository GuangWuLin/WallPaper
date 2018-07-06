<template>
  <div id="app">
    <Layout>
      <Header :breakpoint='breakpoint'>
        <nav1></nav1>
      </Header>
      <Content breakpoint='md'>
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center" breakpoint='md'>
        <tail></tail>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import Nav1 from 'components/home/nav'
import Tail from 'base/tail'
export default {
  name: 'App',
  components: {
    Nav1,
    Tail
  },
  data() {
    return {
      breakpoint: 'xl',
      timer: null
    }
  },
  methods: {
    compare(width) {
      if (width >= 1200) {
        this.breakpoint = 'xl';
      } else if (width > 992 && width <= 1200) {
        this.breakpoint = 'lg';
      } else if (width > 768 && width <= 992) {
        this.breakpoint = 'md';
      } else if (width > 480 && width <= 768) {
        this.breakpoint = 'sm';
      } else {
        this.breakpoint = 'xs';
      }
    }
  },
  mounted() {
    this.compare(document.body.clientWidth);
    console.log(this.breakpoint)
  }
}
</script>

<style lang='less'>
@import "./assets/css/mixin.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(-120deg, rgba(169, 70, 253, .4), rgba(8, 43, 174, .6), rgba(0, 240, 255, .6));
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  /* margin-top: 60px; */
  .ivu-layout {
    background: transparent;
    .ivu-layout-header {
      background: transparent;
      width: 100%;
      padding: 0;
      height: 60px;
    }
  }
  .layout-footer-center {
    text-align: center;
    background: transparent;
    padding: 0;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
