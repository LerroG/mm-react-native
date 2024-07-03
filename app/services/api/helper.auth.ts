import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { EnumSecureStore, IAuthResponse } from '@/types/auth.types'

import { API_URL, getAuthUrl } from '@/config/api.config'

import { saveUserToStorage } from '../auth/auth.helper'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)

		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)

		if (response.data.accessToken) await saveUserToStorage(response.data)

		return response
	} catch (error) {}
}
