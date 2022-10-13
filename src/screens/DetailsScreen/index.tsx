import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import type { RootStackParamList } from "../../Routes";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export const DetailsScreen = (props: DetailsScreenProps) => {
	console.log(props.route.params.id);

	return (
		<DefaultLayout>
			<Text>Details</Text>
		</DefaultLayout>
	);
};
