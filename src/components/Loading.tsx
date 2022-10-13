import { ActivityIndicator } from "react-native";

import { DefaultLayout } from "../layouts/DefaultLayout";
import { FullScreen } from "./FullScreen";

interface LoadingProps {
	onFullScreen?: boolean;
}

export const Loading = (props: LoadingProps) => (
	<DefaultLayout>
		{props.onFullScreen ? (
			<FullScreen>
				<ActivityIndicator />
			</FullScreen>
		) : (
			<ActivityIndicator />
		)}
	</DefaultLayout>
);
