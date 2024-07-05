import { FC } from 'react'
import { Text, View } from 'react-native'

import Button from '@/components/ui/button/Button'

interface IAddToCartButton {
	productId: string
}

const AddToCartButton: FC<IAddToCartButton> = ({ productId }) => {
	return <Button className='mt-6'>Add to cart</Button>
}

export default AddToCartButton
