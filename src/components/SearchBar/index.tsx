import { useTheme } from "styled-components/native";
import { useState } from "react";

import { useReactNavigation } from "../../hooks/useReactNavigation";

import { BackButton } from "../BackButton";
import { Icon } from "../Icon";

import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps {
	initialValue?: string;
	showBackButton?: boolean;
}

export const SearchBar = (props: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState(props.initialValue || "");
	const navigation = useReactNavigation();
	const theme = useTheme();

	const handlePress = () => {
		if (!searchValue.trim()) return;

		navigation.navigate("Result", { value: searchValue });
	};

	return (
		<Container>
			{props.showBackButton && <BackButton style={{ marginRight: 8 }} />}

			<Input
				autoCapitalize="none"
				returnKeyType="search"
				autoCorrect={false}
				value={searchValue}
				placeholder="Faça alguma busca..."
				accessibilityLabel="Campo de busca"
				accessibilityHint="Mostrará o resultado "
				placeholderTextColor={`${theme.colors.font}4b`}
				onChangeText={setSearchValue}
				onSubmitEditing={handlePress}
			/>
			<SearchButton
				onPress={handlePress}
				accessibilityLabel="Buscar"
				accessibilityHint="Mostrará o resultado da sua busca"
			>
				<Icon name="ios-search-outline" size={24} color={theme.colors.font} />
			</SearchButton>
		</Container>
	);
};
