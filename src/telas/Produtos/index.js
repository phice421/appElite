import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from'./componentes/Item';
import Texto from '../../componentes/Texto';


export default function Index({topo, detalhes, itens}) {

    /* const renderItem = ({item:{nome, imagem}}) => <View key={nome}>
                                                    <Image source={imagem}/>
                                                    <Text>{nome} </Text> 
                                                  </View>
 */
    return <FlatList
          data={itens.lista}
          renderItem={Item}
          keyExtractor={itens.lista.nome}
          ListHeaderComponent={() =>{
            return <>
               <Topo {...topo} />
               <View>
                  <Detalhes {...detalhes} />
                  <Texto style={styles.titulo}>{itens.titulo}</Texto>
               </View>
            </>

          }}
        />
      
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 30,
    textAlign: 'center',

    fontWeight: 'bold',
    color: 'yellow',
    backgroundColor: 'blue',

  }
})