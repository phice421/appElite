import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Card, Text, Button } from 'react-native-paper';

// Importando imagens locais
import boloFuba from '../../../assets/produtos/boloFuba.jpeg';
import strudel from '../../../assets/produtos/strudel.jpeg';
import catarina from '../../../assets/produtos/catarina.jpeg';
import sonho from '../../../assets/produtos/sonho.jpeg';
import tortaMorango from '../../../assets/produtos/tortaMorango.jpeg';
import burguer from '../../../assets/produtos/burguer.jpeg';

// Mock de dados
const cardData = [
  {
    id: 1,
    title: 'Bolo de Fubá com Erva Doce',
    subtitle: 'DELICIOSO BOLO CASEIRO',
    description: 'Este é um delicioso bolo de fubá feito com erva doce. Perfeito para um café da tarde!',
    image: boloFuba,
  },
  {
    id: 2,
    title: 'Strudel de Banana',
    subtitle: 'DELICIOSO STRUDEL FEITO COM BANANAS',
    description: 'Um strudel crocante e saboroso recheado com bananas maduras e canela.',
    image: strudel,
  },
  {
    id: 3,
    title: 'Catarina de Queijo',
    subtitle: 'SALGADO FEITO COM MASSA FOLHADA TRANÇADA RECHEADA COM QUEIJO',
    description: 'Uma deliciosa catarina feita com massa folhada trançada e recheada com queijo derretido.',
    image: catarina,
  },
  {
    id: 4,
    title: 'Sonho de Creme',
    subtitle: 'SONHO DE PADARIA RECHEADO COM CREME',
    description: 'Um sonho macio e saboroso recheado com um delicioso creme de baunilha.',
    image: sonho,
  },
  {
    id: 5,
    title: 'Torta de Morango',
    subtitle: 'TORTA DE MORANGO CONFECCIONADA COM MORANGOS FRESQUINHOS',
    description: 'Uma torta de morango fresca e deliciosa feita com morangos suculentos.',
    image: tortaMorango,
  },
  {
    id: 6,
    title: 'X-Salada',
    subtitle: 'PAO LEVEMENTE TOSTADO NA MANTEIGA, BLEND DE CARNES BOVINAS, TOMATE, ALFACE E MAIONESE',
    description: 'Um saboroso sanduíche de hambúrguer com uma mistura especial de carnes bovinas, tomate, alface e maionese.',
    image: burguer,
  }
];

// Componente Avatar para o Card
const LeftContent = props => <Avatar.Icon {...props} icon="basket" color="red" backgroundColor="yellow"/>

const MyComponent = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardPress = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cardData.map(card => (
          <Card key={card.id} style={styles.card}>
            <Card.Title 
              title={<Text style={styles.cardTitle}>{card.title}</Text>} 
              subtitle={<Text style={styles.cardSubtitle}>{card.subtitle}</Text>} 
              left={LeftContent} 
            />
            <Card.Cover source={card.image} style={styles.cardImage} />
            {expandedCard === card.id && (
              <Card.Content style={styles.cardContent}>
                <Text style={styles.cardDescription}>{card.description}</Text>
              </Card.Content>
            )}
            <Card.Actions>
              <Button onPress={() => handleCardPress(card.id)}>Ver descrição</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 10,
  },
  card: {
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'yellow',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -1, // Move a imagem para mais perto do topo
  },
  
  cardContent: {
    padding: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
  },
});

export default MyComponent;
