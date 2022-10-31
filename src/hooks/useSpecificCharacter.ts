import { useFetch } from "./useFetch";
import { BASE_URL } from "../constants";
import type { CharacterDetailsData, CharactersData } from "../types";

function ByName(name: string) {
	const response = useFetch<CharactersData>(`${BASE_URL}?name=${name}`, [name]);

	return { ...response };
}

function ByID(id: number) {
	const response = useFetch<CharacterDetailsData>(`${BASE_URL}${id}`, []);

	return { ...response };
}

export const useSpecificCharacter = { ByName, ByID };
