<script setup lang="ts">
import { UContainer } from '#components';
import { ref, onMounted } from 'vue';
import Card_Item  from '@/components/Card_Item.vue';

const items = ref([])

onMounted(async () => {
  const response = await fetch('/objets.json');
  items.value = await response.json();
})

</script>

<template>
  <UApp>
    <UContainer>
      <NuxtLayout>
        <div>
          <NuxtRouteAnnouncer />
          <NuxtPage />
          <div v-for="item in items">
            <Card_Item :todo='item'/>
          </div>
        </div>
      </NuxtLayout>
    </UContainer>
  </UApp>
</template>
