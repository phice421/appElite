import React from "react";

import{View, Image} from "react-native";


import Texto from '../../../componentes/Texto';
import { StyleSheet } from "react-native";


export default function Item({item:{nome,imagem}}){
    
    return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem}/>
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
        item: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingVertical: 16,
            alignItems: "center",
        },
        nome: {
            fontSize: 20,
            lineHeight: 26,
            marginLeft: 25,
            color: "blue",
        },
        imagem: {
            width: 80,
            height: 80,
            marginLeft: 20,
        }
})