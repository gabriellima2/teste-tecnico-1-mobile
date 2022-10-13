import { Text } from "react-native";

import { DefaultLayout } from "../layouts/DefaultLayout";

interface ErrorProps {
	message: string;
}

export const Error = ({ message }: ErrorProps) => (
	<DefaultLayout>
		<Text>{message}</Text>
	</DefaultLayout>
);
