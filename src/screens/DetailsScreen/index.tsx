import { FlatList, Image, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useFetch } from "../../hooks/useFetch";

import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import {
	BASE_URL,
	SpecieInfoInPortuguese,
	StatusInfoInPortuguese,
} from "../../constants";
import type { RootStackParamList } from "../../Routes";
import type { CharacterDetailsData } from "../../types";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export const DetailsScreen = (props: DetailsScreenProps) => {
	const characterID = props.route.params.id;

	const { data, error, isLoading } = useFetch<CharacterDetailsData>(
		`${BASE_URL}${characterID}`,
		[]
	);

	if (isLoading) return <Loading />;

	if (error) return <Error message="Ocorreu um erro, desculpe!" />;

	const textsInfo = [
		{ title: "Localização", value: data.location.name },
		{ title: "Origem", value: data.origin.name },
		{ title: "Espécie", value: SpecieInfoInPortuguese[data.species] },
		{ title: "Status", value: StatusInfoInPortuguese[data.status] },
	];

	return (
		<DefaultLayout>
			<Image
				source={{ uri: data.image, width: 200, height: 200 }}
				resizeMode="contain"
			/>
			<Text>{data.name}</Text>

			<FlatList
				data={textsInfo}
				renderItem={({ item }) => (
					<Text>
						{item.title}: {item.value}
					</Text>
				)}
				keyExtractor={({ title }) => title}
			/>

			<Text>{data.episode.length} Episódio(s)</Text>
		</DefaultLayout>
	);
};
