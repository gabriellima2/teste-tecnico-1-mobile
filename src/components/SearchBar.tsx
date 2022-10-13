import { TextInput } from "react-native";

interface SearchBarProps {
	value: string;
	updateValue: (text: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
	return (
		<TextInput
			value={props.value}
			onChangeText={props.updateValue}
			placeholder="Faça alguma busca..."
			accessibilityLabel="Campo de busca"
		/>
	);
};
