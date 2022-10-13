import styled, { css } from "styled-components/native";
import { CharacterName } from "../../components/Characters/styles";

export const Header = styled.View`
	width: 100%;

	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Title = styled(CharacterName)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[6]};
	`}
`;

export const Main = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Texts = styled.View`
	${({ theme }) => css`
		margin: ${theme.spaces[8]} 0px;
		align-self: flex-start;
	`}
`;

export const TextInfo = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[4]};
		color: ${theme.colors.font};
		font-family: ${theme.fonts.mainRegular};

		margin-top: ${theme.spaces[1]};
	`}
`;

export const Span = styled(TextInfo)`
	${({ theme }) => css`
		font-size: 18px
		font-family: ${theme.fonts.mainLight};
	`}
`;

export const Episode = styled(TextInfo)`
	${({ theme }) => css`
		width: 100%;
		border-radius: 12px;
		padding: ${theme.spaces[5]} ${theme.spaces[10]};

		background-color: ${theme.colors.util};
	`}
`;
