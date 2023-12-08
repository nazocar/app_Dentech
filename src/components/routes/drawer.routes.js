import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer} from "@react-navigation/native";

import TelaCadastro from "../../screens/cadastro";
import TelaConfirmarConsulta from "../../screens/confirmarConsulta";
import TelaDetalhesConsulta from "../../screens/detalhesConsulta";
import TelaEnviarEmail from "../../screens/enviarEmail";
// import TelaEnviarEmailPerfil from "../../screens/enviarEmailPerfil";
import TelaEscolherServico from "../../screens/escolherServico";
import TelaHome from "../../screens/home";
import TelaInicial from "../../screens/inicial";
import TelaLogin from "../../screens/login";
import TelaMinhasConsultas from "../../screens/minhasConsultas";
import TelaPerfil from "../../screens/perfil";
import TelaRecuperarSenha from "../../screens/recuperarSenha";
// import TelaRecuperarSenhaPerfil from "../../screens/recuperarSenhaPerfil";


const Drawer = createDrawerNavigator();

function DrawerRoute(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicial" screenOptions={ {title: "", drawerStyle: { backgroundColor: "#002D37"}, drawerItemStyle: { borderBottomWidth: 2, borderColor: "#FFF",  }, headerTransparent: true, drawerActiveBackgroundColor: "#002D37", drawerLabelStyle: { color: "#FFFFFF", fontWeight: "bold" } } }>
                <Drawer.Screen name="Inicial" component={TelaInicial} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Login" component={TelaLogin} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="EnviarEmail" component={TelaEnviarEmail} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                {/* <Drawer.Screen name="EnviarEmailPerfil" component={TelaEnviarEmailPerfil} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } /> */}
                <Drawer.Screen name="RecuperarSenha" component={TelaRecuperarSenha} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                {/* <Drawer.Screen name="RecuperarSenhaPerfil" component={TelaRecuperarSenhaPerfil} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } /> */}
                <Drawer.Screen name="DetalhesConsulta" component={TelaDetalhesConsulta} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="EscolherServico" component={TelaEscolherServico} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="ConfirmarConsulta" component={TelaConfirmarConsulta} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />

                <Drawer.Screen name="Home" component={TelaHome} options={ { drawerLabel: "Home" } }/>
                <Drawer.Screen name="MinhasConsultas" component={TelaMinhasConsultas} options={ { drawerLabel: "Minhas consultas" } }/>
                <Drawer.Screen name="Perfil" component={TelaPerfil} options={ { drawerLabel: "Meu perfil" } } />
                
                <Drawer.Screen name="Sair" component={TelaLogin} options={ { headerShown: false, drawerLabel: "Sair" } } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerRoute;

//headerShow: false - ocultar navbar da tela
//drawerItemStyle: { display: "none"} - ocultar item de navegação da navbar
//<Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
 