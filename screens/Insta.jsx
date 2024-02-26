import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { Image } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, FlatList, StatusBar, SectionList, Modal, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';

export default function feed() {
    const [img, setImg] = useState([
        'https://static.independent.co.uk/2021/02/08/08/the%20weeknd%20super%20bowl.jpg?quality=75&width=1200&auto=webp',
        'data:image/jpeg;base64,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',
        'https://images.megahits.sapo.pt/american_dad_the_wee6851a9d6_vertical.jpg',
        'https://i.pinimg.com/736x/43/5b/17/435b172f1353964cd8c572fc75107316.jpg',
        'data:image/jpeg;base64,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',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_TaTl5gDIX7TCbXc6nU-6BrFkmOBwCLUmA&usqp=CAU',
    ]);

    const [nombres, setNombres] = useState(['Bryan', 'Kevin', 'pablo', 'Pedro ', 'Junito', 'Sebastian'])

    const [comen, setComen] = useState(['Hola', 'ajajajjajja', 'omg', 'chido', 'Supreme', 'Ta todo ready'])


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
            <Text style={styles.text}>Instagram</Text>
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
                                <Text style={{ color: '#fff', fontSize: 10, marginBottom: 20 }}>{nombres[img.indexOf(item)]}</Text>
                            </View>
                        </TouchableOpacity>

                    )}
                    horizontal={true}
                />
            </View>
            <SectionList
                sections={[{ data: img }]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.feed}>
                        <View style={styles.imgFeed}>
                            <Image style={{ width: 40, height: 40, borderRadius: 50, marginRight: 4 }} source={{ uri: 'https://static.independent.co.uk/2021/02/08/08/the%20weeknd%20super%20bowl.jpg?quality=75&width=1200&auto=webp' }} />
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13, marginTop: 6 }}>{nombres[img.indexOf(item)]}</Text>
                        </View>
                        <CardDivider />
                        <Card containerStyle={styles.fondoCard}>
                            <Image onLongPress={() => openModal(item)} onPressOut={closeModal} style={{ width: 300, height: 400, borderRadius: 4 }} source={{ uri: item }} />
                            <CardDivider style={{ color: 'gray', margin: 3 }} />
                            <Text style={{ color: '#fff' }}>{comen[img.indexOf(item)]}</Text>
                        </Card>

                    </View>
                )}
                horizontal={false}
            />

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
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingTop: 30,
    },
    container2: {
        backgroundColor: 'black',
        /* borderColor: '#fff',
         borderWidth: 1,*/
        width: 380,
        height: 90,
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
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
    feed: {
        backgroundColor: '#f2f2f200',
        alignItems: 'center',
        justifyContent: 'center',
        width: 380,
        height: 500,
        /* borderColor: '#fff',
         borderWidth: 1,*/
        marginBottom: 1,
        position: 'relative',
    },
    imgFeed: {
        position: 'absolute',
        top: 2,
        left: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'start',
        marginBottom: 20,
        marginRight: 60,
        /*borderColor: '#fff',
        borderWidth: 1,*/
    },
    fondoCard: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
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
};