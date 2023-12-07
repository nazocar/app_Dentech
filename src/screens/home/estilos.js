import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    tela:{
        width: '100%',
        height: '100%'
    },

    appbar:{
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 30,
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

    tituloInput:{
        color: '#04BF9D',
        fontSize: 15,
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

    mostrarCards:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    card: {
        width: 100,
        height: 100,
        backgroundColor: '#03BF9E',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default estilo;