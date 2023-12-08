import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilos.js';

function TelaMinhasConsultas ({navigation}){

    return(
        
        <SafeAreaView style={estilo.tela}>
            <ScrollView style={estilo.tela}>
                <View style={estilo.appbar}>
                    <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                </View>

                <View style={estilo.container}>
                    <Text style={estilo.titulo}>Minhas Consultas</Text>  

                    <View style={estilo.botoes}>

                        <TouchableOpacity style={estilo.botao} onPress={() => { navigation.navigate( "" ) } }>
                            <Text style={estilo.textbtn}>Consultas</Text>
                            <Text style={estilo.textbtn}>Marcadas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.botao} onPress={() => { navigation.navigate( "" ) } }>
                            <Text style={estilo.textbtn}>Consultas</Text>
                            <Text style={estilo.textbtn}>Realizadas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.botao} onPress={() => { navigation.navigate( "" ) } }>
                            <Text style={estilo.textbtn}>Consultas</Text>
                            <Text style={estilo.textbtn}>Canceladas</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={estilo.lista}>

                        <TouchableOpacity style={estilo.botaoConsulta} onPress={() => { navigation.navigate( "DetalhesConsulta" ) } }>
                            <View style={estilo.row1}>
                                <Text style={estilo.dado1}>Serviço</Text>
                                <Text style={estilo.dado1}>dd/mm/aaaa</Text> 
                            </View>

                            <View style={estilo.row2}>
                                <Text style={estilo.dado2}>00:00h</Text> 
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaMinhasConsultas;