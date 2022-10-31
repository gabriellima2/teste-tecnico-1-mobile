import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import type { TouchableOpacityProps } from "react-native";

import { useReactNavigation } from "../hooks/useReactNavigation";

import { Icon } from "./Icon";

interface BackButtonProps extends Pick<TouchableOpacityProps, "style"> {}

export const BackButton = (props: BackButtonProps) => {
	const navigation = useReactNavigation();
	const theme = useTheme();

	return (
		<TouchableOpacity
			style={props.style}
			onPress={() => navigation.goBack()}
			accessibilityLabel="Voltar"
			accessibilityHint="Volta para a página anterior"
		>
			<Icon name="ios-arrow-back" size={28} color={theme.colors.font} />
		</TouchableOpacity>
	);
};
