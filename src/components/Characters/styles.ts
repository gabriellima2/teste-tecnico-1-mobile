import styled, { css } from "styled-components/native";

export const List = styled.FlatList`
	width: 100%;
`;

export const CharacterImage = styled.Image`
	border-radius: 200px;
`;

export const Texts = styled.View`
	align-items: center;
	margin-top: 12px;
`;

export const CharacterName = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors.font};
		font-size: ${theme.fontSizes[5]};
		font-family: ${theme.fonts.mainMedium};
	`}
`;

export const CharacterSpecie = styled(CharacterName)`
	${({ theme }) => css`
		font-size: 13px;
		font-family: ${theme.fonts.mainRegular};

		margin-top: ${theme.spaces[1]};
	`}
`;
