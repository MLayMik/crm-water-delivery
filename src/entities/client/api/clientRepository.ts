import type { IClient } from '@/shared/types'
import { supabase } from '@/shared/api/supabase-client'

export const clientRepository = {
  async getAllClients() {
    const { data, error } = await supabase
      .from('clients')
      .select()
    if (error) {
      throw new Error(error.message)
    }
    return data
  },

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
  },

  async createClient(client: IClient) {
    const { data, error } = await supabase
      .from('clients')
      .insert(client)
    if (error) {
      throw new Error(error.message)
    }
    return data
  },

  async updateClient(client: IClient, id: number) {
    const { data, error } = await supabase
      .from('clients')
      .update(client)
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return data
  },

  async deleteClient(id: number) {
    const { data, error } = await supabase.from('clients').delete().eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return data
  },
}
