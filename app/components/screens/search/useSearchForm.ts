import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { useDebouce } from '@/hooks/useDebounce'

import { ISearchFormData } from './search.types'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: 'onChange'
	})

	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebouce(searchTerm, 500)

	return useMemo(
		() => ({
			debouncedSearch,
			searchTerm,
			control
		}),
		[searchTerm]
	)
}
