import React from 'react';
import { View, StyleSheet, ImageBackground, requireNativeComponent } from 'react-native';
import HeaderComponent from './HeaderComponent';
import IMCCalculator from './IMCCalculator';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./imagen1.jpg')} style={styles.container}>
      <HeaderComponent />
      <IMCCalculator />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
