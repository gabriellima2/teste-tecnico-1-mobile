import "styled-components";

import { themes } from "./";

declare module "styled-components" {
	type Theme = typeof themes;

	export interface DefaultTheme extends Theme {}
}
