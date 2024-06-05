import React from 'react';
import { StyleSheet, Image, View,Alert} from 'react-native';

import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto
import Botao from '../../../componentes/Botao' 

export default function Detalhes({nome, logo, detalhes, preco}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}> 
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>

            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
          <Botao textoBotao={"adicionar a lista de desejos"} 
          onPress={()=>{Alert.alert("Uhuuuul legal","Você adicionou Torta de Banoffe em seu carrinho!")}} /> 
          </View>
}

const styles = StyleSheet.create({
    produto: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    nome: {
      color: "orange",
      fontSize: 26,
      fontWeight: "bold",
      paddingTop: 30,
      paddingLeft: 35,
    },
    descricao: {
      color: "gray",
      fontSize: 18,
      paddingLeft: 13,
      paddingTop: 30,
      

    },
    preco: {
      color: "red",
      fontSize: 26,
      fontWeight: "bold",
      marginTop: 175,

    },
    logo: {
      width: 100,
      height: 100,
    },
    logotipo: {
      flexDirection: "row",
    }
  });