<script setup>
import MapContainer from '../components/MapContainer.vue'
</script>

<template>
  <div class="container">
    <h1>GreenGlobe Insights</h1>
    <br>
    <main>
      <MapContainer />
    </main>
  </div>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>