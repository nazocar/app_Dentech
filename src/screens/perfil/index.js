import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import estilo from './estilos.js';


function TelaPerfil ({navigation}){

    return(
        <SafeAreaView style={estilo.tela}>
            <ScrollView>
                <View style={estilo.appbar}>
                        <Image style={estilo.logo} source={require('../../../assets/logo/dentechLogo.png')} />
                    </View>
        

                <View style={estilo.container} >
                    <Text style ={estilo.nome}>Nome</Text>
                    <TextInput style= {estilo.input}
                    onChangeText={(texto) => {
                        setNome(texto);
                    } }
                    />

                    
                    <Text style ={estilo.sobrenome}>Sobreome</Text>
                    <TextInput style= {estilo.input}
                   
                    />
                    <Text style ={estilo.email}>E-mail</Text>
                    <TextInput style= {estilo.input}
                    
                    />
                    
                    <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textbtn}>Editar perfil</Text>
                    </TouchableOpacity>

        
                    <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "EnviarEmailPerfil" ) } }>
                        <Text style={estilo.link}>Redefinir senha</Text>
                    </TouchableOpacity>

                

                    <TouchableOpacity style={estilo.botaoexcluir}>
                            <Text style={estilo.textbtn}>Excluir conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.link} onPress={() => { navigation.navigate( "Home" ) } }>
                        <Text style={estilo.link}>Voltar</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
export default TelaPerfil;