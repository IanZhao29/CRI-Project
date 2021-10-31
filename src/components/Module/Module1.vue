<template>
  <v-container>
    <v-card
        class="Module1"
        style="border-radius: 50px"
    >
      <v-row>
        <v-col
            cols="12"
            sm="1"
        ></v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  class="picker"
                  v-model="date"
                  label="Date:"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                no-title
                scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menu = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols:="12"
            sm="3"
        >
          <v-select
              label="Area:"
              outlined
          >
          </v-select>
        </v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-text-field
              label="ID:"
              outlined
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-btn style="background-color: #17ACA3; color: white; width: 100px; height: 40px; margin-top: 8px">
            QUERY
          </v-btn>
        </v-col>
      </v-row>
      <!--        <line-chart2></line-chart2>-->
      <!--        <line-chart3></line-chart3>-->
      <v-row>
        <v-col>
          <v-container>
            <line-chart1></line-chart1>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <line-chart2></line-chart2>
            <line-chart3></line-chart3>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import LineChart1 from "../lineChart/LineChart1";
import LineChart2 from '../lineChart/LineChart2'
import LineChart3 from '../lineChart/LineChart3'

export default {
  name: "Module1",
  data() {
    return {}
  },
  components: {
    LineChart1,
    LineChart2,
    LineChart3
  }
}
</script>

<style lang="scss" scoped>
</style>