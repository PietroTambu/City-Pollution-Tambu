<template>
  <div style="width: fit-content; margin: auto">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px">
      <div class="div-main">
        <div class="header">
          <h1 class="PottaOne gray-2">Guide Page</h1>
          <h4 class="PottaOne gray-3">Welcome to City Pollution by Tambu</h4>
        </div>
        <hr>
        <h5 class="Fraunces gray-3">On this website you will be able to find out the AQI, "Air Quality Index", of most cities around the world.</h5>
      </div>
    </b-overlay>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'ComponentGuide',
  data () {
    return {
      showMain: true
    }
  },
  methods: {},
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
  width: 75vw;
  max-width: 800px;
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
