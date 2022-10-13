import { ReactNode } from "react";

export interface WithChildren {
	children: ReactNode;
}

export interface CharacterData {
	id: number;
	name: string;
	species: "Human" | "Alien" | "unknown";
	image: string;
}

export interface CharacterDetailsData extends CharacterData {
	status: "Dead" | "Alive" | "unknown";
	origin: {
		name: string;
	};
	location: {
		name: string;
	};
	episode: string[];
}
