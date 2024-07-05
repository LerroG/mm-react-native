import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import ProductButton from './ProductButton'
import { IProductComponent } from './product-page.types'

const ProductHeader: FC<IProductComponent> = ({ product }) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View className='flex-row justify-between mt-2'>
				<ProductButton
					onPress={goBack}
					icon='chevron-left'
					iconSize={26}
					color='#555'
				/>
				<Text>Favorite button</Text>
			</View>
		</View>
	)
}

export default ProductHeader
