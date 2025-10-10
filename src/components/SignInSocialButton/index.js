// 1 passo - importar os componentes
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';

// 2 - passo - importar o arquivo de tema
import theme from '../../global/styles/theme';

// 3 - passo - criar função chamada SignInSocialButton
export default function SignInSocialButton(props) // botão personalizado de redes sociais para acessar o aplicativo - props de propriedades
{
    return(

        <TouchableOpacity style={styles.Button}>

            <View style = {styles.ImageContainer}>
                <Image source ={props.icone}></Image>
            </View>

            <Text style={styles.ButtonText}>{props.textoBotao} </Text>


        </TouchableOpacity>

    )
}

const styles = StyleSheet.create ({

    Button:{
        backgroundColor: theme.colors.shape, //usando as definições da pasta theme - estilos
        borderRadius: 5, // arredondar bordar
        height: 56, /// altura
        flexDirection: 'row', // elementos aparecerem um do lado do outro - em formato de linha
        marginBottom: 16,
        alignItems: 'center', // posicionar os itens da vertical no centro
    },

    ImageContainer:{
        backgroundColor: theme.colors.background,
        height: '100%',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRightWidth: 1,
        borderColor: '#B9B9B9'
    },

    ButtonText:{
        textAlign: 'center',
        fontSize: 18,
        marginLeft: 20,

    }



})

