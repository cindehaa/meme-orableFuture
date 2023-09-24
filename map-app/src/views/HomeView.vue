<script setup>
import MapContainer from '../components/MapContainer.vue'
</script>

<template>
  <div class="container">
    <div class="header-container">
      <img src="../images/top-right.png" class="top-right-image" />
      <img src="../images/bottom-left.png" class="bottom-left-image" />

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
  font-family: 'Nunito-SemiBold';
  font-weight: 400;
  src: local('Nunito-SemiBold'), url(../fonts/Nunito-SemiBold.ttf) format('truetype');
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  background-color: #24282A;
  box-shadow: 25px 4px 6px rgba(255, 255, 255, 0.1);
  position: relative;
}

.top-right-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 9%;
}

.bottom-left-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 9%;
}

.centered-header {
  text-align: center;
}

.header {
  font-size: 48px;
  color: transparent;
  background: linear-gradient(to bottom, #fff, #709775);
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Nunito-SemiBold";
  /* text-shadow: -0.5px -0.5px 3px #709775; */
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #1a2b39;
}
</style>