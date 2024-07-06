import { FC } from 'react'
import { Text, View } from 'react-native'

import { convertPrice } from '@/utils/convertPrice'

import { IProductComponent } from '../product-page.types'

const ProductInfo: FC<IProductComponent> = ({ product }) => {
	return (
		<View className='mt-7'>
			<Text className='font-bold text-2xl'>{product.title}</Text>
			<Text className='mt-6 text-3xl font-semibold text-[#47AA52]'>
				{convertPrice(product.price)}
			</Text>
			<Text className='mt-2 text-base'>Brand: {product.brand}</Text>
			<Text className='mt-2 text-base'>MainCamera: {product.mainCamera}</Text>
			<Text className='mt-2 text-base'>FrontCamera: {product.frontCamera}</Text>
			<Text className='mt-2 text-base'>
				BatteryCapacity: {product.batteryCapacity}
			</Text>
			<Text className='mt-2 text-base'>CPU: {product.CPU}</Text>
			<Text className='mt-2 text-base'>GPU: {product.GPU}</Text>
			<Text className='mt-2 text-base'>{product.description}</Text>
		</View>
	)
}

export default ProductInfo
