<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>

</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: 'app',
  components: {NavBar}
}
</script>

<style>
.tj-car-card {
  display: flex;
  justify-content: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.m-2 {
  width: 450px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.tj-car-card {
  margin-top: 20px;
}
.title {
  display: inline-block;
  width: 450px;
  margin: 8px 0px 10px 0;
}

.box-card {
  width: 600px;
}

.divider {
  margin-bottom: 20px;
}
</style>
