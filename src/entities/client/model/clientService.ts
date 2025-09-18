import type { IClient } from '@/shared/types'
import { clientRepository } from '../api/clientRepository'

class ClientService {
  async getClients() {
    return await clientRepository.getAllClients()
  }

  async getClientById(id: number) {
    return await clientRepository.getClientById(id)
  }

  async createClient(client: IClient) {
    if (!client.email.includes('@')) {
      throw new Error('Invalid email address')
    }
  }

  async updateClient(client: IClient, id: number) {
    return await clientRepository.updateClient(client, id)
  }

  async deleteClient(id: number) {
    return await clientRepository.deleteClient(id)
  }
}

export const clientService = new ClientService()
