import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Title = () => {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>Article Title</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		alignSelf: 'center',
		justifyContent: 'flex-end',
	},

	title: {
		fontSize: 30,
		fontWeight: '800',
		color: 'white',
		paddingBottom: 20,
	},
});

export default Title;
