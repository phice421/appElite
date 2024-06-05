import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar} from 'react-native';

import Header from '../../../../assets/produtos/produto1.jpg'
import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
          <StatusBar />
          <Image source={Header} style={styles.topo} />
          <Texto style={styles.titulo}>{titulo}</Texto>
    </>
}

const styles = StyleSheet.create({
    topo: {
      width: "100%",
      height: 1197 / 1600 * width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "left",
      fontSize: 20,
      color: "orange",
      fontWeight: "bold",
      padding: 10,
      backgroundColor: "yellow", // 
      borderRadius: 10 // Ajuste este valor para alterar o quanto as bordas serão arredondadas
    },
  });