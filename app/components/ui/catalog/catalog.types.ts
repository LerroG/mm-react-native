import { IProduct } from '@/types/product.types'

export interface ICatalog {
	title?: string
	products: IProduct[]
}
