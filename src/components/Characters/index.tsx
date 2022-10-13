import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { useReactNavigation } from "../../Routes";

import { Loading } from "../Loading";

import type { CharacterData } from "../../types";

interface CharactersProps {
	characters: CharacterData[];
	handleEndReached: () => void;
}

export const Character = (props: CharacterData) => {
	const navigation = useReactNavigation();

	return (
		<TouchableOpacity
			accessibilityRole="link"
			accessibilityHint={`Ver detalhes sobre ${props.name}`}
			onPress={() => {
				navigation.navigate("Details", { id: props.id });
			}}
		>
			<Image
				source={{ uri: props.image, width: 200, height: 200 }}
				resizeMode="contain"
			/>
			<View>
				<Text>{props.name}</Text>
				<Text>{props.species}</Text>
			</View>
		</TouchableOpacity>
	);
};

export const Characters = ({ characters, ...props }: CharactersProps) => (
	<FlatList
		data={characters}
		renderItem={({ item }) => <Character {...item} />}
		keyExtractor={({ id }) => id.toString()}
		onEndReached={props.handleEndReached}
		onEndReachedThreshold={0.1}
		ListFooterComponent={() => <Loading />}
	/>
);
