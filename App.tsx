import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "./src/Routes";
import { Loading } from "./src/components/Loading";

import { themes } from "./src/themes";

export default function App() {
	const [fontsLoaded] = useFonts({
		RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
		RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
		RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
		RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
	});

	if (!fontsLoaded) return <Loading />;

	return (
		<ThemeProvider theme={themes}>
			<Routes />
		</ThemeProvider>
	);
}
