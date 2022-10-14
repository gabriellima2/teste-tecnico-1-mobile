import { useTheme } from "styled-components/native";
import { useState } from "react";

import { BackButton } from "../BackButton";
import { Icon } from "../Icon";

import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps {
	initialValue?: string;
	withBackButton?: boolean;
	handleOnPress: (valueSearch: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState(props.initialValue || "");
	const theme = useTheme();

	return (
		<Container>
			{props.withBackButton && <BackButton style={{ marginRight: 8 }} />}

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
				onSubmitEditing={() => props.handleOnPress(searchValue)}
			/>
			<SearchButton
				onPress={() => props.handleOnPress(searchValue)}
				accessibilityLabel="Buscar"
				accessibilityHint="Mostrará o resultado da sua busca"
			>
				<Icon name="ios-search-outline" size={24} color={theme.colors.font} />
			</SearchButton>
		</Container>
	);
};
