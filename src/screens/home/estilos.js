import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    tela:{
        width: '100%',
        height: '100%',
        backgroundColor: '#9DF9E8'
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

    tituloInput1:{
        color: '#04BF9D',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'flex-start',
        marginTop: 40
    },

    tituloInput2:{
        color: '#04BF9D',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'flex-start',
        marginTop: 20
    },


    input:{
        width: 300,
        height: 40,
        padding: 10,
        marginTop: 10,

        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderRadius: 10,
    },


    botao:{
        width: 300,
        height: 40,
        marginTop: 30,
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
        marginTop: 30
    },

    card: {
        width: 100,
        height: 100,
        backgroundColor: '#03BF9E',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 15
      },

      infoCard: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      }
})

export default estilo;