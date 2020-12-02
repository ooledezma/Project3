import React from 'react';
import {
	StatusBar,
	View,
	useWindowDimensions,
	StyleSheet,
	ImageBackground,
	Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../components/Title';
import ArticleDescription from '../components/ArticleDescription';

const image = { uri: 'https://reactjs.org/logo-og.png' };

const ArticleSwipe = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<View style={styles.container}>
				<ImageBackground source={image} style={styles.image}>
					<LinearGradient
						locations={[0, 0.2, 0.6, 0.93]}
						colors={[
							'rgba(0,0,0,0.5)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,1)',
						]}
						style={styles.gradient}
					/>
					<Title />
				</ImageBackground>
				<ArticleDescription />
			</View>
		</>
	);
};

{
	/* <LinearGradient
	colors={['rgba(1,1,1,0.8)', 'transparent']}
	style={{
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300,
	}}
/>; */
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	image: {
		flex: 0.6,
	},
	gradient: {
		height: '100%',
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
	},
});

export default ArticleSwipe;
