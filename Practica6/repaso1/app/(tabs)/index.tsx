import React, { useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(Number(semestre))) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Registro de Evento Universitario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.fila}>
          <Text>¿Asistirá al taller?</Text>
          <Switch value={taller} onValueChange={setTaller} />
        </View>

        <View style={styles.fila}>
          <Text>¿Requiere constancia?</Text>
          <Switch value={constancia} onValueChange={setConstancia} />
        </View>

        <View style={styles.fila}>
          <Text>¿Participará en deportes?</Text>
          <Switch value={deportes} onValueChange={setDeportes} />
        </View>

        <View style={styles.boton}>
          <Button title="Enviar Registro" onPress={enviarRegistro} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 390,
    borderWidth: 3,
    borderColor: '#000',
    padding: 12,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 14,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  boton: {
    marginTop: 25,
  },
});