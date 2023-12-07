import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    gradient:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    inicialLogo:{
        width: 250,
        height: 103.31,
        flex: 0
    },

    botaoCadastrar:{
        marginTop: 40,
        width: 250,
        height: 40,
        backgroundColor: 'transparent',

        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#002D37',
        justifyContent: 'center',
        alignItems: 'center'
    },

    botaoTxtCadastrar:{
        color: '#002D37',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    botaoEntrar:{
        marginTop: 10,
        width: 250,
        height: 40,
        backgroundColor: '#04BF9D',

        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#04BF9D',
        justifyContent: 'center',
        alignItems: 'center'
    },

    botaoTxtEntrar:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }
});

export default estilo;