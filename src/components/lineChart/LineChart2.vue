<template>
  <v-card class="lineChart2"
          style="border-radius: 50px"
  >
    <v-row>
      <v-col
        cols="12"
        sm="3"
      >
        <v-container>
          <span id="temp" v-text="temputer"></span>
        </v-container>
      </v-col>
      <v-col
          cols="12"
          sm="6"
      >
        <v-container>
          <v-row>
            <v-container>
              <v-row>
                <v-col>
                  <span class="title2">Air Quality</span>
                </v-col>
                <v-col>
                  <v-card id="airQ" align="center">
                    <span id="qLevel">BEST</span>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
          <v-row>
            <v-container>
              <v-row>
                <v-col>
                  <span class="title2">Humidity</span>
                </v-col>
                <v-col>
                  <v-card id="humL" align="center">
                    <span id="hLevel">37%</span>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-container>
      </v-col>
      <v-col align-self="center">
        <v-img src="@/assets/images/Home/Sun.png" style="width: 88px; height: 68px"></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "LineChart2",
  data() {
    return {
      temputer: 17
    }
  }
}
</script>

<style scoped>
.lineChart2 {
  background: linear-gradient(180deg, #F1F1B8 0%, rgba(255, 255, 255, 0) 100%);
  height: 135px;
}
#temp {
  margin-top: 34px;
  margin-left: 29px;
  font-family: Alibaba PuHuiTi;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
  letter-spacing: 0em;
  text-align: left;
}

.title2{
  height: 16px;
  width: 80px;
}

#airQ {
  height: 26px;
  width: 105px;
  border-radius: 100px;
  box-shadow: 0px 4px 4px 0px #00000040 inset;
  background: linear-gradient(90deg, #17ACA3 0%, rgba(196, 196, 196, 0) 182.86%);
}

#qLevel {
  height: 26px;
  width: 39px;
  color: white;
  font-family: Alibaba PuHuiTi;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;

}

#humL {
  height: 26px;
  width: 105px;
  border-radius: 100px;
  box-shadow: 0px 4px 4px 0px #00000040 inset;
  background: #2983BB;
}

#hLevel {
  height: 26px;
  width: 39px;
  color: white;
  font-family: Alibaba PuHuiTi;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
}
</style>