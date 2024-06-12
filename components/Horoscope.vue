<template>
  <div>
    <h1>Horoscope</h1>
    <p v-if="pending">Chargement...</p>
    <p v-else>{{ data }}</p>
  </div>
</template>

<script lang="ts" setup>
const { pending, data } = useFetch("/api/horoscope");
</script>

<style></style>
