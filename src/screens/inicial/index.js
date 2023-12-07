import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilos.js';


function TelaInicial({navigation}){
    return(
        <View style={estilo.container}>
            <LinearGradient style={estilo.gradient} colors={['#03BF9E', 'rgba(186, 237, 228, 0.73)', '#FFF']}>
                <Image style={estilo.inicialLogo} source={require('../../../assets/logo/dentechLogo.png')} />

                <TouchableOpacity 
                    style={estilo.botaoCadastrar}
                    onPress={() => {
                        navigation.navigate('Cadastro');
                    }}
                >
                    <Text style={estilo.botaoTxtCadastrar}>Cadastre-se</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={estilo.botaoEntrar}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                >
                    <Text style={estilo.botaoTxtEntrar}>Entrar</Text>
                    
                </TouchableOpacity>
            </LinearGradient>
            
        </View>
    )
};

export default TelaInicial;