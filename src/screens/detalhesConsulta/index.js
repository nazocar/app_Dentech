import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilos.js';

function TelaDetalhesConsulta ({navigation}){

    return(
        <SafeAreaView style={estilo.tela}>
            <ScrollView style={estilo.tela}>
                <View style={estilo.appbar}>
                    <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                </View>

                <View style={estilo.containerTitulo}>
                    <Text style={estilo.titulo}>Detalhes da Consulta</Text>
                </View>

                <View style={estilo.container}> 

                    <View style={estilo.infosContainer}>
                        <Text style={estilo.tituloDado}>Serviço</Text>

                        <Text style={estilo.dado1}>Descrição do serviço</Text>
                        <Text style={estilo.dado2}>descrição...</Text>

                        <Text style={estilo.dado1}>Data</Text>
                        <Text style={estilo.dado2}>dd/mm/aaaa</Text>

                        <Text style={estilo.dado1}>Hora</Text>
                        <Text style={estilo.dado2}>00:00h</Text>

                        <Text style={estilo.dado1}>Profissional</Text>
                        <Text style={estilo.dado2}>Profissional escolhido</Text>

                        <TouchableOpacity style={estilo.botao} disabled={true}>
                            <Text style={estilo.textbtn}>Consulta realizada</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "MinhasConsultas" ) } }>
                        <Text style={estilo.link}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaDetalhesConsulta;