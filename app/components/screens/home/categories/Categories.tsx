import { FC } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { getMediaSource } from '@/utils/getMediaSource'

import { useGetAllCategories } from './useGetAllCategories'

const Categories: FC = () => {
	const { categories, isLoading } = useGetAllCategories()

	const { navigate } = useTypedNavigation()

	return isLoading ? (
		<Loader />
	) : (
		<View className='flex flex-col mt-5 mb-4'>
			<Heading>Categories</Heading>

			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				className='flex-row mt-5'
			>
				{categories?.map(category => (
					<Pressable
						onPress={() => navigate('Category', { slug: category.slug })}
						key={category.id}
						className='rounded-xl w-24 bg-gray-100 py-5 px-3 mx-2'
					>
						<Image
							source={getMediaSource(category.image)}
							className='h-10 mb-2'
							style={{ resizeMode: 'contain' }}
						/>
						<Text className='font-normal text-xs text-center'>
							{category.name}
						</Text>
					</Pressable>
				))}
			</ScrollView>
		</View>
	)
}

export default Categories
