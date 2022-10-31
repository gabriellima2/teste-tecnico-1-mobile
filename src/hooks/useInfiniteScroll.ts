import { useState } from "react";
import { PAGE_LIMIT } from "../constants";

export function useInifiniteScroll(pageLimit: number = PAGE_LIMIT) {
	const [currentPage, setCurrentPage] = useState(1);

	const changeCurrentPage = () => {
		if (currentPage === pageLimit) return;

		setCurrentPage((prevState) => (prevState += 1));
	};

	return {
		currentPage,
		changeCurrentPage,
	};
}
