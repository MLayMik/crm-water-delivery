<script setup lang="ts">
import { LoginForm } from '@/features/auth/ui'
</script>

<template>
  <div
    class="
      relative flex h-screen w-full items-center justify-center
      bg-[url(/src/shared/assets/login_bg.jpg)] bg-cover bg-center
    "
  >
    <div
      class="
        absolute z-10 h-full max-h-[700px] w-full max-w-[540px] rounded-4xl
        bg-white
      "
    >
      <LoginForm />
    </div>
  </div>
</template>
