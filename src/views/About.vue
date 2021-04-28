<template>
  <div style="width: fit-content; margin: auto">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
      <div class="div-main">
        <h2>City Pollution Tambu</h2>
        <img src="../assets/favicon.png" alt="logo" width="150" height="150" style="margin: 10px">
        <p style="font-family: JosefinSans, monospace"><Strong>High Tech High School 2021</Strong> Project / <Strong>S2I JavaScript Advanced</Strong></p>
        <p style="font-family: JosefinSans, monospace"></p>
        <p style="font-family: JosefinSans, monospace">by Pietro Tamburini <strong>Milano</strong></p>
        <hr>
        <h3>Source Code:</h3>
        <p> GitHub:
          <a href="https://github.com/PietroTambu/City-Pollution-Tambu" target="_blank">City-Pollution-Tambu </a>
          <img src="../assets/github.png" alt="GitHub Logo" width="50" height="50" style="margin-left: 10px">
        </p>
        <!--
        <hr>
        <a href="http://www.pietro-tamburini.epizy.com/City_Pollution_Tambu_APK/" alt="City Pollution Android" target="_blank" download>Download APK v. 1.0.1</a>
        <hr>
        <b-button v-b-toggle.collapse-demo-apk size="sm" variant="secondary">Try Phone Demo <b-icon-phone></b-icon-phone></b-button>
        <b-collapse id="collapse-demo-apk" class="mt-2">
          <div style="margin: auto;">
          <iframe
            src="https://appetize.io/embed/5h7hf41qc8gzvf8gykue3n0bww?device=nexus5"
            width="300px"
            height="600px"
            frameborder="0"
            scrolling="no"
          ></iframe>
          </div>
        </b-collapse>
        <hr>
        -->
        <table class="b-table">
          <b-table small :fields="fields" :items="items" responsive="sm" :bordered="bordered" :dark="dark">
            <template  #cell(name)="data">
              <b class="text-dark" ><a :href="data.value.url" target="_blank">{{ data.value.name }}</a></b>
            </template>
            <template #cell(utility)="data">
              <b class="text-dark">{{ data.value }}</b>
            </template>
            <template #cell(icon)="data">
              <img v-bind:src="data.value" alt="ok" width="50" height="50">
            </template>
          </b-table>
        </table>
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      fields: [
        { key: 'name', tdClass: 'align-middle' },
        { key: 'utility', tdClass: 'align-middle' },
        'icon'
      ],
      items: [
        { name: { name: 'Google Firebase', url: 'https://firebase.google.com/' }, utility: 'Hosting Service Provider', icon: '../assets/firebase.png', _rowVariant: 'light' },
        { name: { name: 'Stack Overflow', url: 'https://stackoverflow.com/' }, utility: 'Learn Knowledge', icon: '../assets/stackoverflow.png', _rowVariant: 'table-gray' },
        { name: { name: 'Vue.js Framework', url: 'https://vuejs.org/' }, utility: 'JavaScript Framework', icon: '../assets/vue-js.png', _rowVariant: 'light' },
        { name: { name: 'Webstorm for education', url: 'https://www.jetbrains.com/webstorm/' }, utility: 'JavaScript IDE', icon: '../assets/webstorm-icon.png', _rowVariant: 'table-gray' },
        { name: { name: 'World Air Quality Index', url: 'https://aqicn.org/map/world/' }, utility: 'Data Provider', icon: '../assets/aqicn-logo.png', _rowVariant: 'light' }
      ],
      dark: true,
      bordered: true,
      showMain: true
    }
  },
  methods: {
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

.b-table {
  margin: auto;
}

.div-main {
  max-width: 600px;
  margin: 30px auto;
  border: 2px black solid;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(243, 243, 243, 0.85);
  padding: 20px;
}
h3 {
  font-family: Fraunces;
  font-weight: 400;
}
h2 {
  font-family: PottaOne;
  color: #343434;
}
p,a,b {
  font-family: "Fraunces";
}
</style>
