<script setup lang="ts">
definePageMeta({
    layout: 'custom',
    title: 'Test Page',
})
</script>
<template>
    <div class="bg-black min-h-screen w-screen">
        <div class="max-w-screen-xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-8 md:grid-rows-6 lg:grid-rows-3 gap-5 p-5">
            <div style="background: linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05));opacity: 0.2;backdrop-filter: blur(40px);" class="rounded-xl md:col-span-2">
                <div class="h-full w-full grid place-items-center text-white">1</div>
            </div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:row-start-2 lg:row-start-1 lg:col-start-3">2</div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:row-start-2 lg:row-start-1 lg:col-start-4">3</div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:col-span-2 lg:col-span-1 md:row-start-3 lg:row-start-2">4</div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:row-start-4 lg:row-start-2 lg:col-span-2 lg:col-start-2">5</div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:row-start-4 lg:row-start-2 lg:col-start-4">6</div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:row-start-5 md:col-span-2 lg:row-start-3 lg:col-span-2">7</div>
            <div class="bg-white/10 rounded-xl backdrop-blur-lg md:row-start-6 md:col-span-2 lg:row-start-3 lg:col-span-2">8</div>

        </div>
    </div>
</template>