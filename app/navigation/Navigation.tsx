import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { NativeScreenContainer } from 'react-native-screens'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
	return (
		<NativeScreenContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: '#fff' }
				}}
			>
				{routes.map(route => (
					<Stack.Screen key={route.name} {...route} />
				))}
			</Stack.Navigator>
		</NativeScreenContainer>
	)
}

export default Navigation
