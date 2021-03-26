<template>
  <div class="about">
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
      <!--
      <h3>Utilities:</h3>
      <p>
        <a href="https://firebase.google.com/" target="_blank">Google Firebase</a>
        <img src="../assets/firebase.png" alt="Firebase Logo" width="50" height="50" style="margin-left: 10px">
      </p>
      <p>
        <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a>
        <img src="../assets/stackoverflow.png" alt="Stack Overflow Logo" width="70" height="70" style="margin-left: 10px">
      </p>
      <p>
        <a href="https://vuejs.org/" target="_blank">Vue JS framework</a>
        <img src="../assets/vue-js.png" alt="Vue JS Logo" width="50" height="50" style="margin-left: 10px">
      </p>
      <p>
        <a href="https://aqicn.org/map/world/" target="_blank">World Air Quality Index "AQICN"</a>
        <img src="../assets/aqicn-logo.png" alt="AQICN Logo" width="50" height="50" style="margin-left: 10px">
      </p>
      <hr>
      <b-container fluid="sm" class="text-center">
        <b-row>
          <b-col class="bg-dark text-light rounded-left border border-secondary">Name</b-col>
          <b-col class="bg-dark text-light border border-secondary">Utility</b-col>
          <b-col class="bg-dark text-light rounded-right border border-secondary">Icon</b-col>
        </b-row>
        <b-row class="text-center">
          <b-col class="bg-light text-dark rounded-left border border-secondary" align-self="center"><p class="table-p">Google Firebase</p></b-col>
          <b-col class="bg-light text-dark border border-secondary"><p class="table-p">Hosting site</p></b-col>
          <b-col class="bg-light text-dark rounded-right border border-secondary">
            <img src="../assets/firebase.png" alt="Google Firebase" width="50" height="50">
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col class="bg-light text-dark rounded-left border border-secondary" align-self="center"><p class="table-p">Stack Overflow</p></b-col>
          <b-col class="bg-light text-dark border border-secondary"><p class="table-p">Learn notions</p></b-col>
          <b-col class="bg-light text-dark rounded-right border border-secondary">
            <img src="../assets/stackoverflow.png" alt="Google Firebase" width="50" height="50">
          </b-col>
        </b-row>
      </b-container>
      <hr>
      -->
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
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      fields: ['name', 'utility', 'icon'],
      items: [
        { name: { name: 'Google Firebase', url: 'https://firebase.google.com/' }, utility: 'Hosting', icon: '/img/firebase.a6c26916.png', _rowVariant: 'light' },
        { name: { name: 'Stack Overflow', url: 'https://stackoverflow.com/' }, utility: 'Learn notions', icon: '/img/stackoverflow.5233a552.png', _rowVariant: 'light' },
        { name: { name: 'Vue.js Framework', url: 'https://vuejs.org/' }, utility: 'Platform Framework', icon: '/img/vue-js.96e5850d.png', _rowVariant: 'light' },
        { name: { name: 'World Air Quality Index', url: 'https://aqicn.org/map/world/' }, utility: 'Receive data', icon: '/img/aqicn-logo.41bab77c.png', _rowVariant: 'light' }
      ],
      tableVariants: ['primary', 'secondary', 'info', 'danger', 'warning', 'success', 'light', 'dark'],
      dark: true,
      bordered: true
    }
  },
  methods: {
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
  background-color: rgba(255, 255, 255, 0.6);
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
