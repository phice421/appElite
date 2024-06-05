
import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

import Texto from '../../componentes/Texto'
import Styles from './estilos'

export default function Index({textos}){
    return <ScrollView style={Styles.sobre}>
    <Image source={textos.logo} style={Styles.logo} resizeMode="contain"></Image>
    <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
    <Image source={textos.padariaElite} style={Styles.padariaElite} resizeMode="contain"/>

</ScrollView>
}