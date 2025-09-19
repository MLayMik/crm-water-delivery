import type { IClient, IClientRepository } from '@/shared/types'
import { clientRepository } from '../api/clientRepository'

class ClientService {
  private clientRepository: IClientRepository

  constructor(repository: IClientRepository) {
    this.clientRepository = repository
  }

  async getClients() {
    return await this.clientRepository.getAllClients()
  }

  async getClientById(id: number) {
    return await this.clientRepository.getClientById(id)
  }

  async createClient(client: IClient) {
    if (!client.email.includes('@')) {
      throw new Error('Invalid email address')
    }
  }

  async updateClient(client: IClient, id: number) {
    return await this.clientRepository.updateClient(client, id)
  }

  async deleteClient(id: number) {
    return await this.clientRepository.deleteClient(id)
  }
}

export const clientService = new ClientService(clientRepository)
