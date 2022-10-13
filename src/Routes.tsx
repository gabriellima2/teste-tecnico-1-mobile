import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { DetailsScreen } from "./screens/DetailsScreen";
import { HomeScreen } from "./screens/HomeScreen";

export type RootStackParamList = {
	Details: { id: number };
};

const Stack = createNativeStackNavigator();

export const useReactNavigation = () =>
	useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);
