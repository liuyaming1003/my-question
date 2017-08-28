<template>
  <div id="app" class="main">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
//全局样式，会自动添加浏览器全缀支持
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex{
    display: flex;
}

.flex-column{
    flex-direction: column;
}

.flex-row{
    flex-direction: row;
}

.flex-align-center {
    align-items: center;
}

.flex-justify-center{
    justify-content: center;
}
</style>
