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
        marginTop: 5,
        padding: 10
    },

    logo:{
        width: 100,
        height: 41.322,
    },

    container:{
        width: '80%',
        height: '75%',
        marginTop: 100,
        alignSelf: "center",
        borderRadius: 15
    },

    titulo:{
        color: '#002D37',
        alignSelf: 'center',
        marginTop: -70,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    botoes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    botao:{
        width: 100,
        height: 57,
        padding: 10,
        backgroundColor: '#002D37',
        borderRadius: 25,
        marginTop: 30
    },

    textbtn:{
        color: '#FFF',
        alignSelf: 'center',
        marginTop: 2,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    lista:{
        alignItems: 'center'
    },

    botaoConsulta:{
        width: 331.4,
        height: 220,
        backgroundColor: '#00A488',
        borderRadius: 15,
        marginTop: 25,
        padding: 15,
    },

    row1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },

    dado1:{
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    row2:{
        padding:15,
        marginTop: -10
    },

    dado2:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },

    listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 50,
        alignItems: "center"
    },

    btnCancelar: {
        width: '100',
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        margin: 20
    },

    btnCancelarTxt: {
        color: "white",
        fontWeight: "bold"
    }


})

export default estilo;