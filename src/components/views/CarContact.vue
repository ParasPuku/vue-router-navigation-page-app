<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("Route", route.query)
const { showroom, contact, city, pincode, state, country } = route.query;
console.log(showroom, contact, city, pincode, state, country)
</script>
<template>
    <div class="showroom-contact">
        <h2 class="showroom-name">{{ showroom }}</h2>
        <div><b>Mobile: </b>{{ contact }}</div>
        <div><b>City: </b>{{ city }}</div>
        <div><b>Pincode: </b>{{ pincode }}</div>
        <div><b>State: </b>{{ state }}</div>
        <div><b>Country: </b>{{ country }}</div>
    </div>
</template>

<style lang="less" scoped>
.showroom-contact {
    .showroom-name {
        margin: 15px 0 20px;
    }
}
</style>

