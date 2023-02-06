<script setup>
import { ref } from 'vue';
const services = ref([]);
</script>
<template>
    <div class="services-wrapper">
        <h2>Car Service Center</h2>
        <div class="services-list">
            <div v-if="services.length > 0">{{ services }}</div>
        </div>
        <div class="services">
            <div class="service"><input type="checkbox" value="Change the engine oil" v-model="services" /><label
                    for="Change the engine oil">Change the engine oil</label>
            </div>

            <div class="service"><input type="checkbox" value="Replace the oil filter" v-model="services" /><label
                    for="Replace the oil filter">Replace the oil filter</label>
            </div>

            <div class="service"><input type="checkbox" value="Replace the air filter" v-model="services" /><label
                    for="Replace the air filter">Replace the air filter</label>
            </div>

            <div class="service"><input type="checkbox" value="Replace the fuel filter" v-model="services" /><label
                    for="Replace the fuel filter">Replace the fuel filter</label>
            </div>

            <div class="service"><input type="checkbox" value="Check brake pads/drums" v-model="services" /><label
                    for="Check brake pads/drums">Check brake pads/drums</label>
            </div>

            <div class="service"><input type="checkbox" value="Refill brake fluid / clutch fluid"
                    v-model="services" /><label for="Refill brake fluid / clutch fluid">Refill brake fluid / clutch
                    fluid</label>
            </div>

        </div>
    </div>
</template>

<style scoped>
.services {
    display: flex;
    flex-direction: column;
}
.services-list {
    margin: 10px 0 20px;
}
.service {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 5px;
}
</style>