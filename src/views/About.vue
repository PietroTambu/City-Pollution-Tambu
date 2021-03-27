<template>
  <div class="about">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: fit-content; margin: auto">
      <div class="div-main">
        <h2>City Pollution Tambu</h2>
        <img src="../assets/favicon.png" alt="logo" width="150" height="150" style="margin: 10px">
        <p style="font-family: JosefinSans, monospace"><Strong>Codemotion 2021</Strong> project by Pietro Tamburini <strong>Milano</strong></p>
        <hr>
        <h3>Source Code:</h3>
        <p> GitHub:
          <a href="https://github.com/PietroTambu/city-pollution-codemotion" target="_blank">City Pollution Codemotion </a>
          <img src="../assets/github.png" alt="GitHub Logo" width="50" height="50" style="margin-left: 10px">
        </p>
        <hr>
        <b-table small :fields="fields" :items="items" responsive="sm" :dark="dark" :bordered="bordered">
          <template #cell(name)="data">
            <b class="text-dark"><p :href="data.value.url" class="table-p" target="_blank">{{ data.value.name }}</p></b>
          </template>
          <template #cell(utility)="data">
            <b class="text-dark"><p class="table-p">{{ data.value }}</p></b>
          </template>
          <template #cell(icon)="data">
            <img v-bind:src="data.value" alt="ok" width="50" height="50">
          </template>
        </b-table>
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      fields: ['name', 'utility', 'icon'],
      items: [
        { name: { name: 'Google Firebase', url: 'https://firebase.google.com/' }, utility: 'Hosting Service Provider', icon: '../assets/firebase.png', _rowVariant: 'light' },
        { name: { name: 'Stack Overflow', url: 'https://stackoverflow.com/' }, utility: 'Learn Knowledge', icon: '../assets/stackoverflow.png', _rowVariant: 'light' },
        { name: { name: 'Vue.js Framework', url: 'https://vuejs.org/' }, utility: 'Development Platform', icon: '../assets/vue-js.png', _rowVariant: 'light' },
        { name: { name: 'World Air Quality Index', url: 'https://aqicn.org/map/world/' }, utility: 'Data Provider', icon: '../assets/aqicn-logo.png', _rowVariant: 'light' }
      ],
      tableVariants: ['primary', 'secondary', 'info', 'danger', 'warning', 'success', 'light', 'dark'],
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

.table-p{
  margin-bottom: 15px;
  margin-top: 15px;
}

.div-main {
  max-width: 550px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px black solid;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
}

h3 {
  font-family: Fraunces;
  font-weight: 400;
}
h2 {
  font-family: PottaOne;
}
p,a {
  font-family: "Nirmala UI", monospace;
}
</style>
