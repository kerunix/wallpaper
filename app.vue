<script setup lang="ts">
const foo = ref('')

onMounted(() => setTimeout(() => {
  foo.value = 'AH QUE COUCOU'
}, 10000))
</script>

<template>
      <div class="h-screen w-screen bg-background text-white flex items-center justify-center">
        <h1>Hello world</h1>
        <p>{{ foo }}</p>
  </div>
</template>
