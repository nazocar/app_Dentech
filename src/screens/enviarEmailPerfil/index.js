import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import estilo from './estilos.js';

function TelaEnviarEmailPerfil ({navigation}){

    const [email, setEmail] = useState('');

    return(
        <SafeAreaView style={estilo.tela}>
            
                <ScrollView style={estilo.tela}>
                    <View style={estilo.appbar}>
                        <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                    </View>

                    <View style={estilo.container}>
                     
                       <Text style={estilo.enunciado}>Digite o e-mail da conta que deseja recuperar sua senha</Text>

                       <TextInput placeholder="E-mail" style={estilo.input} onChangeText={(texto) => {
                            setEmail(texto);
                        } } />

                        <TouchableOpacity style={estilo.botao} onPress={() => { navigation.navigate("RecuperarSenhaPerfil")}}>
                            <Text style={estilo.textbtn}>Enviar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate("Perfil") } }>
                            <Text style={estilo.link}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

               
        </SafeAreaView>
    )
}

export default TelaEnviarEmailPerfil;
