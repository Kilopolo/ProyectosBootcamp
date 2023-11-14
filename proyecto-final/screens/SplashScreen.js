import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function SplashScreen({ navigation }) {
  const [counter, setCounter] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 1) {
          clearInterval(interval);
          navigation.navigate('Menu'); // Redirige a la pantalla Menu
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.paragraph}>
        En {counter} segundos accederás a tu portal político favorito
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC300',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
  },
});