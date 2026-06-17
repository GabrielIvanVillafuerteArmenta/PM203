/*Zona1: de componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/*Zona2: Hogar de los componentes*/

export default function App() {

  return (

    <View style={styles.container}>

    <Perfil estiloExt={styles.tarjetaRoja} nombre="Gabriel Ivan Villafuerte Armenta" carrera="Ingeniería en Sistemas" materia="Programación Móvil" cuatrimestre="9°" />

    <Perfil
    estiloExt={styles.tarjetaVerde}
    nombre="Gabriel Ivan Villafuerte Armenta" 
    carrera="Ingeniería en Sistemas" 
    materia="Programacion Móvil" 
    cuatrimestre="9" />


    <Perfil
    estiloExt={styles.tarjetaVerde}
    nombre="Gabriel Ivan Villafuerte Armenta" 
    carrera="Ingeniería en Sistemas" 
    materia="Programacion Móvil" 
    cuatrimestre="9" />

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
    justifyContent: 'Space-evenly',
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
  },

  tarjetaRoja:{backgroundColor: '#ff6b6b'},
  tarjetaVerde:{backgroundColor: '#6bcb77'}

});
