import { useCallback } from "react";
import type { ListRenderItemInfo } from "react-native";

import { useReactNavigation } from "../../hooks/useReactNavigation";

import { Loading } from "../Loading";
import { Link } from "../Link";

import type { CharacterData } from "../../types";
import {
	List,
	CharacterImage,
	Texts,
	CharacterSpecie,
	CharacterName,
} from "./styles";

interface CharactersProps {
	characters: CharacterData[];
	handleEndReached: () => void;
	handleShowLoading: boolean;
}

export const Character = (props: CharacterData) => {
	const navigation = useReactNavigation();

	return (
		<Link
			style={{ alignItems: "center", marginTop: 24, marginBottom: 16 }}
			accessibilityHint={`Ver detalhes sobre ${props.name}`}
			handleOnPress={() => {
				navigation.navigate("Details", { id: props.id });
			}}
		>
			<CharacterImage
				source={{ uri: props.image, width: 230, height: 230 }}
				resizeMode="contain"
			/>
			<Texts>
				<CharacterName>{props.name}</CharacterName>
				<CharacterSpecie>{props.species}</CharacterSpecie>
			</Texts>
		</Link>
	);
};

export const Characters = ({ characters, ...props }: CharactersProps) => {
	// Para melhorar o desempenho da lista.
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<CharacterData>) => {
			return <Character {...item} />;
		},
		[]
	);

	const keyExtractor = useCallback(
		({ id }: CharacterData) => id.toString(),
		[]
	);

	const showLoading = useCallback(() => <Loading />, []);

	return (
		<List
			data={characters}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			onEndReached={props.handleEndReached}
			onEndReachedThreshold={0.4}
			ListFooterComponent={props.handleShowLoading ? showLoading : null}
		/>
	);
};
