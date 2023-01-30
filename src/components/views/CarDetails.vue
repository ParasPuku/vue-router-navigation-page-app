<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import car_data from '../data/Cardata.json'
const car = ref(null)
const route = useRoute();
const id = route.params.id;
const router = useRouter();

onMounted(() => {
    const single_car = car_data.cars.find(c => c.id === parseInt(id));
    car.value = single_car;
    console.log("CARSSSSS", car)
})
</script>

<template>
    <div class="car-details-wrapper">
        <div class="car-wrapper" v-if="car">
            <div class="car-details">Car Details</div>
            <div>
                <div class="car-icon"><img src="../../assets/logo.svg" alt="car-icon" /></div>
                <div><b>Name: </b>{{ car.name }}</div>
                <div><b>Description: </b>{{ car.description }}</div>
            </div>
            <!-- <button @click="router.back()">Back</button> -->
            <div class="btns">
                <button @click="router.push({
                path: `/car-details/${car.id}/car-contact`, query: {
                    showroom: `${car.details.showroom}`,
                    contact: `${car.details.contact}`,
                    city: `${car.details.city}`,
                    pincode: `${car.details.pincode}`,
                    state: `${car.details.state}`,
                    country: `${car.details.country}`,
                }
            })">Contact US</button>
            <button @click="router.push(`/car-details/${car.id}/car-service`)">Car Service</button>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.car-icon {
    width: 80px;
    height: auto;
}

.car-details {
    text-align: center;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 25px;
}
.btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
</style>
