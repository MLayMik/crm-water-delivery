<script setup lang="ts">
import { Eye } from 'lucide-vue-next'
import WInput from '@/shared/ui/CInput/WInput.vue'
</script>

<template>
  <form action="">
    <div class="font-poppins px-10 py-20">
      <p class="mb-8 text-3xl">
        Sign in asdf
      </p>
      <div class="mb-8">
        <p class="mb-2 text-[#666666]">
          Email or phone number
        </p>
        <WInput />
      </div>
      <div>
        <div class="mb-2 flex justify-between text-[#666666]">
          <p>Password</p>
          <p class="flex gap-2">
            <Eye />
            Hide
          </p>
        </div>
        <WInput />
      </div>
    </div>
  </form>
</template>
/* Rectangle 5 */

position: absolute;
width: 1440px;
height: 1024px;
left: 0px;
top: 0px;

background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(4px);
/* Note: backdrop-filter has minimal browser support */
