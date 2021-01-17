<template>
  <div class="app">
    <span class="bg"></span>
    <nav class="navbar navbar-light bg-warning justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left" href="/"><strong>CSGOff_admin</strong></a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3 text-dark" to="/choice">Добавить кейс</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/">Список кейсов</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
    <nav class="navbar navbar-dark bg-dark justify-content-center flex-nowrap flex-row" style="margin-top: 2%">
      <div class="container">
        <a class="navbar-brand text-center">{{ new Date().getFullYear() }} — <strong>CSGOff_admin</strong></a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
  .app {
    font-family: Cursive, Avenir, Helvetica, Arial, sans-serif;
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*color: #2c3e50;*/
}
  .bg {
    width: 100%;
    height: 100%;
    position: fixed;
    background: url( "../src/assets/bg.jpg") no-repeat center center;
    background-size: cover;
    min-height: calc(100vh - 80px);
    /*transform: scale(1.1);*/
    /*background-attachment: fixed;*/
  }
#nav {
  padding: 30px;
  width: auto;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  body{
    min-height: calc(100vh - 80px);
  }
</style>
