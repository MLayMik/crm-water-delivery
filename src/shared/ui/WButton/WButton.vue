<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/shared/lib/styles'

interface Props {
  variant?: 'primary' | 'white' | 'light' | 'link' | 'link-white'
  class?: string
  disabled?: boolean
}

const props = defineProps<Props>()

const buttonClasses = computed(() => {
  const variantClasses = {
    'primary': 'bg-blue-600 text-white hover:bg-blue-700',
    'white': 'bg-white text-gray-900 hover:bg-zinc-200',
    'light': 'bg-gray-100 text-gray-900 hover:bg-gray-300',
    'link': 'text-white hover:text-zinc-100',
    'link-white': 'text-blue-600 hover:text-blue-800',
  }
  return cn(
    'rounded-xl px-3 py-2 whitespace-nowrap transition-colors duration-300',
    variantClasses[props.variant || 'primary'],
    props.class,
  )
})
</script>

<template>
  <button :class="buttonClasses" :disabled="props.disabled">
    <slot />
  </button>
</template>
