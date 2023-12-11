import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, Alert, FlatList, ScrollView } from 'react-native';
import estilo from './estilos.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Consultas from '../../api/Consultas.js';
import Servicos from '../../api/Servicos.js';

const TelaHome  = ({ navigation }) => {

    const [mostrarCards, setMostrarCards] = useState(false);

    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [dados, setDados] = useState([]);

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

                    <TouchableOpacity style={estilo.botao} onPress={async () => {

                        // Resgatando o token de autenticação
                        const tokenJson = await AsyncStorage.getItem("token");
                        const token = JSON.parse(tokenJson);

                        // Buscando consultas
                        const consultas = new Consultas();
                        const servicos = new Servicos();

                        const resultado = await consultas.buscar(token,'','','',`${ano}-${mes}`,'disponivel',"");

                        if (resultado.status === 'error') {
                            return Alert.alert("Ops, algo deu errado...", resultado.msg);
                        }

                        for (let consulta of resultado.dados) {

                            const service = await servicos.buscar(consulta.idServico, token);
                            consulta.nomeServico = service.dados.nomeServico;
                            
                            const [ano, mes, dia] = consulta.data.split('-');
                            consulta.dataFormatada = `${dia}/${mes}/${ano}`;

                            consulta.preco = service.dados.preco;

                        }

                        console.log(resultado.dados)

                        setDados(resultado.dados);

                        setMostrarCards(true);
                    }}>
                        <Text style={estilo.textbtn}>Ver horários</Text>
                    </TouchableOpacity>   

                    {mostrarCards && (
                        <ScrollView contentContainerStyle={estilo.listContainer}>
                            <Text style={estilo.tituloHorario}>Horários disponíveis</Text>
                            {dados.map((item, index) => (
                            <View key={index} style={estilo.card}>
                                <Text style={estilo.tituloCard}>{item.nomeServico}</Text>
                                <Text style={estilo.infoCard}>{`${item.dataFormatada}`}</Text>
                                <Text style={estilo.infoCard}>{`${item.horario}`}</Text>
                                <Text style={estilo.infoCard}>{`R$: ${item.preco}`}</Text>
                                <TouchableOpacity style={estilo.btnConsulta} onPress={async () => {
                                    // console.log(item._id);

                                    const dadosJson = await AsyncStorage.getItem("dados");
                                    const tokenJson = await AsyncStorage.getItem("token");

                                    const dadosUser = JSON.parse(dadosJson);
                                    const token = JSON.parse(tokenJson);

                                    console.log(dadosUser);

                                    // Marcando consulta
                                    const consulta = new Consultas('', '', '', '',dadosUser.id, item.idServico);

                                    const resultado = await consulta.alterarStatus(token, item._id, 'agendado');

                                    if (resultado.status === 'success') {
                                        setMostrarCards(false);
                                        Alert.alert("Sucesso!", `Consulta agendada.`);
                                        navigation.navigate("MinhasConsultas");
                                        
                                    } else {
                                        Alert.alert("Ops...", `Não foi possível agendar sua consulta. Tente novamente mais tarde;`);
                                    }
                                    
                                }}>
                                <Text style={estilo.textbtn}>Agendar</Text>
                                </TouchableOpacity>
                            </View>
                            ))}
                        </ScrollView>
                    )}
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default TelaHome;






