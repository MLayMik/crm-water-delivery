<script setup lang="ts">
import { Droplet } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { supabase } from '@/shared/api/supabase-client'
import WButton from '@/shared/ui/WButton/WButton.vue'

const showHeader = ref(false)
onMounted(() => {
  showHeader.value = true
})
const isLogged = ref(!!supabase.auth.getSession(),
)
async function handleLogout() {
  await supabase.auth.signOut()
}
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
        <div class="flex items-center gap-4">
          {{ isLogged ? 'Admin' : 'Guest' }}
          <RouterLink
            to="/auth"
          >
            Login
          </RouterLink>
          <WButton
            variant="light"
            @click="handleLogout"
          >
            Logout
          </WButton>
        </div>
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
