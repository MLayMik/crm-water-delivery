<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/styles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="table-container" class="W:relative W:w-full W:overflow-auto">
    <table
      data-slot="table"
      :class="cn('W:w-full W:caption-bottom W:text-sm', props.class)"
    >
      <slot />
    </table>
  </div>
</template>
