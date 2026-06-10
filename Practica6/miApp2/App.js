/*Zona1: de componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';

/*Zona2: Hogar de los componentes*/

export default function App() {
  return (
    <View style={styles.container}>

      <Text>-----------------------Componentes nativos-----------------------</Text>

      <Image source={require('./assets/wave.png')} style={styles.image} />
      <Text>Hola Mundo ReactNative</Text>

      <Text>-----------------------Componentes propio simple-----------------------</Text>
      <Saludo />

      <Text>-----------------------Componentes propio compuesto-----------------------</Text>
      <Saludo2 />

      <StatusBar style="auto" />
    </View>
  );
}

/*Zona3: Estilos y colores*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
});
