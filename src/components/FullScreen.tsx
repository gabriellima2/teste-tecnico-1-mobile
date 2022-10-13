import styled from "styled-components/native";
import type { WithChildren } from "../types";

const Container = styled.View`
	flex: 1;

	align-items: center;
	justify-content: center;
`;

export const FullScreen = ({ children }: WithChildren) => (
	<Container>{children}</Container>
);
