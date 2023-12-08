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

    containerTitulo:{
        alignItems: 'center'
    },

    titulo:{
        color: '#002D37',
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        justifyContent: 'center'
    },

    container:{
        width: '72%',
        marginTop: 30,
        alignSelf: "center",
    },

    infosContainer:{
        backgroundColor: '#04BF9D',
        borderRadius: 15,
        padding: 15
    },

    tituloDado:{
        color: '#FFF',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },

    dado1:{
        color: '#FFF',
        marginTop: 30,
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        justifyContent: 'flex-start'  
    },

    dado2:{
        color: '#FFF',
        padding: 5,
        fontSize: 16,
        fontWeight: 'regularc',
        fontFamily: 'Roboto',
        justifyContent: 'flex-start'  
    },

    botao:{
       width: 255,
       height: 35,
       marginTop: 60,
       padding: 10,
       backgroundColor: '#019B7F',
       borderRadius: 20,
       alignSelf: 'center'
    },

    textbtn:{
        color: '#FFF',
        marginTop: -2,
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