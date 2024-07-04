import { TypeFeatherIconNames } from '@/types/icon.types'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface IMenuItem {
	icon: TypeFeatherIconNames
	path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
