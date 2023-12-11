import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import estilo from './estilos.js';
import login from '../../api/login.js'

function TelaLogin({navigation}){

    //Variáveis de login
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleAsyncStorage(dados, token){
        // Armazenado valor no Async storage
        const dadosUser = JSON.stringify(dados);
        const tokenUser = JSON.stringify(token);
        await AsyncStorage.setItem('dados', dadosUser);
        await AsyncStorage.setItem('token', tokenUser);
    };

    return(
        <SafeAreaView style={estilo.tela}>
            <LinearGradient style={estilo.gradient} colors={['#77E8D4', 'rgba(186, 237, 228, 0.73)', '#FFF']}>
                <ScrollView style={estilo.tela}>
                    <View style={estilo.appbar}>
                        <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                    </View>

                    <View style={estilo.container}>
                       <Text style={estilo.titulo}>Login</Text>

                       <TextInput placeholder="E-mail" style={estilo.input} onChangeText={(texto) => {
                            setEmail(texto);
                        } } />

                        <TextInput placeholder="Senha" style={estilo.input} secureTextEntry={true} onChangeText={(texto) => {
                            setSenha(texto);
                        } } />

                        <TouchableOpacity style={estilo.botao} onPress={async () => { 

                            // Realizando login
                            const resultado = await login({email, senha});

                            Alert.alert("Mensagem", resultado.msg);

                            if (resultado.status === "success") {

                                
                                await handleAsyncStorage(resultado.dados, resultado.token);

                                const dados = await AsyncStorage.getItem('dados');

                                console.log(dados);

                                navigation.navigate( "Home" );
                            }
                        } }>
                            <Text style={estilo.textbtn}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "EnviarEmail" ) } }>
                            <Text style={estilo.link}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <View style={estilo.divisor}>
                            <View style={estilo.linha}></View>
                            <Text style={estilo.txtDivisor}>ou</Text>
                            <View style={estilo.linha}></View>
                        </View>

                        <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "Cadastro" ) } }>
                            <Text style={estilo.link}>Criar nova conta</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </LinearGradient>

               
        </SafeAreaView>
    )
}

export default TelaLogin;