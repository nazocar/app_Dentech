import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilos.js';

function TelaEnviarEmail ({navigation}){

    const [email, setEmail] = useState('');

    return(
        <SafeAreaView style={estilo.tela}>
            <LinearGradient style={estilo.gradient} colors={['#77E8D4', 'rgba(186, 237, 228, 0.73)', '#FFF']}>
                <ScrollView style={estilo.tela}>
                    <View style={estilo.appbar}>
                        <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                    </View>

                    <View style={estilo.container}>
                       <Text style={estilo.titulo}>Esqueceu a senha?</Text>
                       <Text style={estilo.enunciado}>Digite o e-mail da conta que deseja recuperar sua senha</Text>

                       <TextInput placeholder="E-mail" style={estilo.input} onChangeText={(texto) => {
                            setEmail(texto);
                        } } />

                        <TouchableOpacity style={estilo.botao} onPress={() => { navigation.navigate("RecuperarSenha")}}>
                            <Text style={estilo.textbtn}>Enviar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate("Login") } }>
                            <Text style={estilo.link}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </LinearGradient>

               
        </SafeAreaView>
    )
}

export default TelaEnviarEmail;
