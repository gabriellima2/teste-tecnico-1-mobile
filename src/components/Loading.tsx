import { ActivityIndicator } from "react-native";

import { DefaultLayout } from "../layouts/DefaultLayout";

export const Loading = () => (
	<DefaultLayout>
		<ActivityIndicator />
	</DefaultLayout>
);
