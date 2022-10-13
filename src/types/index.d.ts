import { ReactNode } from "react";

export interface WithChildren {
	children: ReactNode;
}

export interface CharacterData {
	id: number;
	name: string;
	species: "Human" | "Alien";
	image: string;
}
