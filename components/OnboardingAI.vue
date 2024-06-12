<template>
  <div>
    <UTabs :items="tabs">
      <template #item="{ item }">
        <div v-if="item.id === 'genre'">
          <div class="grid grid-cols-2 gap-5 w-fit mx-auto">
            <UCard
              :class="{ selected: userConfiguration.genre === id }"
              v-for="{ name, id } in genres"
              @click="setConfig('genre', id)"
            >
              <h2>{{ name }}</h2>
            </UCard>
            <UCard
              :class="{ selected: userConfiguration.genre === custom.genre }"
              class="col-span-2"
              @click="setCustom('genre')"
            >
              <UInput placeholder="Personnalisé" v-model="custom.genre" />
            </UCard>
          </div>
        </div>
        <div v-if="item.id === 'main_character'">
          <div class="grid grid-cols-2 gap-5 w-fit mx-auto">
            <UCard
              :class="{ selected: userConfiguration.main_character === id }"
              v-for="{ name, id } in characters"
              @click="setConfig('main_character', id)"
            >
              <h2>{{ name }}</h2>
            </UCard>
            <UCard
              :class="{
                selected:
                  userConfiguration.main_character === custom.main_character,
              }"
              class="col-span-2"
              @click="setCustom('main_character')"
            >
              <UInput
                placeholder="Personnalisé"
                v-model="custom.main_character"
              />
            </UCard>
          </div>
        </div>
        <div v-if="item.id === 'secondary_character'">
          <div class="grid grid-cols-2 gap-5 w-fit mx-auto">
            <UCard
              :class="{
                selected: userConfiguration.secondary_character === id,
              }"
              v-for="{ name, id } in characters"
              @click="setConfig('secondary_character', id)"
            >
              <h2>{{ name }}</h2>
            </UCard>
            <UCard
              :class="{
                selected:
                  userConfiguration.secondary_character ===
                  custom.secondary_character,
              }"
              class="col-span-2"
              @click="setCustom('secondary_character')"
            >
              <UInput
                placeholder="Personnalisé"
                v-model="custom.secondary_character"
              />
            </UCard>
          </div>
        </div>
        <div v-if="item.id === 'place'">
          <div class="grid grid-cols-2 gap-5 w-fit mx-auto">
            <UCard
              :class="{
                selected: userConfiguration.place === id,
              }"
              v-for="{ name, id } in places"
              @click="setConfig('place', id)"
            >
              <h2>{{ name }}</h2>
            </UCard>
            <UCard
              :class="{
                selected: userConfiguration.place === custom.place,
              }"
              class="col-span-2"
              @click="setCustom('place')"
            >
              <UInput placeholder="Personnalisé" v-model="custom.place" />
            </UCard>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
const { genres, userConfiguration, characters, places } =
  useUserConfiguration();

const custom = reactive<Record<keyof typeof userConfiguration, string>>({
  genre: "",
  main_character: "",
  secondary_character: "",
  place: "",
  description: "",
});

function setConfig(key: keyof typeof userConfiguration, id: string) {
  userConfiguration[key] = id;
}

function setCustom(key: keyof typeof userConfiguration) {
  userConfiguration[key] = custom[key];
}

const tabs = ref([
  {
    label: "Genre",
    id: "genre",
  },
  {
    label: "Héros",
    id: "main_character",
  },
  {
    label: "Méchant",
    id: "secondary_character",
  },
  {
    label: "Lieu",
    id: "place",
  },
]);
</script>

<style scoped lang="scss">
.selected {
  border: 1px solid rgb(var(--color-primary-400));
}
</style>
