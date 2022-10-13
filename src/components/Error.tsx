import { Text } from "react-native";

import { DefaultLayout } from "../layouts/DefaultLayout";
import { FullScreen } from "./FullScreen";

interface ErrorProps {
	message: string;
}

export const Error = ({ message }: ErrorProps) => (
	<DefaultLayout>
		<FullScreen>
			<Text>{message}</Text>
		</FullScreen>
	</DefaultLayout>
);
