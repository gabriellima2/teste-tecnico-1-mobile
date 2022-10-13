import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen } from "./screens/DetailsScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";

export type RootStackParamList = {
	Details: { id: number };
	Search: { value: string };
};

const Stack = createNativeStackNavigator();

export const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
			<Stack.Screen name="Search" component={SearchScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);
