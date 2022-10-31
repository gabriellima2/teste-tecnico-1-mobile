import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useSpecificCharacter } from "../../hooks/useSpecificCharacter";

import { BackButton } from "../../components/BackButton";
import { Loading } from "../../components/Loading";
import { MyImage } from "../../components/Image";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import {
	SpecieInfoInPortuguese,
	StatusInfoInPortuguese,
} from "../../constants";
import type { RootStackParamList } from "../../Routes";

import { Episode, Header, Main, TextInfo, Title, Texts, Span } from "./styles";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export const DetailsScreen = (props: DetailsScreenProps) => {
	const characterID = props.route.params.id;
	const { data, error, isLoading } = useSpecificCharacter.ByID(characterID);

	if (isLoading) return <Loading onFullScreen />;

	if (error) return <Error message="Ocorreu um erro, desculpe!" />;

	const textsInfo = [
		{ title: "Localização", value: data.location.name },
		{ title: "Origem", value: data.origin.name },
		{ title: "Espécie", value: SpecieInfoInPortuguese[data.species] },
		{ title: "Status", value: StatusInfoInPortuguese[data.status] },
	];

	return (
		<DefaultLayout>
			<Header>
				<BackButton style={{ position: "absolute", left: 0 }} />

				<Title>{data.name}</Title>
			</Header>

			<Main>
				<MyImage uri={data.image} width={290} height={290} />

				<Texts>
					{textsInfo.map((text, index) => (
						<TextInfo key={index}>
							{text.title}: <Span>{text.value}</Span>
						</TextInfo>
					))}
				</Texts>

				<Episode>{data.episode.length} Episódio(s)</Episode>
			</Main>
		</DefaultLayout>
	);
};
