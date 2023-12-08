import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import estilo from './estilos.js';

function TelaEscolherServico ({navigation}){

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


                    <View style={estilo.servicos}>
                        
                        <TouchableOpacity style={estilo.opcao} onPress={() => { navigation.navigate( "ConfirmarConsulta" ) } }>
                            <Text style={estilo.opcao}>Clínico Geral</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.opcao} onPress={() => { navigation.navigate( "" ) } }>
                            <Text style={estilo.opcao}>Ortodontia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.opcao} onPress={() => { navigation.navigate( "" ) } }>
                            <Text style={estilo.opcao}>Endodontia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.opcao} onPress={() => { navigation.navigate( "" ) } }>
                            <Text style={estilo.opcao}>Periodontia</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "Home" ) } }>
                    <Text style={estilo.link}>Voltar</Text>
                </TouchableOpacity>
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default TelaEscolherServico;