import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useFetch } from "../../hooks/useFetch";
import { useReactNavigation } from "../../hooks/useReactNavigation";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { BASE_URL } from "../../constants";
import type { RootStackParamList } from "../../Routes";

type ResultSearchScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"Result"
>;

export const ResultSearchScreen = (props: ResultSearchScreenProps) => {
	const navigation = useReactNavigation();

	const value = props.route.params.value;

	const { data, error, isLoading } = useFetch(`${BASE_URL}?name=${value}`, [
		value,
	]);

	const handleSearch = (value: string) => {
		if (!value.trim()) return;
		navigation.navigate("Result", { value: value });
	};

	if (isLoading) return <Loading onFullScreen={true} />;

	return (
		<DefaultLayout>
			<SearchBar
				withBackButton={true}
				initialValue={value}
				handleOnPress={handleSearch}
			/>

			{error ? (
				<Error message="Erro, tente novamente!" />
			) : (
				<Characters characters={data.results} />
			)}
		</DefaultLayout>
	);
};
