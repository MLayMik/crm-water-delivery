import type { IClient, IClientRepository } from '@/shared/types'
import { supabase } from '@/shared/api/supabase-client'

class ClientRepository implements IClientRepository {
  async getAllClients() {
    const { data, error } = await supabase
      .from('clients')
      .select()
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  async getClientById(id: number) {
    const { data, error } = await supabase
      .from('clients')
      .select()
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  async createClient(client: IClient) {
    const { data, error } = await supabase
      .from('clients')
      .insert(client)
      .select()
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  async updateClient(client: IClient, id: number) {
    const { data, error } = await supabase
      .from('clients')
      .update(client)
      .eq('id', id)
      .select()
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  async deleteClient(id: number) {
    const { data, error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id)
      .select()
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return data
  }
}

export const clientRepository = new ClientRepository()
