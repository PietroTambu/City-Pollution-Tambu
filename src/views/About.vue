<template>
  <div class="about">
    <div class="div-main">
      <h2>This is an about page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>Working progress...</h3>
      <p> Github: <a href="https://github.com/PietroTambu/city-pollution-codemotion" target="_blank">City Pollution Codemotion</a></p>
      <p><a href="https://firebase.google.com/" target="_blank">Google Firebase</a></p>
      <p><a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a></p>
      <p><a href="https://vuejs.org/" target="_blank">Vue JS framework</a></p>
      <p><a href="https://aqicn.org/map/world/" target="_blank">Air Pollution in World API</a></p>
      <img src="../assets/favicon.png" alt="logo" width="100" height="100">
    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}

</script>

<style lang="scss" scoped>

.div-main {
  width: 65vw;
  max-width: 600px;
  margin: auto;
  border: 2px black solid;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 30px;
  padding: 20px;
}

</style>
