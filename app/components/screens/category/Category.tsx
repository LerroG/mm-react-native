import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import { useCategory } from './useCategory'

const Category: FC = () => {
	const { category, products, isLoading } = useCategory()

	return isLoading ? (
		<Loader />
	) : (
		<Layout>
			{category ? (
				<Catalog title={category.name} products={products || []} />
			) : (
				<Text>Category not found</Text>
			)}
		</Layout>
	)
}

export default Category
