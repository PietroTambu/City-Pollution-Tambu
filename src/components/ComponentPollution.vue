<template>
  <div style="width: fit-content; margin: auto">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
      <div class="div-main">
        <b-overlay :show="showInput" rounded="sm" variant="secondary" opacity="0.85" blur="2px">
          <div class="title">
            <h1 class="PottaOne gray-1">City Pollution</h1>
            <hr>
            <h6 class="Fraunces gray-3">Discover Air Quality Index around the world.</h6>
            <h6 class="Fraunces gray-3">Use one of the following search methods</h6>
          </div>
          <b-tabs v-model="tabIndexInputType" pills card fill>
            <b-tab title="City name" @click="update_search_type_preference('city')" :title-link-class="linkClassInputType(0)" :active="active_city">
              <div class="div-style">
                <h3 class="title-search">Insert name of the city:</h3>
                <input
                  v-model="inputCity"
                  placeholder="insert city name"
                  v-on:keyup.enter="$event.target.blur(); get('city')"
                  v-bind:class="{'form-control is-invalid': inputCityError}"
                />
                <small class="text-danger">{{ textDangerInputCity }}</small>
                <div><button @click="$event.target.blur(); get('city')">Search</button></div>
              </div>
            </b-tab>
            <b-tab title="Geo-coordinates" @click="update_search_type_preference('coords')" :title-link-class="linkClassInputType(1)" :active="active_coords">
              <div class="div-style">
                <h3 class="title-search">Insert geo-coordinates:</h3>
                <input
                  v-model="inputLat"
                  placeholder="Latitude"
                  v-on:keyup.enter="$event.target.blur(); get('coords')"
                  v-bind:class="{'form-control is-invalid': inputCoordsError}"
                />
                <input
                  v-model="inputLon"
                  placeholder="Longitude"
                  v-on:keyup.enter="$event.target.blur(); get('coords')"
                  v-bind:class="{'form-control is-invalid': inputCoordsError}"
                />
                <div><small class="text-danger">{{ textDangerInputCoords }}</small></div>
                <button @click="$event.target.blur(); get('coords')">Search</button>
              </div>
            </b-tab>
            <b-tab title="GPS location" @click="update_search_type_preference('gps')" :title-link-class="linkClassInputType(2)" :active="active_gps">
              <div class="div-style">
                <h3 class="title-search">Get AQI from your GPS position:</h3>
                <button @click="get('gps')">Search</button>
              </div>
            </b-tab>
            <b-tab title="IP location" @click="update_search_type_preference('ip')" :title-link-class="linkClassInputType(3)" :active="active_ip">
              <div class="div-style">
                <h3 class="title-search">Get AQI from your IP position:</h3>
                <button @click="get('here')">Search</button>
              </div>
            </b-tab>
          </b-tabs>
        </b-overlay>
        <div>
          <b-tabs v-model="tabIndexInfo" pills card fill>
            <b-tab :title="'AQI: ' + aqi" :title-link-class="linkClassInfo(0)" active>
              <b-card bg-variant="AQI_Hazardous" text-variant="white" header="Hazardous" class="text-center" v-if=" aqi > 300">
                <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
                <p class="card-text">{{ name }}</p>
                <p class="card-text">Health alert: everyone may experience more serious health effects</p>
              </b-card>
              <b-card bg-variant="AQI_Very_Unhealthy" text-variant="white" header="Very Unhealthy" class="text-center" v-else-if=" aqi > 200">
                <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
                <p class="card-text">{{ name }}</p>
                <p class="card-text">Health warnings of emergency conditions. The entire population is more likely to be affected</p>
              </b-card>
              <b-card bg-variant="AQI_Unhealthy" text-variant="white" header="Unhealthy" class="text-center" v-else-if=" aqi > 150">
                <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
                <p class="card-text">{{ name }}</p>
                <p class="card-text">Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</p>
              </b-card>
              <b-card bg-variant="AQI_Unhealthy_Sensitive" text-variant="white" header="Unhealthy for Sensitive Groups" class="text-center" v-else-if=" aqi > 100">
                <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
                <p class="card-text">{{ name }}</p>
                <p class="card-text">Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>
              </b-card>
              <b-card bg-variant="AQI_Moderate" text-variant="white" header="Moderate" class="text-center" v-else-if=" aqi > 50">
                <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
                <p class="card-text">{{ name }}</p>
                <p class="card-text">Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>
              </b-card>
              <b-card bg-variant="AQI_Good" text-variant="white" header="Good" class="text-center" v-else-if=" aqi <= 50">
                <p class="card-text font-weight-bold">AQI: {{ aqi }}</p>
                <p class="card-text">{{ name }}</p>
                <p class="card-text">Air quality is considered satisfactory, and air pollution poses little or no risk</p>
              </b-card>
            </b-tab>
            <b-tab :title="name + ' (info)'" :title-link-class="linkClassInfo(1)">
              <b-card bg-variant="secondary" text-variant="light" header="Information:">
                <p class="card-text">{{ longName }}</p>
                <p class="card-text font-weight-bold">Coordinates:</p>
                <p class="card-text">Latitude: {{ lat }}</p>
                <p class="card-text">Longitude: {{ lon }}</p>
              </b-card>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import $ from 'jquery'
import service from '../js/service'
import lodash from '../js/lodash'

export default {
  name: 'ComponentPollution',
  data () {
    return {
      Data: {},
      aqi: '-',
      aqi_color: '#6c757d',
      longName: '',
      name: 'Location: -',
      lat: '',
      lon: '',
      inputCity: '',
      inputLat: '',
      inputLon: '',
      tabIndexInputType: 0,
      tabIndexInfo: 0,
      tabIndexMain: 0,
      showMain: true,
      showInput: false,
      inputCityError: false,
      inputCoordsError: false,
      textDangerInputCity: '',
      textDangerInputCoords: '',
      active_city: this.$store.state.active_city,
      active_coords: this.$store.state.active_coords,
      active_gps: this.$store.state.active_gps,
      active_ip: this.$store.state.active_ip
    }
  },
  methods: {
    async get (usage) {
      let error = false
      if (usage === 'city') {
        this.showInput = !this.showInput
        if (this.inputCity === '') {
          this.inputCityError = true
          error = true
          this.textDangerInputCity = 'Input cannot be empty!'
        } else if ((this.inputCity.includes('/')) || (this.inputCity.includes('\\'))) {
          this.inputCityError = true
          this.textDangerInputCity = 'Input cannot contain / or \\'
          error = true
        } else {
          this.data = await service.axiosRequest(usage, this.inputCity)
          if (this.data.status === 'error') {
            this.inputCityError = true
            this.textDangerInputCity = 'City not found!'
            error = true
          } else {
            error = false
            this.inputCityError = false
            this.textDangerInputCity = ''
          }
        }
        this.showInput = !this.showInput
        this.inputCity = ''
      } else if (usage === 'coords') {
        this.showInput = !this.showInput
        if (this.inputLat === '') {
          this.inputCoordsError = true
          this.textDangerInputCoords = 'Input cannot be empty!'
          error = true
        } else if (this.inputLon === '') {
          this.inputCoordsError = true
          this.textDangerInputCoords = 'Input cannot be empty!'
          error = true
        } else if ((this.inputLon.includes('/')) || (this.inputLon.includes('\\')) || (this.inputLat.includes('/')) || (this.inputLat.includes('\\'))) {
          this.inputCoordsError = true
          this.textDangerInputCoords = 'Input cannot contain / or \\'
          error = true
        } else {
          this.data = await service.axiosRequest(usage, null, this.inputLat, this.inputLon)
          if (this.data.status === 'error') {
            this.inputCoordsError = true
            this.textDangerInputCoords = 'Location not found, retry...'
            error = true
          } else {
            this.inputCoordsError = false
            this.textDangerInputCoords = ''
            error = false
          }
        }
        this.showInput = !this.showInput
        this.inputLat = ''
        this.inputLon = ''
      } else if (usage === 'gps') {
        this.showInput = !this.showInput
        const permission = await navigator.permissions.query({ name: 'geolocation' })
        if (permission.state === 'denied') {
          error = true
          alert('GPS position is not allowed, give permission and reload...')
        } else {
          this.data = await service.axiosRequest(usage)
          error = false
        }
        this.showInput = !this.showInput
      } else {
        this.showInput = !this.showInput
        this.data = await service.axiosRequest(usage)
        this.showInput = !this.showInput
      }
      if (!error) {
        this.data = lodash.lodashCheck(this.data.data)
        this.lat = this.data.lat
        this.lon = this.data.lon
        this.longName = this.data.longName
        this.name = this.longName.substr(0, this.longName.indexOf(','))
        if (this.name === '') { this.name = this.data.longName }
        this.aqi = this.data.aqi
        if (this.aqi > 300) {
          this.aqi_color = '#75151e'
        } else if (this.aqi > 200) {
          this.aqi_color = '#6f42c1'
        } else if (this.aqi > 150) {
          this.aqi_color = '#dc3545'
        } else if (this.aqi > 100) {
          this.aqi_color = '#fd7e14'
        } else if (this.aqi > 50) {
          this.aqi_color = '#ffc107'
        } else if (this.aqi <= 50) {
          this.aqi_color = '#28a745'
        }
        console.log(this.data)
      }
    },
    linkClassInputType (idx) {
      if (this.tabIndexInputType === idx) {
        return ['bg-gray', 'text-light', 'font-weight-bold', 'border', 'border-dark']
      } else {
        return ['bg-light', 'text-dark', 'border', 'border-secondary']
      }
    },
    linkClassInfo (idx) {
      if (this.tabIndexInfo === idx) {
        $('.div-main').css({ border: '2px solid ' + this.aqi_color })
        return ['bg-gray', 'text-light', 'font-weight-bold', 'border', 'border-secondary']
      } else {
        return ['bg-light', 'text-dark', 'border', 'border-secondary']
      }
    },
    update_search_type_preference (para) {
      if (para === 'city') {
        this.$store.commit('change_search_type_preference_city')
      } else if (para === 'coords') {
        this.$store.commit('change_search_type_preference_coords')
      } else if (para === 'gps') {
        this.$store.commit('change_search_type_preference_gps')
      } else if (para === 'ip') {
        this.$store.commit('change_search_type_preference_ip')
      }
    }
  },
  mounted () {
    setTimeout(
      () => {
        this.showMain = !this.showMain
      }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/custom.scss';

input {
  width: 90%;
  height: 40px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
}

button {
  border: 1px solid #000;
  background-color: $gray;
  color: rgb(255, 255, 255);
  padding: 0;
  max-width: 120px;
  max-height: 40px;
  width: 20vw;
  height: 10vw;
  font-size: 20px;
  transition: box-shadow 0.2s;
  margin-top: 15px;
  border-radius: 10px;
}
button:hover {
  transition: box-shadow 0.2s;
  box-shadow: 0 0 3px #000;
}
.PottaOne {
  font-family: PottaOne;
}
.Fraunces {
  font-family: Fraunces;
}
.gray-1 {
  color: #343434;
}
.gray-2 {
  color: #484848;
}
.gray-3 {
  color: #7c7c7c;
}
.title {
  width: fit-content;
  margin: auto;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.div-main {
  max-width: 650px;
  width: 650px;
  margin: 30px auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(243, 243, 243, 0.85);
}
.div-style {
  width: 100%;
  margin: auto;
  border: 1px rgb(141, 141, 141) solid;
  border-radius: 10px;
  text-align: center;
  padding: 3rem 5vw;
  box-shadow: 0 0 5px rgb(54, 54, 54);
  transition: box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.4);
  font-family: Fraunces,monospace;
}
.div-style:hover {
  transition: box-shadow 0.7s;
  box-shadow: 0 0 10px rgb(77, 77, 77);
}
.title-search {
  margin-bottom: 15px;
  font-size: 25px;
}
@media screen and (max-width: 500px) {
  button, input {
    font-size: 5vw;
  }
  .aqi {
    font-size: 4vw;
  }
  .title-search {
    font-size: 5vw;
  }
  h6 {
    font-size: 3vw;
  }
}
@media screen and (max-width: 770px) {
  .div-main {
    width: fit-content;
  }
}
</style>
