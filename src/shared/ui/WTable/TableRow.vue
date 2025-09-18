<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from '@/shared/lib/styles'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tr
    data-slot="table-row"
    :class="cn('W:hover:bg-muted/50 W:data-[state=selected]:bg-muted W:border-b W:transition-colors', props.class)"
  >
    <slot />
  </tr>
</template>
