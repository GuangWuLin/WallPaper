<template>
  <div id="app">
    <Layout>
      <Header>
        <nav1></nav1>
      </Header>
      <Content breakpoint='md'>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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

    }
  },
  methods: {

  },
  mounted() {

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
  .ivu-radio-wrapper {
    font-size: 14px;
    color: #fff;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
