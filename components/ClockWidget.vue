<script lang="ts" setup>
import { DateTime } from 'luxon';

const date = computed(() => DateTime.fromJSDate(new Date).toFormat('dd/mm/yyyy'))
const time = ref('')

const today = new Date()
const hours = today.getHours()
const minutes = today.getMinutes()
const seconds = today.getSeconds()

const paddedHours = hours >= 10 ? hours : `0${hours}`
const paddedMinutes = minutes >= 10 ? minutes : `0${minutes}`
const paddedSeconds = seconds >= 10 ? seconds : `0${seconds}`

time.value = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`

onMounted(() => setInterval(() => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const paddedHours = hours >= 10 ? hours : `0${hours}`
  const paddedMinutes = minutes >= 10 ? minutes : `0${minutes}`
  const paddedSeconds = seconds >= 10 ? seconds : `0${seconds}`

  time.value = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}, 1000))
</script>

<template>
  <span class="text-lime-600 text-7xl">{{ date }}</span>
  <span class="text-pink-600 text-6xl">{{ time }}</span>
</template>
