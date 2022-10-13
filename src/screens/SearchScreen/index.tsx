import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useFetch } from "../../hooks/useFetch";

import { BackButton } from "../../components/BackButton";
import { Characters } from "../../components/Characters";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { BASE_URL } from "../../constants";
import type { RootStackParamList } from "../../Routes";

type SearchScreenProps = NativeStackScreenProps<RootStackParamList, "Search">;

export const SearchScreen = (props: SearchScreenProps) => {
	const value = props.route.params.value;

	const { data, error, isLoading } = useFetch(`${BASE_URL}?name=${value}`, []);

	if (isLoading) return <Loading onFullScreen={true} />;

	return (
		<DefaultLayout>
			<BackButton style={{ position: "absolute", left: 0, zIndex: 10000 }} />

			{error ? (
				<Error message="Erro, tente novamente!" />
			) : (
				<Characters characters={data.results} />
			)}
		</DefaultLayout>
	);
};
