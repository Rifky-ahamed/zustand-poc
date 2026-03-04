'use client'
import { useEffect } from 'react'
import { useStore } from '@/store/useStore'

export default function CategoriesPage() {
  const { categories, categoriesLoading, categoriesError, fetchCategories } = useStore()

  useEffect(() => {
    fetchCategories()
  }, [])

  if (categoriesLoading) return <p>Loading categories...</p>
  if (categoriesError) return <p>Error: {categoriesError}</p>

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((c) => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  )
}