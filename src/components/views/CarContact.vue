<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("Route", route.query)
const { showroom, contact, city, pincode, state, country } = route.query;
console.log(showroom, contact, city, pincode, state, country)
</script>
<template>
    <div>
        <h2><b>Name: </b> {{ showroom }}</h2>
        <div><b>Mobile: </b>{{ contact }}</div>
        <div><b>City: </b>{{ city }}</div>
        <div><b>Pincode: </b>{{ pincode }}</div>
        <div><b>State: </b>{{ state }}</div>
        <div><b>Country: </b>{{ country }}</div>
    </div>
</template>

<style>

</style>