// 1 passo - Importar os componentes de navegação
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 2 passo - Importar as telas
import Dashboard from './screens/dashboard';
import Home from './screens/home';

//Importando os icones;
import AntDesign from '@expo/vector-icons/AntDesign';

// Importando o theme dos estilos
import theme from './global/styles/theme';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Entypo from '@expo/vector-icons/Entypo';


const Tab = createBottomTabNavigator();

export default function Routes(){

    return(
        //navegationContainer - onde vai ser criada as abas do app
        //tab.screen são as abas que terão - nesse caso são três 
        //função que executa algo - que nao vai mais utilizar ({}) => ({
        <NavigationContainer>
            <Tab.Navigator screenOptions={({}) => ({
                headerShow: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                
                tabBarStyle:
                {
                    flexDirection: 'row'
                },

                style:
                {
                    size: 20,
                    height: 88
                },

                tabBarLabelStyle:
                {
                    fontSize: 16,
                    fontWeight: 'bold'
                },
                             

            })}>

                <Tab.Screen name="Listagem" component={Dashboard}

                options={{
                    tabBarIcon:(({size,color }) => (

                        <AntDesign name="unordered-list" size={24} color={theme.colors.text} />

                    ))

                }}
            
            />

                <Tab.Screen name="Cadastrar" component={Home}

                options={{
                    tabBarIcon:(({size,color }) => (

                        <MaterialIcons name="attach-money" size={24} color={theme.colors.text} />

                    ))

                }}

            />

                
                <Tab.Screen name="Resumo" component={Home}

                options={{
                    tabBarIcon:(({size,color }) => (

                        <MaterialIcons name="attach-money" size={24} color={theme.colors.text} />

                    ))

                }}

                
            />


       
              

            </Tab.Navigator>

        </NavigationContainer>

    );

}
