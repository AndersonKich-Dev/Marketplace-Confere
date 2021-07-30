 export type Size = {
    available: boolean
    size: string
    sku: string
  }
  
  export type Product = {
    actual_price: string
    code_color: string
    color: string
    color_slug: string
    discount_percentage: string
    image: string
    installments: string
    name: string
    style: string
    on_sale: boolean
    regular_price: string
    sizes: Size[]
  }
  
  export type ListProducts = {
    products: Product[]
  }