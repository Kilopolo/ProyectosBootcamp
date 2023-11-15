import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ navigation, isLoading }) {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 1 && !isLoading) {
          clearInterval(interval);
          navigation.navigate('Menu'); 
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, [isLoading, navigation]);

  return (
    <ImageBackground source={require('../assets/splash_image.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Bienvenido</Text>
        </View>
        <Text style={styles.counter}>
          Accediendo a tu portal político favorito...
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    marginBottom: 40 
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A5ACD',
  },
  counter: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
  },
});