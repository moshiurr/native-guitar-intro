import React from "react";
import {
	View,
	Text,
	Dimensions,
	FlatList,
	StyleSheet,
	ImageBackground,
} from "react-native";

const GuitarList = () => {
	const guitars = [
		{
			name: "Ibanez",
			price: 299,
			image: require("../assets/ibanez_custom.jpeg"),
		},
		{
			name: "Jackson",
			price: 399,
			image: require("../assets/jackson_2.jpeg"),
		},
		{
			name: "Gibson",
			price: 199,
			image: require("../assets/green_gibson.jpeg"),
		},
	];

	return (
		<View style={styles.container}>
			<FlatList
				data={guitars}
				renderItem={({ item }) => (
					<Text>{item.image}</Text>
					// <ImageBackground source={item.image} style={styles.image} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
export default GuitarList;
