export interface Category {
  id: string;
  name: string;
  parent_id: string | null;
  level: number;
  created_at: string;
}

export interface Brand {
  id: string;
  name: string;
  logo_url?: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  rich_description?: Record<string, unknown>;
  brand_id: string;
  category_id: string;
  sku?: string;
  cost_price?: number;
  base_price?: number;
  price?: number;
  discounted_price?: number;
  margin?: number;
  profit_percentage?: number;
  stock?: number;
  condition?: "new" | "used" | "refurbished";
  has_variants: boolean;
  isPrivate?: boolean;
  blockOrder?: boolean;
  enableSeo?: boolean;
  seoKeywords?: string;
  seoMetaTitle?: string;
  seoMetaDescription?: string;
  images?: ProductImage[];
  variant_types?: VariantType[];
  variant_combinations?: VariantCombination[];
  brand?: Brand;
  category?: Category;
  created_at: string;
  updated_at: string;
  scheduled_start_at: string | null;
  scheduled_end_at: string | null;
  inventory_tracking?: boolean;
  low_stock_threshold?: number | null;
  stock_status?: "in_stock" | "out_of_stock" | "low_stock" | null;
  status: "published" | "draft";
  requires_shipping?: boolean;
  free_shipping?: boolean;
  weight?: number;
  weight_unit?: "kg" | "lbs" | "g" | "oz";
  length?: number;
  width?: number;
  height?: number;
  dimension_unit?: "cm" | "in" | "m" | "ft";
  shipping_charge?: number;
}


export interface PaginationState {
  page: number
  limit: number
  total: number
}

export interface ProductImage {
  image_url: string;
  alt_text?: string;
  is_primary: boolean;
  sort_order: number;
}

export interface VariantType {
  name: string;
  label: string;
  options: VariantOption[];
}

export interface VariantCombination {
  combination_id: string;
  variant_values: Record<string, string>;
  price: number;
  discounted_price?: number;
  stock: number;
  sku?: string;
  image_url?: string;
  inventory_tracking?: boolean;
  low_stock_threshold?: number | null;
  stock_status?: "in_stock" | "out_of_stock" | "low_stock" | null;
  scheduled_start_at?: string;
  scheduled_end_at?: string;
}

export interface VariantOption {
  value: string;
  label: string;
  image_url?: string;
}