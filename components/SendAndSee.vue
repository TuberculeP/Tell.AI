<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-5 p-5">
      <UCheckbox
        label="Genre"
        disabled
        :model-value="!!userConfiguration.genre?.length"
      />
      <UCheckbox
        label="Héros"
        disabled
        :model-value="!!userConfiguration.main_character?.length"
      />
      <UCheckbox
        label="Méchant"
        disabled
        :model-value="!!userConfiguration.secondary_character?.length"
      />
      <UCheckbox
        label="Lieu"
        disabled
        :model-value="!!userConfiguration.place?.length"
      />
    </div>
    <div class="flex flex-col flex-1">
      <UTextarea v-model="userConfiguration.description" />
      <div class="flex flex-1 justify-center items-end">
        <UButton
          label="Raconter !"
          :disabled="isButtonDisabled"
          @click="send"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { userConfiguration, genreDescription } = useUserConfiguration();
const { isLoading, lastResponse, imgURL } = useLastResponse();

const isButtonDisabled = computed(() => {
  return (
    !userConfiguration.genre?.length ||
    !userConfiguration.main_character?.length ||
    !userConfiguration.secondary_character?.length ||
    !userConfiguration.place?.length
  );
});

const histoire = ref("");

async function send() {
  isLoading.value = true;
  histoire.value =
    genreDescription[userConfiguration.genre as keyof typeof genreDescription];
  histoire.value += ` Le personnage principal de l'histoire est : ${userConfiguration.main_character}.`;
  histoire.value += ` Le personnage secondaire, le méchant de l'histoire est : ${userConfiguration.secondary_character}.`;
  histoire.value += ` L'histoire se déroule à : ${userConfiguration.place}.`;
  histoire.value += ` Voici une brève description de l'histoire qu'il faudra extrapoler : ${userConfiguration.description}`;

  const response = await $fetch("/api/mistral", {
    method: "POST",
    body: JSON.stringify({
      histoire: histoire.value,
    }),
  });
  const url = await $fetch("/api/openai", {
    method: "POST",
    body: JSON.stringify({
      prompt: histoire.value,
    }),
  });
  isLoading.value = false;
  lastResponse.value = response as string;
  imgURL.value = url as string;
}
</script>

<style></style>
