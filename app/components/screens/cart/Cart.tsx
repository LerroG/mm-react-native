import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { convertPrice } from '@/utils/convertPrice'

import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { items, total } = useCart()
	const { reset } = useActions()
	const { navigate } = useTypedNavigation()

	const orderHandle = () => {
		navigate('Thanks')
		reset()
	}

	return (
		<>
			<Layout>
				<Heading>Cart</Heading>

				{items.length ? (
					items.map(item => <CartItem key={item.id} item={item} />)
				) : (
					<Text className='mt-2'>Cart empty</Text>
				)}
			</Layout>

			{items.length ? (
				<View className='bottom-8 absolute w-[90%] mx-5'>
					<Text className='font-bold text-xl'>
						Total: {convertPrice(total)}
					</Text>
					<Button onPress={() => orderHandle()}>Place order</Button>
				</View>
			) : null}
		</>
	)
}

export default Cart
