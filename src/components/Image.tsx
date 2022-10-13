import { Image } from "react-native";

interface MyImageProps {
	uri: string;
	width?: number;
	height?: number;
}

export const MyImage = (props: MyImageProps) => (
	<Image
		source={{ uri: props.uri, width: props.width, height: props.height }}
		resizeMode="contain"
		borderRadius={200}
	/>
);

const defaultProps: Omit<MyImageProps, "uri"> = {
	width: 230,
	height: 230,
};

MyImage.defaultProps = defaultProps;
