<template>
  <div class="container">
    <el-amap
        class="amap-box"
        :vid="'amap-vue'"
        :center="center"
    >
      <el-amap-marker v-for="(marker,index) in markers" :key="index" :position="marker.position">
      </el-amap-marker>
    </el-amap>
  </div>
</template>

<script>

export default {
  name: "Module2",
  data() {
    return {
      center: [113.203, 25.2042],
      markers:[],
    }
  },
  mounted() {
    this.markers = [
      {
        position: [113.203, 25.2042]
      },
    ];
  },
  methods: {
  }
}
</script>

<style scoped>
.amap-box {
  width: 100%;
  height: 400px;
  margin: 10px auto;
}
</style>