<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ClientList from '@/features/clients/ui/ClientList.vue'
import { supabase } from '@/shared/api/supabase-client'

const admins = ref<any[]>([])

onMounted(async () => {
  const { data } = await supabase
    .from('admins')
    .select()

  admins.value = data || []
})
</script>

<template>
  <div class="font-poppins">
    <p class="animate-fade-in">
      VUE TEMPLATE
    </p>
    <p v-for="value in admins" :key="value.id">
      {{ value.email }}
    </p>
  </div>
  <ClientList />
</template>
