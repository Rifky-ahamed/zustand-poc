import { StateCreator } from 'zustand'
import { supabase } from '@/lib/supabaseClient'
import { Brand } from '@/types'
import { StoreState } from '../useStore'

export interface BrandsSlice {
  brands: Brand[]
  brandsLoading: boolean
  brandsError: string | null
  fetchBrands: () => Promise<void>
}

export const createBrandsSlice: StateCreator<
  StoreState,
  [],
  [],
  BrandsSlice
> = (set) => ({
  brands: [],
  brandsLoading: false,
  brandsError: null,

  fetchBrands: async () => {
    set({ brandsLoading: true, brandsError: null })
    const { data, error } = await supabase.from('brands').select('*')
    if (error) {
      set({ brandsError: error.message, brandsLoading: false })
      return
    }
    set({ brands: data ?? [], brandsLoading: false })
  },
})