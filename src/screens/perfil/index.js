import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import estilo from './estilos.js';


function TelaPerfil ({navigation}){

    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    
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
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
export default TelaPerfil;