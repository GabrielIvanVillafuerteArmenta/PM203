import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';

export default function TarjetaScreen() {
  return (
    <View style={styles.container}>
      
      <Perfil
        estiloExt = {styles.tarjetaroja}
        nombre="Gabriel Iván Villafuerte Armenta"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />

      <Perfil 
        estiloExt = {styles.tarjetaverde}
        nombre="Gabriel Iván Villafuerte Armenta"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />

       <Perfil 
        estiloExt = {styles.tarjetaroja}
        nombre="Gabriel Iván Villafuerte Armenta"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  tarjetaroja: {
    backgroundColor: '#e70303',
  },

  tarjetaverde: {
    backgroundColor: '#0a9e0a',
  },
});