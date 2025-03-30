<script setup>
    defineProps({
        item: Object
    })
</script>

<template>
    <UCard>
      <template #header>
        <Placeholder class="h-8">
            <h1>{{ item.nom }}</h1>
        </Placeholder>
      </template>
  
      <Placeholder class="h-32">
        <p>{{ item.description }}</p>
      </Placeholder> 
  
      <template #footer>
        <Placeholder class="h-8">
            <p>{{ item.style }}</p>
        </Placeholder>
      </template>
    </UCard>
</template>