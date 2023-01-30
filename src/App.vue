<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="links">
        <RouterLink to="/" active-class="active">Home</RouterLink>
        <div class="right-panel">
            <RouterLink to="/about" active-class="active">About</RouterLink>
            <RouterLink to="/contact-us" active-class="active" class="contact">Contact Us</RouterLink>
        </div>
    </div>
  <RouterView />
</template>

<style scoped>
.active {
  color: rgb(24, 155, 24);
  font-weight: bold;
}
.links {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
a {
    color: #a5921d;
}
a.contact {
    padding-left: 10px;
}
p{
    text-align: inherit;
}
</style>