import React, { useState } from 'react';
import { Text, View,  Button } from 'react-native';
import Slider from '@react-native-community/slider';


const CreditSimulator = () => {
  const [montoTotal, setMontoTotal] = useState(5000);
  const [plazo, setPlazo] = useState(3);

  const interes = 0.9798; // 97,98%

  const handleMontoChange = value => {
    setMontoTotal(value);
  };

  const handlePlazoChange = value => {
    setPlazo(value);
  };

  const calculateCuota = () => {
    const interesAmount = montoTotal * interes;
    const totalAmount = montoTotal + interesAmount;
    const cuota = totalAmount / plazo;
    return cuota;
  };

  return (
    <View>
      <Text>Simula tu crédito</Text>

      <View>
        <Text>Monto Total: {montoTotal}</Text>
        <Slider
          minimumValue={5000}
          maximumValue={50000}
          step={100}
          value={montoTotal}
          onValueChange={handleMontoChange}
        />
      </View>

      <View>
        <Text>Plazo: {plazo}</Text>
        <Slider
          minimumValue={3}
          maximumValue={24}
          step={1}
          value={plazo}
          onValueChange={handlePlazoChange}
        />
      </View>

      <Text>Resultado:</Text>
      <Text>TOTAL A DEVOLVER EN CUOTAS: {montoTotal + montoTotal * interes}</Text>
      <Text>CUOTA FIJA EN {plazo} PAGOS: {calculateCuota()}</Text>

      <Button title="Obtener Crédito" onPress={() => console.log("Obtener crédito")} />
      <Button title="Ver detalle de cuotas" onPress={() => console.log("Ver detalle de cuotas")} />
    </View>
  );
};

export default CreditSimulator;
