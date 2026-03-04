# Zustand State Management POC

## Store Architecture

The store uses the **slice pattern** to separate concerns:

- `productsSlice` — products list, loading, error, pagination, fetchProducts, setPage
- `brandsSlice` — brands list, loading, error, fetchBrands
- `categoriesSlice` — categories list, loading, error, fetchCategories

All slices are merged in `useStore.ts` using Zustand's `create()`.

## Pagination Implementation

- Products use **server-side pagination** via Supabase `.range(from, to)`.
- `pagination` state (`page`, `limit`, `total`) lives in the Zustand store.
- `setPage()` updates the page in the store and triggers a new fetch.
- State is preserved during client-side navigation since the store is global.

## State Management Decisions

- **No `useState` for global data** — all shared data lives in Zustand.
- **Async fetches are inside the store** — components only call actions.
- **Slice pattern** keeps the store modular and scalable.
- **TypeScript** ensures type safety across slices and components.

## folder structure 
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/page.tsx
│   ├── brands/page.tsx
│   └── categories/page.tsx
├── lib/
│   └── supabaseClient.ts
├── store/
│   ├── useStore.ts
│   └── slices/
│       ├── productsSlice.ts
│       ├── brandsSlice.ts
│       └── categoriesSlice.ts
└── types/
    └── index.ts