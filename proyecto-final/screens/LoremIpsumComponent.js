import React from 'react';
import { View, Text } from 'react-native';

const LoremIpsumComponent = () => {
  
  const loremIpsumText = `Votar es más que un derecho; es una herramienta poderosa que nos da la capacidad de dar forma al futuro que deseamos. Cada voto es una voz que cuenta, una elección que influye en la dirección de nuestra sociedad. Al votar, participamos activamente en la construcción de la comunidad y el país que queremos heredar. Es la forma más directa y tangible de influir en las decisiones que afectan nuestras vidas. Votar no solo es un acto de responsabilidad cívica, sino una expresión de nuestro compromiso con el cambio y la construcción de un futuro colectivo. En resumen, votar es el medio por el cual convertimos nuestras aspiraciones en realidad y ejercemos nuestro derecho a ser arquitectos de nuestro propio destino.`;

  return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, textAlign:"center"}}>Derecho al voto</Text>
        <Text style={{ fontSize: 17,textAlign:"justify"}}>{loremIpsumText}</Text>
      </View>
  );
};

export default LoremIpsumComponent;
