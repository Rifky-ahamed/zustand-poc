import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Zustand POC</h1>
      <nav>
        <ul>
          <li><Link href="/products">Products (Paginated)</Link></li>
          <li><Link href="/brands">Brands</Link></li>
          <li><Link href="/categories">Categories</Link></li>
        </ul>
      </nav>
    </div>
  )
}