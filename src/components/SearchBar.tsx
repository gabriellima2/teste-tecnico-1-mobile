import styled, { css } from "styled-components/native";
import { Icon } from "./Icon";

interface SearchBarProps {
	value: string;
	updateValue: (text: string) => void;
}

const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		flex-direction: row;
		align-items: center;

		padding: ${theme.spaces[3]};
		border-radius: 8px;
		margin-bottom: ${theme.spaces[4]};

		background-color: ${theme.colors.util};
	`}
`;

const Input = styled.TextInput`
	${({ theme }) => css`
		flex: 1;
		margin-left: ${theme.spaces[2]};

		font-size: ${theme.fontSizes[4]};
		color: ${theme.colors.font};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

export const SearchBar = (props: SearchBarProps) => {
	return (
		<Container>
			<Icon name="ios-search-outline" size={24} color="#565656" />
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				value={props.value}
				onChangeText={props.updateValue}
				placeholder="Faça alguma busca..."
				accessibilityLabel="Campo de busca"
			/>
		</Container>
	);
};
