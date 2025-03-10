import { Category } from "./categories.interface"

export interface Product {
    id: number
    title: string
    slug: string
    price: number
    description: string
    images: string[]
    category: Category
    creationAt: string
    updatedAt: string
}