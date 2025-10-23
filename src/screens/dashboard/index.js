//1 Passo - Importando os componentes do react native
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

//2 Passo - Importando o arquivo do tema
import theme from '../../global/styles/theme';

// Importando os icones
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//3 Passo - Criar a função que constroi a tela
export default function Dashboard(){
    return(
        <View style={styles.Container}>
            <View style={styles.Header}>
                <View style={styles.UserWrapper}>
                    
                    <View style={styles.UserInfo}>
                        <Image style={styles.Photo} source={{uri:'https://randomuser.me/api/portraits/men/39.jpg'}} />

                        <View style={styles.User}>
                            <Text style={styles.UserGreeting}>Olá</Text>    
                            <Text style={styles.UserName}>Caio Malheiros</Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                          <MaterialIcons style={styles.Icon} name="power" size={24} />
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

//4 passo - criar os estilo
const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: theme.colors.background
    },
    Header:{
        width:'100%',
        height:'40%',
        backgroundColor: theme.colors.primary,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    UserWrapper:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:70,
        paddingHorizontal:24
    },
    UserInfo:{
        flexDirection:'row',
        alignItems:'center'
    },
    Photo:{
        width:40,
        height:40,
        borderRadius:10
    },

    User:{
        marginLeft:20
    },

    UserGreeting:{
        color: theme.colors.shape,
        fontSize:18
    },
    UserName:{
        color: theme.colors.shape,
        fontSize:18,
        fontWeight:'bold'
    },

    Icon:{
        color:theme.colors.secondary
    }
});