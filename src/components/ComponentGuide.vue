<template>
  <div style="width: fit-content; margin: auto">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
      <div class="div-main">
        <div class="header">
          <h1 class="PottaOne gray-2">Guide Page</h1>
          <h4 class="PottaOne gray-3">Welcome to City Pollution by Tambu</h4>
        </div>
        <hr>
        <h5 class="Fraunces gray-3">On this website you will be able to find out the AQI, "Air Quality Index", of most cities around the world.</h5>
        <hr>
        <h4 class="PottaOne gray-2">Choose from the 4 different types of research:</h4>
        <table class="b-table" style="margin: auto">
          <b-table small :fields="fields" :items="items" responsive="sm" :bordered="bordered" :dark="dark">
            <template #cell(name)="data">
              <b class="gray-2" style="font-size: 20px">{{ data.value }}</b>
            </template>
            <template #cell(description)="data">
              <b class="gray-2">{{ data.value }}</b>
            </template>
            <template #cell(button)="data">
              <b-button variant="light-gray" class="border border-dark" @click="set_search_type_preference(data.value.url)">
                <b-icon-arrow-right></b-icon-arrow-right>
              </b-button>
            </template>
          </b-table>
        </table>
      </div>
    </b-overlay>
  </div>
</template>

<script>
// import $ from 'jquery'
import router from '@/router'

export default {
  name: 'ComponentGuide',
  data () {
    return {
      fields: [
        { key: 'name', tdClass: 'align-middle' },
        { key: 'description', tdClass: 'align-middle' },
        { key: 'button', tdClass: 'align-middle' }
      ],
      items: [
        { name: 'By city name', description: 'Nella modalità City Name basterà inserire nell\'apposito campo di input il nome di una città o di un comune.', button: { name: 'Search', url: 'city' }, _rowVariant: 'light' },
        { name: 'By Geo-coordinates', description: 'Nella modalità Geo-coordinates bisogna inserire nelle due caselle di input la latitudine e longitude in valori decimali', button: { name: 'Search', url: 'coords' }, _rowVariant: 'light' },
        { name: 'By GPS location', description: 'Nella modalità GPS ', button: { name: 'Search', url: 'gps' }, _rowVariant: 'light' },
        { name: 'By IP location', description: '', button: { name: 'Search', url: 'ip' }, _rowVariant: 'light' }
      ],
      tableVariants: ['primary', 'secondary', 'info', 'danger', 'warning', 'success', 'light', 'dark'],
      dark: true,
      bordered: true,
      showMain: true
    }
  },
  methods: {
    set_search_type_preference (parameter) {
      if (parameter === 'city') {
        this.$store.commit('change_search_type_preference_city')
      } else if (parameter === 'coords') {
        this.$store.commit('change_search_type_preference_coords')
      } else if (parameter === 'gps') {
        this.$store.commit('change_search_type_preference_gps')
      } else if (parameter === 'ip') {
        this.$store.commit('change_search_type_preference_ip')
      }
      router.push('/')
    }
  },
  mounted () {
    setTimeout(
      () => {
        this.showMain = !this.showMain
      }, 600)
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/custom.scss';

.PottaOne {
  font-family: PottaOne;
}
.Fraunces {
  font-family: Fraunces;
}
.gray-2 {
  color: #484848;
}
.gray-3 {
  color: #7c7c7c;
}
.header {
  margin: 2vw auto;
}
.div-main {
  max-width: 700px;
  margin: 30px auto;
  padding-left: 1vw;
  padding-right: 2vw;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(243, 243, 243, 0.85);
}
@media screen and (max-width: 500px) {
  button, input {
    font-size: 4vw;
  }
  .aqi {
    font-size: 3vw;
  }
  .title-search {
    font-size: 4vw;
  }
}
</style>
