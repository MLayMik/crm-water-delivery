<script setup>
import AppLayout from '@/pages/layouts/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <RouterView :key="$route.fullPath" />
  </AppLayout>
</template>
