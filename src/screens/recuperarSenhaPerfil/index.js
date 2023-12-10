import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import estilo from './estilos.js';

function TelaRecuperarSenhaPerfil ({navigation}){

    const [codigo, setCodigo] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState(''); 

    return(
        <SafeAreaView style={estilo.tela}>
                <ScrollView style={estilo.tela}>
                    <View style={estilo.appbar}>
                        <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                    </View>

                    <View style={estilo.container}>
                       <Text style={estilo.titulo}>Recuperar senha</Text>
                       <Text style={estilo.enunciado}>Digite o código enviado por e-mail</Text>

                       <TextInput placeholder="Código" style={estilo.input} onChangeText={(texto) => {
                            setCodigo(texto);
                        } } />

                       <TextInput placeholder="Digite a nova senha" style={estilo.input} secureTextEntry={true} onChangeText={(texto) => {
                            setSenha(texto);
                        } } />

                       <TextInput placeholder="Confirmar nova senha" style={estilo.input} secureTextEntry={true} onChangeText={(texto) => {
                            setConfirmar(texto);
                        } } />

                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textbtn}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "EnviarEmailPerfil" ) } }>
                            <Text style={estilo.link}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
               
        </SafeAreaView>
    )
}

export default TelaRecuperarSenhaPerfil;