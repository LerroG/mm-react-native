import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Toast from '@/components/ui/Toast'

import AuthProvider from '@/providers/auth/AuthProvider'

import Navigation from '@/navigation/Navigation'

import { persistor, store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider>
						<SafeAreaProvider>
							<Navigation />
						</SafeAreaProvider>
					</AuthProvider>
					<StatusBar style='light' />
					<Toast />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
