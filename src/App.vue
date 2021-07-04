<template>
  <div id="app">
      <Navbar/>
      
    <router-view></router-view>
    <br>
    <br>
    <br>
          <footer><Footer/> </footer>


  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
        Navbar,
        Footer
         }
}
</script>
<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
