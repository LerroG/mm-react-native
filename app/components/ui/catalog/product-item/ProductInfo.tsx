import { FC } from 'react'
import { Text, View } from 'react-native'

import { IProduct } from '@/types/product.types'

import { convertPrice } from '@/utils/convertPrice'

interface IProductInfo {
	product: IProduct
}

const ProductInfo: FC<IProductInfo> = ({ product }) => {
	return (
		<View className='my-3'>
			<Text className='font-semibold text-base'>{product.title}</Text>
			<Text className='py-1.5'>{product.category.name}</Text>
			<Text className='mt-1 font-normal text-sm text-center py-0.5 w-2/3 rounded-full text-white bg-[#47AA52]'>
				{convertPrice(product.price)}
			</Text>
		</View>
	)
}

export default ProductInfo
