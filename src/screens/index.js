import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Playlist } from './screens';
import { SCREENS } from '../constants';

const Stack = createStackNavigator();
const StackNavigation = () => (
	<Stack.Navigator headerMode="none" initialRouteName={SCREENS.LOADING}>
		<Stack.Screen name={SCREENS.LOADING} component={Loading} />
		<Stack.Screen name={SCREENS.PLAYLIST} component={Playlist} />
	</Stack.Navigator>
);

const Index = () => {
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	);
};

export default Index;
