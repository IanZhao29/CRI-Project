<template>
  <v-data-table
      :headers="headers"
      :items="sensorTable"
      :items-per-page="10"
      class="elevation-1"
  ></v-data-table>
</template>

<script>
import {getList} from "../../api/homeAPI";

export default {
  name: "Control",
  data() {
    return {
      headers: [
        {text: 'Device Name', value:'processorCode'},
        {text: 'Update Time', value:'captureDataTime'},
        {text: 'Temp(˚C)', value:'temperature'},
        {text: 'CO2(ppm)', value:'ppm'},
        {text: 'Humidity(%)', value:'humidity'},
      ],
      sensorTable:[],
      page: 1,
      URL: "/generator/sensordatatest/testInfo/",
    }
  },
  methods: {
    query() {
      getList('GET', this.URL+this.page).then(res => {
        this.page = res.data.pages
        console.log(this.page)
        console.log(res)
        this.sensorTable = res.data.records
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.query()
    this.timer = setInterval(() => {
      setTimeout(this.query, 0)
    }, 1000 * 10)
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
}
</script>

<style scoped>

</style>