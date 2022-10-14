import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform } from "react-native";
import styled from "styled-components/native";

import { themes } from "../themes";

import type { WithChildren } from "../types";

const Container = styled.View`
	flex: 1;
	background-color: ${themes.colors.background};
`;

const Content = styled.View`
	flex: 1;
	align-items: center;
	margin: ${Platform.OS === "android" ? themes.spaces[10] : themes.spaces[4]}
		${themes.spaces[4]} 0px ${themes.spaces[4]};
`;

export const DefaultLayout = ({ children }: WithChildren) => (
	<SafeAreaView style={{ flex: 1 }}>
		<Container>
			<StatusBar style="light" />
			<Content>{children}</Content>
		</Container>
	</SafeAreaView>
);
