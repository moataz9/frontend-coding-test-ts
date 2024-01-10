<template>
  <div
    class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100 text-center"
  >
    <router-view />
    <div
      v-show="toast.visible"
      class="px-5 py-3 text-xl rounded-md bg-green-500 text-white fixed bottom-6 right-6 z-50"
    >
      <button
        class="text-green-500 bg-white rounded-full w-8 h-8"
        v-on:click="toast.visible = false"
      >
        X
      </button>
      <span class="inline-block mx-3"> {{ toast.message }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useToast from './composables/useToast'

const { toast } = useToast()
</script>
