import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ArticleDescription = () => {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.description}>Article Description</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 0.4,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		position: 'relative',
		bottom: 0,
		// top: 500,
		backgroundColor: 'red',
	},

	description: {
		fontSize: 16,
		fontWeight: '600',
		color: 'black',
		paddingBottom: 20,
	},
});

export default ArticleDescription;
