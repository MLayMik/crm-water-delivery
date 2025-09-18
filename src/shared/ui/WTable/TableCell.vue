<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/styles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    data-slot="table-cell"
    :class="
      cn(
        `
          W:p-2 W:align-middle W:whitespace-nowrap
          W:[&:has([role=checkbox])]:pr-0
          W:[&>[role=checkbox]]:translate-y-[2px]
        `,
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
