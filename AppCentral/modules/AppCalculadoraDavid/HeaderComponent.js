import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeaderComponent = () => {
    
    const [imageToShow, setImageToShow] = useState(require('../../assets/fitness.png')); // Imagen que se mostrará todo el tiempo
  
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
