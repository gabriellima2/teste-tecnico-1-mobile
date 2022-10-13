import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useReactNavigation } from "../../hooks/useReactNavigation";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { BASE_URL, PAGE_LIMIT } from "../../constants";

import { Main } from "./styles";

export const HomeScreen = () => {
	const navigation = useReactNavigation();

	const [currentPage, setCurrentPage] = useState(1);
	const { data, error, isLoading } = useFetch(
		`${BASE_URL}?page=${currentPage}`,
		[currentPage],
		{ keepPreviousData: true }
	);

	const handleSearch = (value: string) => {
		if (!value.trim()) return;
		navigation.navigate("Search", { value: value });
	};

	if (isLoading) return <Loading onFullScreen={true} />;

	if (error) return <Error message="Ocorreu um erro, desculpe!" />;

	return (
		<DefaultLayout>
			<Main>
				<SearchBar handleOnPress={handleSearch} />

				<Characters
					characters={data.results}
					handleEndReached={() => {
						if (currentPage === PAGE_LIMIT) return;

						setCurrentPage((prev) => prev + 1);
					}}
					handleShowLoading={currentPage !== PAGE_LIMIT}
				/>
			</Main>
		</DefaultLayout>
	);
};
