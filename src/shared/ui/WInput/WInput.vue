<script setup lang="ts">
import type { ClassValue } from 'clsx'
import type { InputHTMLAttributes } from 'vue'

import { cn } from '@/shared/lib/styles'

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  class?: ClassValue
  label?: string
  small?: boolean
  type?: string
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<Props>()

const modelValue = defineModel<string>()
</script>

<template>
  <div class="w-full">
    <label
      v-if="props.label"
      class="
        mb-1 inline-block text-sm font-medium text-slate-700 transition-colors
      "
    >
      {{ props.label }}
    </label>

    <input
      v-model="modelValue"
      v-bind="$attrs"
      :type="props.type || 'text'"
      :class="cn(
        `
          w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-base
          text-slate-800 shadow-sm transition-all duration-200 ease-in-out
          placeholder:text-slate-400 placeholder:transition-opacity
          placeholder:duration-200
          hover:border-slate-400
          focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30
          focus:outline-none
          disabled:cursor-not-allowed disabled:opacity-50
        `,
        props.small && 'px-3 py-1.5 text-sm',
        props.class,
      )"
    >
  </div>
</template>
