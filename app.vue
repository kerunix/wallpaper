<script setup lang="ts">
const date = computed(() => new Intl.DateTimeFormat('fr-FR').format(new Date()))
const time = ref('')

onMounted(() => setInterval(() => {
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()
  const seconds = new Date().getSeconds()

  const paddedHours = hours > 10 ? hours : `0${hours}`
  const paddedMinutes = minutes > 10 ? minutes : `0${minutes}`
  const paddedSeconds = seconds > 10 ? seconds : `0${seconds}`

  time.value = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}, 1000))
</script>

<template>
  <div class="h-screen w-screen bg-background text-white grid grid-cols-8 gap-12 p-20">
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60 flex flex-col space-y-11">
      <span class="text-green text-7xl">{{ date }}</span>
      <span class="text-pink text-6xl">{{ time }}</span>
    </div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
  </div>
</template>
