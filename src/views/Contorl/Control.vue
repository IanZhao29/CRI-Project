<template>
  <v-data-table
      :headers="headers"
      :items="sensorTable"
      :items-per-page="5"
      class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      headers: [
        {text: 'SensorId', value:'id'},
        {text: 'CO2', value:'CO2'},
      ],
      sensorTable:[
        {
          id: 1,
          CO2: '50%'
        },
        {
          id: 2,
          CO2: '50%'
        },
        {
          id: 3,
          CO2: '50%'
        },
        {
          id: 4,
          CO2: '50%'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>