<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import data from "../data/Cardata.json";

const router = useRouter();
const route = useRoute();

const cars = ref(data.cars);
const carName = ref("");
const carPrice = ref("");

console.log("Router", router);
console.log("Route", route);

onMounted(() => {
  carName.value = route.query.carName;
  carPrice.value = route.query.carPrice;
})

watch([carName, carPrice], () => {
  if (carName.value) {
    if (carName.value === 'All') return cars.value = data.cars;
    cars.value = data.cars.filter(car => {
      return car.brand === carName.value;
    })
  }
  if (carPrice.value) {
    if (carPrice.value === 'any') return cars.value = data.cars;
    cars.value = cars.value.sort((a, b) => {
      if (carPrice.value === 'htl') return b.price - a.price;
      else return a.price - b.price;
    })
    console.log('CARS', cars);
  }
})

const handleChange = ((e) => {
  router.push({ query: { carName: carName.value, carPrice: carPrice.value } })
  console.log("Name", carName);
  console.log("Price", carPrice);
})


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../../assets/logo.svg" width="125" height="125" />
    <div class="car-heading">Worldwide cars collection</div>
  </header>
  <div class="car-selection">
    <div class="sort-by-name">
      <label for="Filter by brand">Filter by brand</label>
      <select v-model="carName" @change="handleChange">
        <option value="" disabled>Please select</option>
        <option value="All">All</option>
        <option value="Lamborgini">Lamborgini</option>
        <option value="Landrover">Land Rover</option>
        <option value="Rollsroyce">Rolls Royce</option>
        <option value="Bugati">Bugati</option>
        <option value="Audi">Audi</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Jaguar">Jaguar</option>
        <option value="Mclaren">Mc Laren</option>
      </select>
    </div>
    <div class="sort-by-price">
      <label for="Filter by price">Filter by price</label>
      <select v-model="carPrice" @change="handleChange">
        <option value="" disabled>Please select</option>
        <option value="any">Any</option>
        <option value="htl">High to Low</option>
        <option value="lth">Low to High</option>
      </select>
    </div>
  </div>
  <div class="wrapper">
    <div class="cars-section" v-for="car in cars" :key="car.id" @click="router.push(`/car-details/${car.id}`)">
      <img src="../../assets/logo.svg" alt="logo" class="car-icon" />
      <div class="cars-details">
        <div><b>Name:</b> {{ car.name }}</div>
        <div><b>Price: $</b> {{ car.price }}</div>
        <div><b>Model:</b> {{ car.model }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#app {
  .car-selection {
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      margin-left: 10px;
      padding: 4px;

      :active {
        border: none;
      }
    }
  }
}

.car-selection {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: stretch;
}

.cars-section {
  margin: 15px 15px 0 0;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 12px;
  min-width: 241px;
  box-shadow: 0px 1px 8px 1px #dedede;
  cursor: default;
  flex-wrap: wrap;
}

.cars-details {
  padding-left: 10px;
}

.car-icon {
  width: 50px;
  height: auto;
}

header {
  display: flex;
  place-items: center;
  justify-content: center;
}

.logo {
  margin: 0 1rem 0 0;
  display: block;
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
