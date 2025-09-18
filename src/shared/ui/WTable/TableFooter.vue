<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from '@/shared/lib/styles'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tfoot
    data-slot="table-footer"
    :class="cn('W:bg-muted/50 W:border-t W:font-medium W:[&>tr]:last:border-b-0', props.class)"
  >
    <slot />
  </tfoot>
</template>
