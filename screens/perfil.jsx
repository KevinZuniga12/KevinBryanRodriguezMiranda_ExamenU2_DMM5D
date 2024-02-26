import { useState } from "react";
import { View, Image, StyleSheet, Text, SectionList, TouchableOpacity, Modal } from "react-native";
import { Button } from "react-native-elements";

Perfil = () => {
    const [img] = useState([
        'https://static.independent.co.uk/2021/02/08/08/the%20weeknd%20super%20bowl.jpg?quality=75&width=1200&auto=webp',
        'https://static.independent.co.uk/2021/02/08/08/the%20weeknd%20super%20bowl.jpg?quality=75&width=1200&auto=webp',
        'https://images.megahits.sapo.pt/american_dad_the_wee6851a9d6_vertical.jpg',
    ]);

    const [imagen, setImagenSeleccionada] = useState(null)
    const [modal, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    }

    const openModal = (uri) => {
        setImagenSeleccionada(uri)
        setModalVisible(true);
    }


    return (

        <View style={styles.container}>
            <View style={styles.perfil}>
                <View>
                    <View style={styles.follow}>
                        <Image style={{
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            marginTop: 30,
                            margin: 20,
                        }} source={require('../assets/Metas.jpg')} />
                        <Text style={{
                            color: 'white',
                            marginTop: 120,
                            marginLeft: -100,
                        }}>Bryan y Zúñiga </Text>
                        <Text style={{
                            color: 'white',
                            marginLeft: 40,
                            marginTop: 90,
                        }}>Publicaciones</Text>
                        <Text style={{
                            color: 'white',
                            marginLeft: -35,
                            marginTop: 70,
                        }}>3</Text>
                        <Text style={{
                            color: 'white',
                            marginLeft: 50,
                            marginTop: 90,
                        }}>Seguidores</Text>
                        <Text style={{
                            color: 'white',
                            marginLeft: -40,
                            marginTop: 70,
                        }}>1276</Text>
                        <Text style={{
                            color: 'white',
                            marginLeft: 40,
                            marginTop: 90,
                        }}>Seguidos</Text>
                        <Text style={{
                            color: 'white',
                            marginLeft: -30,
                            marginTop: 70,
                        }}>220</Text>
                    </View>

                    <View style={styles.container2}>
                        <SectionList
                            sections={[{ data: img }]}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => { openModal(item) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                                        <Image
                                            style={styles.imagen}
                                            source={{ uri: item }}
                                        />
                                    </View>
                                </TouchableOpacity>

                            )}
                            horizontal={true}
                        />
                    </View>

                    <View style={styles.feed}>
                        <View style={styles.fotos}>
                            <View>
                                <Image
                                    style={{ width: 150, height: 150, paddingLeft: 12 }} source={require('../assets/Jordyn.jpg')}></Image>
                                <Image
                                    style={{ width: 150, height: 150, marginTop: 2 }} source={require('../assets/Charger.jpg')}></Image>
                                <Image
                                    style={{ width: 150, height: 150 }} source={require('../assets/aqualogo.jpg')}></Image>
                            </View>
                            <View>
                                <Image
                                    style={{ width: 150, height: 150, paddingLeft: 12 }} source={require('../assets/P1.jpg')}></Image>
                                <Image
                                    style={{ width: 150, height: 150, marginTop: 2 }} source={require('../assets/DR.STRANGE.jpg')}></Image>
                                <Image
                                    style={{ width: 150, height: 150, marginTop: 2 }} source={require('../assets/AMG GTR.jpg')}></Image>
                            </View>
                        </View>
                    </View>
                </View>
            </View>











            <Modal animationType='slide' visible={modal}>
                <View>
                    <View style={styles.cerrar}>
                        <Button style={{ width: 20, alignItems: 'flex-end', justifyContent: 'flex-end' }} color={'black'} title='X' onPress={closeModal} />
                    </View>
                    <View style={styles.ModalView}>
                        <Image style={styles.imgModal} source={{ uri: imagen }} />
                    </View>
                </View>
            </Modal>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
    },
    container2: {
        backgroundColor: 'black',
        /* borderColor: '#fff',
         borderWidth: 1,*/
        width: 380,
        height: 90,
        marginBottom: 10,
        marginTop: 60,
        marginLeft: 20,
    },
    imagen: {
        width: 50,
        height: 50,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 50,
        borderColor: '#E50195',
        borderWidth: 1,
        paddingTop: 2

    },
    perfil: {
        backgroundColor: 'black',
        margin: 10,
        marginTop: 30,
    },
    follow: {
        flexDirection: 'row',
    },
    publicaciones: {

    },



    feed: {
        width: '80%',
        height: '100%',
        /*borderColor: 'white',
        borderWidth: 1,*/
    },
    fotos: {
        width: '100%',
        /*  borderColor: 'white',
          borderWidth: 1,*/
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    ModalView: {
        backgroundColor: 'black',
        borderRadius: 20,
        shadowColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
    },
    imgModal: {
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cerrarModal: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})



export default Perfil;