import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

export interface WithChildren {
	children: ReactNode;
}

export interface CharacterData {
	id: number;
	name: string;
	species: "Human" | "Alien" | "unknown";
	image: string;
}

export interface CharactersData {
	results: CharacterData[];
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

export type Style = StyleProp<ViewStyle>;
