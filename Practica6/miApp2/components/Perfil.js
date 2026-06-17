/* Perfil usando objetos destructuracion */

import { View, Text, Button, StyleSheet } from "react-native";
import React, {useState} from "react";

export const Perfil = ({nombre, carrera, materia, cuatrimestre, estiloExt }) => {
    const[mostrar, setMostrar] = useState(false)

    return (
        <View style={[styles.tarjeta,estiloExt]}>
            
            <Text style={styles.nombre}>{nombre}</Text>

            {/* Renderizado condicional */}
            { mostrar &&
            <>
            <Text style={styles.carrera}>{carrera}</Text>
            <Text style={styles.otroTexto}>{materia}</Text>
            <Text style={styles.otroTexto}>{cuatrimestre}</Text>
            </>
            }

            <Button title="Mostrar Perfil" onPress={() => setMostrar(!mostrar)} />

        </View>
    );
}

const styles = StyleSheet.create({
    nombre:{
        fontsize: 18,
        fontWeight: 600,
        texttransform: 'uppercase',
    },
    carrera:{
        fontsize: 12,
        color: 'blue',
        fontfamily: 'Roboto',

    },
    otroTexto:{
        fontsize: 12,
        fontfamily: 'couriere',
        fontstyle: 'italic',
    },
    tarjeta:{
        borderWidth: 2,
        padding: 25,
        margin: 15,
    },


})