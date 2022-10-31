import { useInifiniteScroll } from "./useInfiniteScroll";
import { useFetch } from "./useFetch";

import { BASE_URL } from "../constants";
import type { CharactersData } from "../types";

export function useInifiniteCharacters(pageLimit: number) {
	const { currentPage, changeCurrentPage } = useInifiniteScroll(pageLimit);
	const { data, error, isLoading } = useFetch<CharactersData>(
		`${BASE_URL}?page=${currentPage}`,
		[currentPage],
		{ keepPreviousData: true }
	);

	return {
		currentPage,
		changeCurrentPage,
		data,
		error,
		isLoading,
	};
}
