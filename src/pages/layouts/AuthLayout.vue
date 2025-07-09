<template>
  <div>
    <RouterLink :to="{ name: 'Home' }">
      <img
        class="absolute top-4"
        src=""
        alt="logo"
      >
    </RouterLink>
    <slot />
  </div>
</template>
