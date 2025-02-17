import axios from 'axios'

import { API_URL } from '@/config/api.config'

import { deleteTokensStorage, getAccessToken } from '../auth/auth.helper'

import { errorCatch } from './error.api'
import { getNewTokens } from './helper.auth'

const $api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

$api.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

$api.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await getNewTokens()
				return $api.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') await deleteTokensStorage()
			}
		}

		throw error
	}
)

export default $api
