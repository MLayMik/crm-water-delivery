<script setup lang="ts">
import { WFooter } from '@/widgets/WFooter'
import { WHeader } from '@/widgets/WHeader'
</script>

<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-gray-900 text-white"
  >
    <WHeader />
    <slot />
    <WFooter />
  </div>
</template>
