<script setup lang="ts">
import { Droplet } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

const showHeader = ref(false)
onMounted(() => {
  showHeader.value = true
})
</script>

<template>
  <Transition name="fade">
    <header
      v-if="showHeader" class="
        font-poppins w-full bg-slate-800 text-white shadow-md
      "
    >
      <div
        class="
          mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xl
        "
      >
        <RouterLink to="/" class="flex items-center gap-2 font-bold">
          <Droplet />
          <span>Water CRM</span>
        </RouterLink>

        <nav>
          <ul class="flex items-center gap-6">
            <li><a href="#" class="hover:text-blue-400">Главная</a></li>
            <li><a href="#" class="hover:text-blue-400">Клиенты</a></li>
            <li><a href="#" class="hover:text-blue-400">Заказы</a></li>
            <li><a href="#" class="hover:text-blue-400">Доставка</a></li>
            <li><a href="#" class="hover:text-blue-400">Отчёты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </Transition>
</template>

<style>
.fade-enter-active {
  transition-delay: 0.2s;
  transition: all 0.4s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
