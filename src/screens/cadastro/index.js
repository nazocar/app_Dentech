import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilos.js';


function TelaCadastro({navigation}){

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    
    return(
        <SafeAreaView style={estilo.tela}>
            <LinearGradient style={estilo.gradient} colors={['#77E8D4', 'rgba(186, 237, 228, 0.73)', '#FFF']}>
                <ScrollView style={estilo.tela}>
                    <View style={estilo.appbar}>
                        <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                    </View>

                    <View style={estilo.container}>
                       <Text style={estilo.titulo}>Cadastre-se</Text>

                       <TextInput placeholder="Nome" style={estilo.input} onChangeText={(texto) => {
                            setNome(texto);
                        } } />

                        <TextInput placeholder="Sobrenome" style={estilo.input} onChangeText={(texto) => {
                            setSobrenome(texto);
                        } } />

                        <TextInput placeholder="E-mail" style={estilo.input} onChangeText={(texto) => {
                            setEmail(texto);
                        } } />

                        <TextInput placeholder="Senha" style={estilo.input} secureTextEntry={true} onChangeText={(texto) => {
                            setSenha(texto);
                        } } />

                        <TextInput placeholder="Confirmar senha" style={estilo.input} secureTextEntry={true} onChangeText={(texto) => {
                            setConfirmar(texto);
                        } } />

                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textbtn}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "Inicial" ) } }>
                            <Text style={estilo.link}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </LinearGradient>

               
        </SafeAreaView>
        
    )
};

export default TelaCadastro;
