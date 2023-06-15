<template>
  <div class="h-screen w-screen bg-gray-800 text-white grid grid-cols-8 gap-12 p-20">
    <div class="h-full col-span-1 rounded-sm flex flex-col">
      <!-- Prevent hydration mismatches -->
      <ClientOnly>
        <ClockWidget />
      </ClientOnly>
      <WeatherWidget />
    </div>
  </div>
</template>
