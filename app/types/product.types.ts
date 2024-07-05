import { ICategory } from './category.types'

export interface IProduct {
	id: string
	title: string
	slug: string
	description: string
	price: number
	brand: string
	mainCamera: number
	frontCamera: number
	batteryCapacity: number
	CPU: string
	GPU: string
	image: string
	createdAt: string
	category: ICategory
}
