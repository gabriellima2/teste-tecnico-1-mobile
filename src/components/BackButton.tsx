import { TouchableOpacity } from "react-native";

import { useReactNavigation } from "../hooks/useReactNavigation";
import { Icon } from "./Icon";

export const BackButton = () => {
	const navigation = useReactNavigation();

	return (
		<TouchableOpacity
			onPress={() => navigation.goBack()}
			accessibilityLabel="Voltar"
			accessibilityHint="Volta para a página anterior"
		>
			<Icon name="ios-arrow-back" size={28} color="black" />
		</TouchableOpacity>
	);
};
