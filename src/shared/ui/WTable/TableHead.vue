<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from '@/shared/lib/styles'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <th
    data-slot="table-head"
    :class="cn('W:text-muted-foreground W:h-10 W:px-2 W:text-left W:align-middle W:font-medium W:whitespace-nowrap W:[&:has([role=checkbox])]:pr-0 W:[&>[role=checkbox]]:translate-y-[2px]', props.class)"
  >
    <slot />
  </th>
</template>
