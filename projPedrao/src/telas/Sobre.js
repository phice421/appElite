
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Logo from '../../assets/logo.png';
import EliteFrente from '../../assets/padariaElite.jpg';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <Image source={Logo} style={styles.logo} />

        <Text style={styles.text}>
          Somos uma padaria tradicional em Santo André, fundada em 1993.
          Nosso compromisso é proporcionar sempre os melhores serviços,
          desde um atendimento acolhedor até a oferta de nossos deliciosos produtos de alta
           qualidade.
        </Text>

        <Image source={EliteFrente} style={styles.imagem} />
      </View>
      <Image source={EliteFrente} style={styles.imagem} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 350, 
    height: 350, 
    marginBottom: 10, 
    marginTop: -50,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 24,
    color: 'orange', 
    paddingHorizontal: 15, 
  },

  imagem: {
    width: '100%',
    height: 200,
    paddingBottom: 100,
  },
});

