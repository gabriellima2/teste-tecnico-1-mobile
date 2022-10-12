import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";

import type { WithChildren } from "../types";

export const DefaultLayout = ({ children }: WithChildren) => (
	<SafeAreaView>
		<View>
			<StatusBar style="auto" />
			{children}
		</View>
	</SafeAreaView>
);
