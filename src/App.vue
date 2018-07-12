<template>
  <div id="app">
    <Layout>
      <Header>
        <nav1 class="nav1Hide"></nav1>
      </Header>
      <Content class="content">
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
  }
}
</script>

<style lang='less'>
@import "./assets/css/mixin.less";
@media screen and (max-width:767px) {
  .layout-footer-center {
    display: none;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(-120deg, rgba(169, 70, 253, .4), rgba(8, 43, 174, .6), rgba(0, 240, 255, .6));
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  /* margin-top: 60px; */
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .ivu-layout {
    background: transparent;
    .ivu-layout-header {
      background: transparent;
      width: 100%;
      padding: 0;
    }
  }
  .layout-footer-center {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    text-align: center;
    background: transparent;
    padding: 0;
  }
  .ivu-radio-wrapper {
    color: #fff;
  }
  .ivu-layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .content {
    margin-top: 60px;
    margin-bottom: 100px;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
