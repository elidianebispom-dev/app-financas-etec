// 1 passo importar os componentes necessário para construir a interface
import{View, Text, StyleSheet, Image} from 'react-native';

//2 passo - importar o tema da aplicação
import theme from '../../global/styles/theme';

// importar o componente do botão personalizado
import SignInSocialButton from '../../components/SignInSocialButton';

export default function Home(){

    return(

        <View style={estilos.Container}>

            <View style={estilos.Header}>

                <View style={estilos.TituloWrapper}>

                <Image source={require('../../../assets/logotipo.png')} style={estilos.Logotipo} /> 

                <Text style={estilos.Title}>Controle suas finanças de forma muito simples...!</Text>
                <Text style={estilos.SignInTitle}>Faça seu login com uma das contas abaixo.</Text>
                </View>

            </View>
        

            <View style={estilos.Footer}>

                <View style={estilos.FooterWrapper}>

                <SignInSocialButton 
                icone={require('../../../assets/google.png')}
                textoBotao='Entrar com Google'/>

                <SignInSocialButton 
                icone={require('../../../assets/apple.png')}
                textoBotao='Entrar com Apple'/>

                </View>

            </View>


        </View>

    )
}

//Criando os estilos
const estilos = StyleSheet.create({
    Container: {
        flex: 1,
    },

    Header: {
        width: '100%',
        height: '70%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'flex-end',
    },

    TituloWrapper: {
        alignItems: 'center'
    },

    Title: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 45
    },

    SignInTitle: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 67
    },

    Footer: {
        width: '100%',
        height: '30%',
        backgroundColor: theme.colors.secondary,
    },

    FooterWrapper: {
        marginTop: -4,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    },

    Logotipo: {
        width: 120,
        height: 68
    }
});
