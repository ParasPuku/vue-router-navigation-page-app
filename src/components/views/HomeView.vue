<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import data from "../data/Cardata.json";

const cars_data = ref(data);
const router = useRouter();
const route = useRoute();

console.log("Router", router);
console.log("Route", route);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="../../assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="car-heading">Worldwide cars collection</div>
  </header>
  <div class="wrapper">
    <div
      class="cars-section"
      v-for="car in cars_data.cars"
      :key="car.id"
      @click="router.push(`/car-details/${car.id}`)"
    >
      <img src="../../assets/logo.svg" alt="logo" class="car-icon" />
      <div class="cars-details">
        <div><b>Name:</b> {{ car.name }}</div>
        <div><b>Price:</b> {{ car.price }}</div>
        <div><b>Model:</b> {{ car.model }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: stretch;
}

.cars-section {
  margin: 15px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 12px;
  min-width: 215px;
  box-shadow: 0px 1px 8px 1px #dedede;
  cursor: default;
}

.cars-details {
  padding-left: 10px;
}

.car-icon {
  width: 50px;
  height: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  display: flex;
  place-items: center;
  justify-content: center;
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.car-heading {
  font-size: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-bottom: 1px solid #afafaf;
}
</style>
