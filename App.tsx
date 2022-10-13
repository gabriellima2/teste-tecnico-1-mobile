import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "./src/Routes";
import { Loading } from "./src/components/Loading";

import { themes } from "./src/themes";

export default function App() {
	const [fontsLoaded] = useFonts({
		RubikLight: require("./assets/fonts/Rubik-Light.ttf"),
		RubikRegular: require("./assets/fonts/Rubik-Regular.ttf"),
		RubikMedium: require("./assets/fonts/Rubik-Medium.ttf"),
		RubikBold: require("./assets/fonts/Rubik-Bold.ttf"),
	});

	if (!fontsLoaded) return <Loading />;

	return (
		<ThemeProvider theme={themes}>
			<Routes />
		</ThemeProvider>
	);
}
