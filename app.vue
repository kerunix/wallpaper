<template>
  <div class="h-screen w-screen bg-gray-800 text-white grid grid-cols-8 gap-12 p-20">
    <div class="h-full col-span-1 rounded-sm flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
      <WeatherWidget />
    </div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60"></div>
    <div class="col-span-1 rounded-sm h-60 flex flex-col space-y-11">
      <!-- Prevent hydration mismatches -->
      <ClientOnly>
        <ClockWidget />
      </ClientOnly>
    </div>
    <div class="col-span-1 rounded-sm h-60"></div>

  </div>
</template>
