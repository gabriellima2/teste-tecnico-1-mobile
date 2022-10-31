import { Text } from "react-native";
import { useTheme } from "styled-components/native";

import { FullScreen } from "./FullScreen";

import { DefaultLayout } from "../layouts/DefaultLayout";

interface ErrorProps {
	message: string;
}

export const Error = ({ message }: ErrorProps) => {
	const theme = useTheme();

	return (
		<DefaultLayout>
			<FullScreen>
				<Text
					accessibilityRole="alert"
					style={{ color: theme.colors.font, textAlign: "center" }}
				>
					{message}
				</Text>
			</FullScreen>
		</DefaultLayout>
	);
};
