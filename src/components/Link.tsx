import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface LinkProps extends Omit<TouchableOpacityProps, "accessibilityRole"> {}

export const Link = (props: LinkProps) => (
	<TouchableOpacity activeOpacity={0.6} accessibilityRole="link" {...props} />
);
