<template>
  <div class="home-main">
    <homepage_bg></homepage_bg>
  </div>
</template>

<script>
import homepage_bg from "../components/homepage_bg";

export default {
  name: "Home",
  data() {
    return {
      logo: require("../assets/images/homepage_bg/logo_white.png"),
      houseActive: require("../assets/images/homepage_bg/nav_active/house_active_0.png"),
      houseActiveBg: require("../assets/images/homepage_bg/nav_active/house_active_bg.png"),
      houseDefault: require("../assets/images/homepage_bg/nav_default/house_default_0.png")
    }
  },
  components :{
    homepage_bg
  }
}
</script>

<style scoped>

</style>