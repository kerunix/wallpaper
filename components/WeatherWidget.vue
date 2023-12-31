<script lang="ts" setup>
interface WeatherData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: HourlyData
}

interface HourlyUnits {
  time: string
  temperature_2m: string
  relativehumidity_2m: string
  precipitation_probability: string
  precipitation: string
}

interface HourlyData {
  time: string[]
  temperature_2m: number[]
  relativehumidity_2m: number[]
  precipitation_probability: number[]
  precipitation: number[]
}

import { DateTime } from 'luxon'


const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.60&longitude=1.44&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation&forecast_days=1';
const { data } = useFetch<WeatherData>(url)

function formatISODate(date: string, format: string) {
  return DateTime.fromISO(date).setLocale('fr').toFormat(format)
}

onMounted(() => console.log(data.value))

function getIconName(weatherData: HourlyData['precipitation_probability'][number]) {
  if (weatherData > 25) {
    return 'wi:day-rain-mix'
  }
  if (weatherData > 50) {
    return 'wi:day-showers'
  }
  return 'wi:day-sunny'
}
</script>

<template>
  <div v-if="!data">No weather data</div>
  <template v-else>
    <div v-for="(hour, index) in data.hourly.time" class="p-1 flex flex-col odd:bg-pink">
      <div class="flex items-center justify-between">
        <span class="text-gray-50 text-sm">{{ formatISODate(hour, 'HH:mm') }}</span>
        <div class="flex items-center space-x-3">
          <Icon :name="getIconName(data.hourly.precipitation_probability[index])" color="white" size="24px" />
          <span class="text-sm">{{ data.hourly.temperature_2m[index].toFixed() }}°</span>
        </div>
      </div>
    </div>
  </template>
</template>
