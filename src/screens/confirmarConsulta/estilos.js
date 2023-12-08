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
        width: '80%',
        height: '75%',
        marginTop: 100,
        alignSelf: "center",
        backgroundColor: "#03BF9E",
        borderRadius: 15
    },

    infos: {
        flexDirection: 'row',
        padding: 40,
        justifyContent: 'space-between'
    },

    dado: {
        color: '#FFF',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    infoServico:{
        alignItems: 'center',
    },

    titulo:{
        color: '#FFF',
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    descricao:{
        color: '#FFF',
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'regular',
        fontFamily: 'Roboto'
    },

    botao:{
        width: 300,
        height: 40,
        marginTop: 30,
        alignSelf: 'center',

        backgroundColor: '#002D37',
        borderRadius: 20,
    },

    textbtn:{
        color: '#FFF',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },

    link:{
        color: '#002D37',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }

})

export default estilo;