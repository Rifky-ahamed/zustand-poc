'use client'
import { useEffect } from 'react'
import { useStore } from '@/store/useStore'

export default function ProductsPage() {
  const {
    products, productsLoading, productsError,
    pagination, fetchProducts, setPage
  } = useStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  const totalPages = Math.ceil(pagination.total / pagination.limit)

  if (productsLoading) return <p>Loading products...</p>
  if (productsError) return <p>Error: {productsError}</p>

  return (
    <div>
      <h1>Products</h1>
      <p>Page {pagination.page} of {totalPages} — Total: {pagination.total}</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} — ${p.price}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage(pagination.page - 1)}
          disabled={pagination.page <= 1}
        >
          Previous
        </button>
        <span> Page {pagination.page} </span>
        <button
          onClick={() => setPage(pagination.page + 1)}
          disabled={pagination.page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}