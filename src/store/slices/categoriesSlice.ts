import { StateCreator } from 'zustand'
import { supabase } from '@/lib/supabaseClient'
import { Category } from '@/types'
import { StoreState } from '../useStore'

export interface CategoriesSlice {
  categories: Category[]
  categoriesLoading: boolean
  categoriesError: string | null
  fetchCategories: () => Promise<void>
}

export const createCategoriesSlice: StateCreator<
  StoreState,
  [],
  [],
  CategoriesSlice
> = (set) => ({
  categories: [],
  categoriesLoading: false,
  categoriesError: null,

  fetchCategories: async () => {
    set({ categoriesLoading: true, categoriesError: null })
    const { data, error } = await supabase.from('categories').select('*')
    if (error) {
      set({ categoriesError: error.message, categoriesLoading: false })
      return
    }
    set({ categories: data ?? [], categoriesLoading: false })
  },
})