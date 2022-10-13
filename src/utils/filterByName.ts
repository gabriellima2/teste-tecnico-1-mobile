import type { CharacterData } from "../types";

export function filterByName(characters: CharacterData[], name: string) {
	return characters.filter((character) =>
		character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
	);
}
