import { useInifiniteCharacters } from "../../hooks/useInfiniteCharacters";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { PAGE_LIMIT } from "../../constants";

import { Main } from "./styles";

export const HomeScreen = () => {
	const { data, error, isLoading, currentPage, changeCurrentPage } =
		useInifiniteCharacters(PAGE_LIMIT);

	if (isLoading) return <Loading onFullScreen />;

	if (error) return <Error message="Ocorreu um erro, desculpe!" />;

	return (
		<DefaultLayout>
			<Main>
				<SearchBar />

				<Characters
					characters={data.results}
					handleEndReached={changeCurrentPage}
					handleShowLoading={currentPage !== PAGE_LIMIT}
				/>
			</Main>
		</DefaultLayout>
	);
};
