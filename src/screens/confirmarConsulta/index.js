import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import estilo from './estilos.js';

function TelaConfirmarConsulta ({navigation}){

    return(
        
        <SafeAreaView style={estilo.tela}>
            <ScrollView style={estilo.tela}>
                <View style={estilo.appbar}>
                    <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                </View>

                <View style={estilo.container}>

                    <View style={estilo.infos}>

                        <View style={estilo.dado}>
                            <Text style={estilo.dado}>Data</Text>
                        </View>

                        <View style={estilo.dado}>
                            <Text style={estilo.dado}>Hora</Text>
                        </View>

                        <View style={estilo.dado}>
                            <Text style={estilo.dado}>Profissional</Text>
                        </View>
                    </View>


                    <View style={estilo.infoServico}>
                        <Text style={estilo.titulo}>Serviço</Text>
                        <Text style={estilo.descricao}>Descrição do serviço......</Text>
                    </View>

                </View>

                <TouchableOpacity style={estilo.botao} onPress={() => { navigation.navigate( "" ) } }>
                    <Text style={estilo.textbtn}>Agendar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "EscolherServico" ) } }>
                    <Text style={estilo.link}>Voltar</Text>
                </TouchableOpacity>
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default TelaConfirmarConsulta;