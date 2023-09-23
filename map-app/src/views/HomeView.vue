<script setup>
import MapContainer from '../components/MapContainer.vue'
</script>

<template>
  <div class="container">
    <div class="header-container">
      <header class="centered-header">
        <h1 class="header">GreenGlobe Insights</h1>
      </header>
    </div>
    <main>
      <MapContainer />
    </main>
  </div>
</template>

<style>
@font-face {
  font-family: 'Nunito-Regular';
  font-weight: 400;
  src: local('Nunito-Regular'), url(../fonts/Nunito-Regular.ttf) format('truetype');
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  background-color: #24282A;
}

.centered-header {
  text-align: center;
  color: #fff;
  font-family: "Nunito-Regular";
  text-shadow: -2px -0.5px 3px #709775;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #1a2b39;
}
</style>