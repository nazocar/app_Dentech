import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    tela:{
        width: '100%',
        height: '100%'
    },

    gradient:{
        width: '100%',
        height: '100%'
    },

    appbar:{
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 5,
        padding: 10
    },

    logo:{
        width: 100,
        height: 41.322,
    },

    container:{
        width: '72%',
        marginTop: 70,
        alignSelf: "center",
    },

    titulo:{
        color: '#002D37',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },

    input:{
        width: 300,
        height: 40,
        padding: 10,
        marginTop: 30,

        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderRadius: 10,
    },

    textInput:{
        color: '#A6A6A6',
        fontSize: 15,
        fontWeight: 700,
        fontFamily: 'Roboto',
    },

    botao:{
        width: 300,
        height: 40,
        marginTop: 40,
        alignItems: 'center',

        backgroundColor: '#002D37',
        borderRadius: 20,
    },

    textbtn:{
        color: '#FFF',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    link:{
        color: '#002D37',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }
});

export default estilo;