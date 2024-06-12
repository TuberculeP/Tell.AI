<template>
  <h1 class="text-2xl p-5 text-bold text-center">Tell.AI</h1>
  <ClientOnly>
    <div class="my-5 mx-auto w-fit flex gap-10">
      <OnboardingAI />
      <SendAndSee />
    </div>
    <div>
      <p v-if="isLoading">Chargement de l'histoire ...</p>
      <div v-else>
        <img :src="imgURL as string" alt="" />
        <div class="text" v-html="lastResponse"></div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const { isLoading, lastResponse, imgURL } = useLastResponse();
</script>

<style>
div.text p {
  text-align: justify;
  line-height: 2;
  max-width: 500px;
  margin: 25px auto;
}
img {
  max-width: 500px;
  height: auto;
  margin: 20px auto;
  display: block;
}
</style>
