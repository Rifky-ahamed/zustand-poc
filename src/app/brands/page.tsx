'use client'
import { useEffect } from 'react'
import { useStore } from '@/store/useStore'

export default function BrandsPage() {
  const {
    brands, brandsLoading, brandsError, fetchBrands,
    categories, categoriesLoading, categoriesError, fetchCategories,
  } = useStore()

  useEffect(() => {
    fetchBrands()
    fetchCategories()
  }, [])

  if (brandsLoading || categoriesLoading) return <p>Loading...</p>
  if (brandsError) return <p style={{ color: 'red' }}>Brands Error: {brandsError}</p>
  if (categoriesError) return <p style={{ color: 'red' }}>Categories Error: {categoriesError}</p>

  return (
    <div>
      {/* BRANDS SECTION */}
      <h1>Brands</h1>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((b) => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.description ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CATEGORIES SECTION */}
      <h1 style={{ marginTop: '2rem' }}>Categories</h1>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Parent</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.id}>
              <td>{'— '.repeat(c.level)}{c.name}</td>
              <td>{c.level}</td>
              <td>
                {c.parent_id
                  ? categories.find(cat => cat.id === c.parent_id)?.name ?? c.parent_id
                  : 'Root'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}