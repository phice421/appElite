import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { View } from 'react-native';

import Produto from './src/telas/Produtos/';
import mock from './src/mocks/produto';
import Sobre from './src/telas/Sobre';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function MenuKit() {
  return <Produto {...mock} />; // enviando o mock para o componente Produto
}

function MenuSobre() {
  return <Sobre />; 
}


const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Combos") {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === "Sobre nós") {
            iconName = 'restaurant-outline';
          } else if (route.name === "Produtos") {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Combos" component={MenuKit} />
      <Tab.Screen name="Sobre nós" component={MenuSobre} />
      <Tab.Screen name="Produtos" component={MenuKit} />
      <Tab.Screen name="Lista de Desejos" component={MenuKit} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Carrega a fonte para o projeto
  const [fonteCarregada] = useFonts({
    "SpaceGRegular": SpaceGrotesk_300Light,
    "SpaceGBold": SpaceGrotesk_700Bold,
  });

  // Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
    </NavigationContainer>
  );
}
