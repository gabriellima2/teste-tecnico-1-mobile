import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";

import { Characters } from "../../components/Characters";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { BASE_URL, PAGE_LIMIT } from "../../contants";

export const HomeScreen = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, error, isLoading } = useFetch(
		`${BASE_URL}?page=${currentPage}`,
		[currentPage],
		{ keepPreviousData: true }
	);

	if (isLoading) return <Loading />;

	if (error) return <Error message="Ocorreu um erro, desculpe!" />;

	return (
		<DefaultLayout>
			<Characters
				characters={data.results}
				handleEndReached={() => {
					if (currentPage === PAGE_LIMIT) return;

					setCurrentPage((prev) => prev + 1);
				}}
			/>
		</DefaultLayout>
	);
};
