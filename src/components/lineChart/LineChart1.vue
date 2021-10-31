<template>
  <v-card class="lineChart1"
          style="border-radius: 50px"
  >
    <v-row>
      <span id="title">Temperature/CO2/PM2.5</span>
    </v-row>
    <v-row>
      <v-container id="linechart1">

      </v-container>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "LineChart"
}
</script>

<style lang="scss" scoped>
.lineChart1 {
  background: linear-gradient(180deg, #B8F1CC 0%, rgba(184, 241, 204, 0) 100%);
  height: 392px;
  min-width: 252px;
}

#title {
  margin-top: 23.81px;
  margin-left: 31.7px;
  font-family: Alibaba PuHuiTi;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
}

#linechart1 {
  margin: 14.28px auto;
  width: 85%;
  height: 286.23px;
}
</style>