import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const HeaderComponent = () => {
    const [loaded] = useFonts({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
  
    const [imageToShow, setImageToShow] = useState(require('./fitness.png')); // Imagen que se mostrará todo el tiempo
  
    if (!loaded) {
      return null;
    }
  
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.star}>⭐</Text> {'¡Calcula tu Índice de Masa Corporal (IMC)!'} <Text style={styles.star}>⭐</Text>
        </Text>
        <View style={styles.imageContainer}>
          {imageToShow && <Image source={imageToShow} style={styles.image} />}
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginTop: 25,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    alignItems: 'center',
  },
  star: {
    fontSize: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default HeaderComponent;
