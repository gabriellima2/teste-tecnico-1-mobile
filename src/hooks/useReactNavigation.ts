import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../Routes";

export const useReactNavigation = () =>
	useNavigation<NativeStackNavigationProp<RootStackParamList>>();
