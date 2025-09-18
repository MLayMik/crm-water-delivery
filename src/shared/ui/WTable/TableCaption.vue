<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from '@/shared/lib/styles'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <caption
    data-slot="table-caption"
    :class="cn('W:text-muted-foreground W:mt-4 W:text-sm', props.class)"
  >
    <slot />
  </caption>
</template>
