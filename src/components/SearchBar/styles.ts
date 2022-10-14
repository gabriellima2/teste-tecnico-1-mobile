import styled, { css } from "styled-components/native";

export const Container = styled.View`
	${({ theme }) => css`
		width: 100%;
		flex-direction: row;
		align-items: center;

		border-radius: 8px;

		padding-left: ${theme.spaces[3]};
		margin-bottom: ${theme.spaces[4]};

		background-color: ${theme.colors.util};
	`}
`;

export const Input = styled.TextInput`
	${({ theme }) => css`
		flex: 1;

		font-size: ${theme.fontSizes[4]};
		color: ${theme.colors.font};
		font-family: ${theme.fonts.mainRegular};
	`}
`;

export const SearchButton = styled.TouchableOpacity`
	${({ theme }) => css`
		padding: ${theme.spaces[3]};

		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	`}
`;
