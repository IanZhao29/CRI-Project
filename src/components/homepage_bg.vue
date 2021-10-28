<template>
  <div class="main">
    <div class="left-side">
      <div class="logo">
        <img :src="logo" alt="logo_white">
      </div>
      <div class="house-group">
        <div class="house-active-group">
          <div class="house-active-bg">
            <img :src="houseActiveBg" alt="house_active_bg">
          </div>
          <div class="house-active">
            <img :src="houseActive" alt="house_active">
          </div>
        </div>
        <div class="house-default-1">
          <img :src="houseDefault" alt="house_default">
        </div>
        <div class="house-default-2">
          <img :src="houseDefault" alt="house_default">
        </div>
        <div class="house-default-3">
          <img :src="houseDefault" alt="house_default">
        </div>
      </div>
    </div>
    <div class="view">
      <div class="main-module">
        <div class="main-module-bg"></div>
        <label for="date" class="date-box">
          <div class="input-name">Date: </div>
          <input type="date" id="date" class="input-box">
        </label>
        <label for="area" class="area-box">
          <div class="input-name">Area: </div>
          <input type="text" id="area" class="input-box">
        </label>
        <label for="id" class="id-box">
          <div class="input-name">ID: </div>
          <input type="text" id="id" class="input-box">
        </label>
        <div class="query-button-box">
          <div class="query-button">
            <div class="query-button-bg"></div>
            <div class="query-button-text">QUERY</div>

          </div>

        </div>
        <div class="line-chart line-chart-1">
          <div class="line-chart-bg line-chart-1-bg"></div>
        </div>
        <div class="line-chart line-chart-2">
          <div class="line-chart-bg line-chart-2-bg"></div>
        </div>
        <div class="line-chart line-chart-3">
          <div class="line-chart-bg line-chart-3-bg"></div>
        </div>
      </div>
      <div class="map">
        <div class="map-bg"></div>
        <div class="map-main"></div>
      </div>
      <div class="air">
        <div class="air-bg"></div>
      </div>
    </div>
    <div class="user-group">
      <div class="user-group-bg"></div>
      <div class="user"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage_bg",
  data() {
    return {
      logo: require("../assets/images/homepage_bg/logo_white.png"),
      houseActive: require("../assets/images/homepage_bg/house_active/house_active_0.png"),
      houseActiveBg: require("../assets/images/homepage_bg/house_active/house_active_bg.png"),
      houseDefault: require("../assets/images/homepage_bg/house_default/house_defalut_0.png")
    }
  }
}
</script>

<style scoped>
@import "../assets/css/homepagr_bg.css";
</style>