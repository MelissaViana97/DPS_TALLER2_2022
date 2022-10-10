import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const dataEstrenos = [
    {
        id: '1',
        titulo: 'Black Adam (Película)',
        descripcion: 'En la antigua Kahndaq, Teth Adam recibio los poderes omnipotentes de los dioses. Tras utilizar estos poderes para vengarse, fue encarcelado, convirtiendose en Black Adam.',
        fechaEstreno: '19 de octubre',
        trailer: 'kOFTZWyaOgc/hq720.jpg'
    },
    {
        id: '2',
        titulo: 'coldplay (Película)',
        descripcion: 'Disfruta em tu cine mas cercano del imponente espectaculo de la gira mundial Music of The Spheres de Coldplay que esta batiendo todos los records.',
        fechaEstreno: '28 de octubre 2022',
        trailer: 'yeIdPxvF6jk/hq720.jpg'
    },
    {
        id: '3',
        titulo: 'La invitación al infierno (Película)',
        descripcion: 'Una joven es cortejada y enamorada, solo para darse cuenta de que una conspiracion gotica esta en marcha.',
        fechaEstreno: '9 de octubre DE 2022',
        trailer: 'MWnl2fVQZOI/hq720.jpg'
    },
    {
        id: '4',
        titulo: 'Amsterdam(Serie)',
        descripcion: 'Ambientada en los anios 30, sigue a tres amigos que son testigos de un asesinato, se convierten en sospechosos y descubren uno de los complots mas escandalosos de la historia de Estados Unidos.',
        fechaEstreno: '10 de octubre de 2022',
        trailer: 'Xp42uIKRJ9c/hq720.jpg'
    },
    {
        id: '5',
        titulo: 'Vista por ultima vez(Serie)',
        descripcion: 'Will Spann esta llevando a su futura ex esposa, Lisa, a la casa de sus padres cuando desaparece misteriosamente. Decidido a encontrar a Lisa, Will se sumergira en el área criminal de la ciudad mientras escapa de las autoridades.',
        fechaEstreno: '11 de octubre 2022',
        trailer: 'lCfkf7YebMg/hq720.jpg'
    },
    {
        id: '6',
        titulo: 'sonrie (Serie)',
        descripcion: 'Despues de ser testigo de un extranio y traumatico accidente que involucro a una paciente, la Dr. Rose Cotter empieza a experimentar sucesos aterradores que no puede explicarse.',
        fechaEstreno: '12 de octubre 2022',
        trailer: 'yhKiQGJop_8/hq720.jpg'
        
        
    },
]

const Estrenos = () => {

    return(
        <SafeAreaView>
            <FlatList
                data = { dataEstrenos }
                keyExtractor= { ( item ) => item.id }
                renderItem = { ( {item} ) => (
                    <View style = { styles.container }>
                        <View style = { styles.video }>
                            <WebView
                                source={{
                                    uri: `https://www.youtube.com/embed/${item.trailer}`
                                    //${item.trailer}
                                }} 
                            />
                        </View>
                        <View style = { styles.containerInfo }>
                            <Text style ={ styles.texto }>{ item.titulo }</Text>
                            <Text style = {{ textAlign: 'justify', fontSize: 18, marginVertical: 4 }}>{ item.descripcion }</Text>
                            <Text style = {{ fontSize: 16, marginBottom: 4 }}>Fecha de Estreno: { item.fechaEstreno }</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '2%',
        marginVertical: 10,
        borderBottomWidth: 1,
    },
    video: {
        width: '100%',
        height: 200,
    },
    containerInfo:{
        marginTop: 10,
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Estrenos;