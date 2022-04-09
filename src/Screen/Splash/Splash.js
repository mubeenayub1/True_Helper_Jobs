import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);
  });
  return (
    <ImageBackground
      source={require('../../Assets/backimage.png')}
      style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={require('../../Assets/logo.png')} />
        <Image source={require('../../Assets/text.png')} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '30%',
    width: '80%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Splash;
