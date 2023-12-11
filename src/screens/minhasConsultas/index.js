import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import estilo from './estilos.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clientes from '../../api/Clientes.js';
import Consultas from '../../api/Consultas.js';
import Servicos from '../../api/Servicos.js';

function TelaMinhasConsultas ({navigation}){

    const [mostrarCards, setMostrarCards] = useState(false);
    const [mostrarBotao, setMostrarBotao] = useState(false);
    const [dadosConsultas, setDadosConsultas] = useState([]);


    return(
        
        <SafeAreaView style={estilo.tela}>
            <ScrollView style={estilo.tela}>
                <View style={estilo.appbar}>
                    <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                </View>

                <View style={estilo.container}>
                    <Text style={estilo.titulo}>Minhas Consultas</Text>  

                    <View style={estilo.botoes}>

                        <TouchableOpacity style={estilo.botao} onPress={async () => {

                            // Resgantando o token de autenticação
                            const tokenJson = await AsyncStorage.getItem("token");
                            const token = JSON.parse(tokenJson);

                            // Regatando dados do cliente
                            const clienteJson = await AsyncStorage.getItem("dados");
                            const dadosCliente = JSON.parse(clienteJson);

                            const consultas = new Consultas();
                            const servicos = new Servicos();

                            const minhasConsultas = await consultas.buscar(token, '', dadosCliente.id,'','', 'agendado', "");

                            
                            if (minhasConsultas.status === 'error') return Alert.alert("Ops...", minhasConsultas.msg);

                            // Buscando os serviços
                            for (let consulta of minhasConsultas.dados) {

                                const service = await servicos.buscar(consulta.idServico, token);
                                consulta.nomeServico = service.dados.nomeServico;
                                
                                const [ano, mes, dia] = consulta.data.split('-');
                                consulta.dataFormatada = `${dia}/${mes}/${ano}`;

                                consulta.preco = service.dados.preco;
    
                            }
                            
                            setDadosConsultas(minhasConsultas.dados);
                            
                            console.log(minhasConsultas);
                            setMostrarCards(true);
                            setMostrarBotao(true);

                        }}>
                            <Text style={estilo.textbtn}>Consultas</Text>
                            <Text style={estilo.textbtn}>Marcadas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.botao} onPress={async () => {
                            // Resgantando o token de autenticação
                            const tokenJson = await AsyncStorage.getItem("token");
                            const token = JSON.parse(tokenJson);

                            // Regatando dados do cliente
                            const clienteJson = await AsyncStorage.getItem("dados");
                            const dadosCliente = JSON.parse(clienteJson);

                            const consultas = new Consultas();
                            const servicos = new Servicos();

                            const minhasConsultas = await consultas.buscar(token, '', dadosCliente.id,'','', 'finalizado', "");

                            if (minhasConsultas.status === 'error') return Alert.alert("Ops...", minhasConsultas.msg);

                            // Buscando os serviços
                            for (let consulta of minhasConsultas.dados) {

                                const service = await servicos.buscar(consulta.idServico, token);
                                consulta.nomeServico = service.dados.nomeServico;
                                
                                const [ano, mes, dia] = consulta.data.split('-');
                                consulta.dataFormatada = `${dia}/${mes}/${ano}`;

                                consulta.preco = service.dados.preco;
    
                            }

                            setDadosConsultas(minhasConsultas.dados);

                            setMostrarCards(true);
                            setMostrarBotao(false);

                        }}>
                            <Text style={estilo.textbtn}>Consultas</Text>
                            <Text style={estilo.textbtn}>Realizadas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.botao} onPress={async () => {
                            // Resgantando o token de autenticação
                            const tokenJson = await AsyncStorage.getItem("token");
                            const token = JSON.parse(tokenJson);

                            // Regatando dados do cliente
                            const clienteJson = await AsyncStorage.getItem("dados");
                            const dadosCliente = JSON.parse(clienteJson);

                            const consultas = new Consultas();
                            const servicos = new Servicos();

                            const minhasConsultas = await consultas.buscar(token, '', dadosCliente.id,'','', 'cancelado', "");

                            if (minhasConsultas.status === 'error') return Alert.alert("Ops...", minhasConsultas.msg);

                            // Buscando os serviços
                            for (let consulta of minhasConsultas.dados) {

                                const service = await servicos.buscar(consulta.idServico, token);
                                consulta.nomeServico = service.dados.nomeServico;
                                
                                const [ano, mes, dia] = consulta.data.split('-');
                                consulta.dataFormatada = `${dia}/${mes}/${ano}`;

                                consulta.preco = service.dados.preco;
    
                            }

                            setDadosConsultas(minhasConsultas.dados);

                            setMostrarCards(true);
                            setMostrarBotao(false);
                        }}>
                            <Text style={estilo.textbtn}>Consultas</Text>
                            <Text style={estilo.textbtn}>Canceladas</Text>
                        </TouchableOpacity>

                    </View>

                    {/* <View style={estilo.lista}>

                        <TouchableOpacity style={estilo.botaoConsulta} onPress={() => { navigation.navigate( "DetalhesConsulta" ) } }>
                            <View style={estilo.row1}>
                                <Text style={estilo.dado1}>Serviço</Text>
                                <Text style={estilo.dado1}>dd/mm/aaaa</Text> 
                            </View>

                            <View style={estilo.row2}>
                                <Text style={estilo.dado2}>00:00h</Text> 
                            </View>
                        </TouchableOpacity>
                    </View> */}

                    {mostrarCards && (
                        <ScrollView>
                            {dadosConsultas.map((item, index) => (
                            <View key={index} style={estilo.botaoConsulta}>
                                <Text style={estilo.dado1}>{item.nomeServico}</Text>
                                <Text style={estilo.dado2}>{`${item.dataFormatada}`}</Text>
                                <Text style={estilo.dado2}>{`${item.horario}`}</Text>
                                <Text style={estilo.dado2}>{`R$: ${item.preco}`}</Text>

                                {mostrarBotao && (
                                    <TouchableOpacity style={estilo.btnCancelar} onPress={async () => {

                                        const dadosJson = await AsyncStorage.getItem("dados");
                                        const tokenJson = await AsyncStorage.getItem("token");

                                        const dadosUser = JSON.parse(dadosJson);
                                        const token = JSON.parse(tokenJson);

                                        console.log(dadosUser);

                                        // Marcando consulta
                                        const consulta = new Consultas('', '', '', '', dadosUser.id, item.idServico);

                                        const resultado = await consulta.alterarStatus(token, item._id, 'cancelado');

                                        if (resultado.status === 'success') {
                                            setMostrarCards(false);
                                            Alert.alert("Sucesso!", `Consulta cancelada.`);
                                            navigation.navigate("MinhasConsultas");
                                            
                                        } else {
                                            Alert.alert("Ops...", `Não foi possível cancelar sua consulta. Tente novamente mais tarde;`);
                                        }

                                    }}>
                                    <View>
                                        <Text style={estilo.btnCancelarTxt}>Cancelar</Text>
                                    </View>
                                    </TouchableOpacity>
                                )}

                            </View>
                            ))}

                        </ScrollView>

                        
                    )}
                    

                </View>

                

            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaMinhasConsultas;