<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref } from 'vue'
import { router } from '@/app/providers/router'
import { userStore } from '@/entities/user/model/userStore'
import { useLogin } from '@/shared/api/user/query'
import { SUPABASE_EMAIL, SUPABASE_PASSWORD } from '@/shared/config'
import WInput from '@/shared/ui/WInput/WInput.vue'

const typeOfInput = ref('text')

const email = ref('')
const password = ref('')
const errorMsg = ref('')

const { mutate } = useLogin()

const { setIsAuth } = userStore()

async function handleLogin() {
  if (!email.value || !password.value) {
    errorMsg.value = 'Please fill in all fields'
  }
  mutate(
    { email: email.value, password: password.value },
    {
      onError(error) {
        errorMsg.value = error.message
      },
      onSuccess() {
        setIsAuth(true)
        router.push('/')
      },
    },

  )
}

function handleAutoFill() {
  email.value = SUPABASE_EMAIL
  password.value = SUPABASE_PASSWORD
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div class="font-poppins px-10 py-20">
      <p class="mb-8 text-3xl">
        Sign in
      </p>
      <div class="mb-8">
        <p class="mb-2 text-[#666666]">
          Email or phone number
        </p>
        <WInput v-model="email" />
      </div>
      <div>
        <div class="mb-2 flex justify-between text-[#666666]">
          <p>Password</p>
          <button class="flex gap-2" type="button">
            <Eye v-if="typeOfInput === 'text'" />
            <EyeOff v-if="typeOfInput === 'password'" />
            {{ typeOfInput === 'text' ? 'Hide' : 'Show' }}
          </button>
        </div>
        <WInput v-model="password" :type="typeOfInput" />
      </div>
      <button
        type="submit" class="
          mt-10 w-full rounded-xl bg-[#2563EB] py-3 text-white
        "
      >
        Sign in
      </button>
      <p class="mt-4 text-sm text-[#eb2525]">
        {{ errorMsg }}
      </p>

      <div class="flex h-12 w-full justify-between gap-5">
        <button
          type="button"
          class="w-full rounded-3xl bg-[#2563EB] text-xl text-white"
          @click="handleAutoFill"
        >
          Moxik
        </button>
      </div>
    </div>
  </form>
</template>
