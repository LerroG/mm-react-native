import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog/Catalog'

import { useProfile } from '../profile/useProfile'

const Favorites: FC = () => {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog title='Favorites' products={profile?.favorites || []} />
		</Layout>
	)
}

export default Favorites
