import { FontAwesome } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Thanks: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='justify-center items-center mt-40'>
			<FontAwesome name='check-circle' size={100} />
			<Text className='font-bold text-5xl mt-8'>Thanks</Text>
			<Pressable
				onPress={() => navigate('Home')}
				className='bg-[#47AA52] rounded-xl py-3 px-5 items-center mt-5'
			>
				<Text className='text-white'>Go to products</Text>
			</Pressable>
		</View>
	)
}

export default Thanks
