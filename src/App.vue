<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" toggleable="sm">
      <b-navbar-toggle target="nav_collapse" class="mx-auto"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse" class="mx-auto">
        <b-navbar-nav class="mx-auto">
          <!-- <b-nav-item to="/guide">Guide</b-nav-item> -->
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "scss/custom";

@font-face {
  font-family: JosefinSans;
  src: url("./fonts/JosefinSans-VariableFont_wght.ttf");
}
@font-face {
  font-family: Lobster;
  src: url("./fonts/Lobster-Regular.ttf");
}
@font-face {
  font-family: PottaOne;
  src: url("./fonts/PottaOne-Regular.ttf");
}
@font-face {
  font-family: Fraunces;
  src: url("./fonts/Fraunces_9pt-Regular.ttf");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
body {
  overflow-x: hidden;
  background-color: #e06900;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23ca002c' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a70022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c6004c' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23a3003c' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c0006a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%239d0055' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23b7008a' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2394006e' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
   /*
  background-color: #003fc7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23003fc7'/%3E%3Cstop offset='1' stop-color='%23d1d1d1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2303ffea' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2303ffea' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2303ffea' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2303ffea' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.62'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
    */
}
</style>
