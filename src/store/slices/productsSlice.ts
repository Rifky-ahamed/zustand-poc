import { StateCreator } from 'zustand'
import { supabase } from '@/lib/supabaseClient'
import { Product, PaginationState } from '@/types'
import { StoreState } from '../useStore'

export interface ProductsSlice {
  products: Product[]
  productsLoading: boolean
  productsError: string | null
  pagination: PaginationState
  fetchProducts: (page?: number) => Promise<void>
  setPage: (page: number) => void
}

export const createProductsSlice: StateCreator<
  StoreState,
  [],
  [],
  ProductsSlice
> = (set, get) => ({
  products: [],
  productsLoading: false,
  productsError: null,
  pagination: { page: 1, limit: 10, total: 0 },

  setPage: (page: number) => {
  set((state: StoreState) => ({ pagination: { ...state.pagination, page } }))
  get().fetchProducts(page)
},

  fetchProducts: async (page?: number) => {
    const { pagination } = get()
    const currentPage = page ?? pagination.page
    const { limit } = pagination
    const from = (currentPage - 1) * limit
    const to = from + limit - 1

    set({ productsLoading: true, productsError: null })

    const { data, error, count } = await supabase
      .from('products')
      .select(`
        *,
        brand:brands(*),
        category:categories(*)
      `, { count: 'exact' })
      .range(from, to)
      .order('created_at', { ascending: false })

    if (error) {
      set({ productsError: error.message, productsLoading: false })
      return
    }

    set({
      products: (data ?? []) as Product[],
      productsLoading: false,
      pagination: { ...pagination, page: currentPage, total: count ?? 0 },
    })
  },
})