import { DependencyList, useEffect, useState } from "react";

import type { CharactersData } from "../types";

export interface UseFetchOptions {
	keepPreviousData?: boolean;
}

export function useFetch<T>(
	url: string,
	deps: DependencyList,
	options?: UseFetchOptions
) {
	const [data, setData] = useState({} as T);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const handleResponseData = (responseData: T) => {
		const havePreviousData = Object.keys(data).length > 0;

		if (havePreviousData && options?.keepPreviousData) {
			return setData((prevState) => ({
				...prevState,
				results: [
					...(prevState as CharactersData).results,
					...(responseData as CharactersData).results,
				],
			}));
		}

		setData(responseData);
	};

	useEffect(() => {
		(async () => {
			try {
				const response: T & { error: string } = await (await fetch(url)).json();

				if (response.error) throw new Error();

				handleResponseData(response);
			} catch (err) {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		})();
	}, deps);

	return {
		data,
		error,
		isLoading,
	};
}
