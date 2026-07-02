import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetaScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import TextInputScreen from './TextInputScreen';
import ImagenBackgroundScreen from './ImagenBackgroundScreen';
import FlatListScreen from './FlatListScreen';


export default function MenuScreen() {
  
    const[screen,setScreen] = useState('menu');

    switch(screen){
      case 'tarjetas':
        return <TarjetaScreen/>
      case 'safearea':
        return <SafeAreaScreen/>
      case 'pressable':
        return <PressableScreen/>

      case 'activityindicator':
        return <ActivityIndicatorScreen/>

      case 'textinput':
        return<TextInputScreen/>

      case 'flatlist':
         return<FlatListScreen/>

      case 'imagenbackground':
        return<ImagenBackgroundScreen/>

      case 'menu':
        default:
        return (
          <View style={styles.container}>

             <Text>Menu de practicas: </Text>

             <Button onPress={()=>setScreen('tarjetas')} title="Practica tarjetas" color="#ff0000"/>

             <Button onPress={()=>setScreen('safearea')} title="Practica SafeAreaview" color="#002c00"/>

             <Button onPress={()=>setScreen('pressable')} title="Practica Pressable " color="#00303e"/>

             <Button onPress={()=>setScreen('textinput')} title="Practica TextInput" color="#4f5303"/>

             <Button onPress={()=>setScreen('flatlist')} title="Practica Flatlist" color="#ffa600"/>

             <Button onPress={()=>setScreen('imagenbackground')} title="Practica ImagenBackground" color="#ff00aa"/>

             <Button onPress={()=>setScreen('activityindicator')} title="Practica ActivityIndicator" color="#ff3700"/>

             <Button onPress={()=>setScreen('modal')} title="Practica Modal" color="#00ffa2"/>



             <StatusBar style="auto" />

             </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 60,
    margin: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
});