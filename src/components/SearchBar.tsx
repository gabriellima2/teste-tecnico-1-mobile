import styled, { css } from "styled-components/native";
import { useState } from "react";

import { Icon } from "./Icon";

interface SearchBarProps {
	handleOnPress: (valueSearch: string) => void;
}

const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		flex-direction: row;
		align-items: center;

		border-radius: 8px;

		margin-bottom: ${theme.spaces[4]};

		background-color: ${theme.colors.util};
	`}
`;

const Input = styled.TextInput`
	${({ theme }) => css`
		flex: 1;

		padding-left: ${theme.spaces[4]};

		font-size: ${theme.fontSizes[4]};
		color: ${theme.colors.font};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

const SearchButton = styled.TouchableOpacity`
	${({ theme }) => css`
		padding: ${theme.spaces[3]};

		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	`}
`;

export const SearchBar = (props: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<Container>
			<Input
				autoCapitalize="none"
				returnKeyType="search"
				autoCorrect={false}
				value={searchValue}
				placeholder="Faça alguma busca..."
				accessibilityLabel="Campo de busca"
				accessibilityHint="Mostrará o resultado "
				onChangeText={setSearchValue}
				onSubmitEditing={() => props.handleOnPress(searchValue)}
			/>
			<SearchButton
				onPress={() => props.handleOnPress(searchValue)}
				accessibilityLabel="Buscar"
				accessibilityHint="Mostrará o resultado da sua busca"
			>
				<Icon name="ios-search-outline" size={24} color="#565656" />
			</SearchButton>
		</Container>
	);
};
