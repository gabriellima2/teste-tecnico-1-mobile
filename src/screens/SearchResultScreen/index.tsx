import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useSpecificCharacter } from "../../hooks/useSpecificCharacter";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { RootStackParamList } from "../../Routes";

type SearchResultScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"Result"
>;

export const SearchResultScreen = (props: SearchResultScreenProps) => {
	const value = props.route.params.value;
	const { data, error, isLoading } = useSpecificCharacter.ByName(value);

	if (isLoading) return <Loading onFullScreen />;

	return (
		<DefaultLayout>
			<SearchBar showBackButton={true} />

			{error ? (
				<Error message="Houve um problema, verifique a ortográfia e sua conexão." />
			) : (
				<Characters characters={data.results} />
			)}
		</DefaultLayout>
	);
};
