import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import estilo from './estilos.js';

const TelaHome  = ({ navigation }) => {

    const [mostrarCards, setMostrarCrads] = useState(false);

    const toggleCards = () => {
        setMostrarCrads(!mostrarCards);
    };

    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');

    return(
        <SafeAreaView style={estilo.tela}>
            <ScrollView style={estilo.tela}>
                <View style={estilo.appbar}>
                    <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                </View>

                <View style={estilo.container}>
                    <Text style={estilo.titulo}>Agendar Consulta</Text>

                    <Text style={estilo.tituloInput1}>Informe o mês</Text>

                    <TextInput placeholder="Mês" style={estilo.input} keyboardType="numeric" onChangeText={(texto) => {
                            setMes(texto);
                        } } />

                    <Text style={estilo.tituloInput2}>Informe o ano</Text>

                    <TextInput placeholder="Ano" style={estilo.input} keyboardType="numeric"  onChangeText={(texto) => {
                        setAno(texto);
                    }} />

                    <TouchableOpacity style={estilo.botao} onPress={toggleCards}>
                        <Text style={estilo.textbtn}>Ver horários</Text>
                    </TouchableOpacity>      

                    {mostrarCards && (
                        <View style={estilo.mostrarCards}>

                            <View style={estilo.card}>
                                <TouchableOpacity style={estilo.infoCard} onPress={() => { navigation.navigate( "EscolherServico" ) } }>
                                    <Text style={estilo.infoCard}>infos</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={estilo.card}>
                                <TouchableOpacity style={estilo.infoCard} onPress={() => { navigation.navigate( "EscolherServico" ) } }>
                                    <Text style={estilo.infoCard}>infos</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={estilo.card}>
                                <TouchableOpacity style={estilo.infoCard} onPress={() => { navigation.navigate( "EscolherServico" ) } }>
                                    <Text style={estilo.infoCard}>infos</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default TelaHome;






