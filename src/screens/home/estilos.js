import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    tela:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#9DF9E8'
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

    btnConsulta:{
        width: 230,
        height: 40,
        marginTop: 30,
        alignItems: 'center',

        backgroundColor: '#002D37',
        borderRadius: 20,
    },

    textbtn:{
        color: '#FFF',
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    mostrarCards:{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        flex: 1
    },

    card: {
        width: '100',
        height: 250,
        backgroundColor: '#03BF9E',
        margin: 10,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15,
        padding: 30
      },

      tituloCard: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      },

      infoCard: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      },

      listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 50,
        alignItems: "center"
      },

      tituloHorario: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      }

})

export default estilo;