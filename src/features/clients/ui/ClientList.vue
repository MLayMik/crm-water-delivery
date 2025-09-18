<script setup lang="ts">
import type { IClient } from '@/shared/types'
import { onMounted, ref } from 'vue'
import { clientService } from '@/entities/client/model/clientService'
import { ClientRow } from '@/entities/client/ui'
import { WTable, WTableBody, WTableHead, WTableHeader, WTableRow } from '@/shared/ui/WTable'

const clients = ref<IClient[]>([])
onMounted(async () => {
  clients.value = await clientService.getClients()
})
</script>

<template>
  <div class="mx-auto rounded-md border border-white p-4">
    <WTable class="text-left">
      <WTableHeader class="gap-4">
        <WTableRow>
          <WTableHead class="w-[40px]">
            ID
          </WTableHead>
          <WTableHead class="w-[200px]">
            NAME
          </WTableHead>
          <WTableHead class="w-[400px]">
            EMAIL
          </WTableHead>
        </WTableRow>
      </WTableHeader>
      <WTableBody>
        <ClientRow
          v-for="client in clients"
          :key="client.id"
          :client="client"
        />
      </WTableBody>
    </WTable>
  </div>
</template>
