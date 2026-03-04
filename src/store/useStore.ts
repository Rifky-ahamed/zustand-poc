import { create } from 'zustand'
import { ProductsSlice, createProductsSlice } from './slices/productsSlice'
import { BrandsSlice, createBrandsSlice } from './slices/brandsSlice'
import { CategoriesSlice, createCategoriesSlice } from './slices/categoriesSlice'

export type StoreState = ProductsSlice & BrandsSlice & CategoriesSlice

export const useStore = create<StoreState>()((...args) => ({
  ...createProductsSlice(...args),
  ...createBrandsSlice(...args),
  ...createCategoriesSlice(...args),
}))