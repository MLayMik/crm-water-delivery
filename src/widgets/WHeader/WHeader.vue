<script setup lang="ts">
import { Droplet, LogOut, User } from 'lucide-vue-next'
import { router } from '@/app/providers/router'
import { useUserStore } from '@/entities/user/model/userStore'

const user = useUserStore()
</script>

<template>
  <header class="w-full bg-slate-800 text-white shadow-md">
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

      <div class="flex items-center gap-6">
        <button class="flex gap-3 rounded-4xl bg-amber-700 px-4 py-2">
          <User />
          <button
            v-if="!user.isAuth"
            type="button"
            @click="router.push('/auth')"
          >
            LogIn
          </button>
          <span v-if="user.isAuth">{{ user.name }}</span>
        </button>
        <button
          v-if="user.isAuth"
          type="button"
          @click="user.logout"
        >
          <LogOut />
        </button>
      </div>
    </div>
  </header><div />
</template>
