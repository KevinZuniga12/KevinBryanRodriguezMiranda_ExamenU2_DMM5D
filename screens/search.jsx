import { Image } from '@rneui/themed';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.busqueda}>
                <Image source={require('../assets/lupaB.png')} style={{ width: 20, height: 20, marginTop: 10 }}></Image>
                <TextInput placeholder='Busqueda'
                    style={{
                        width: 330,
                        height: 30,
                        borderColor: 'white',
                        marginLeft: 50,
                        textAlign: 'center',
                        backgroundColor: 'gray',
                        borderRadius: 10,
                        marginTop: -30,
                        marginRigth: 10

                    }} placeholderTextColor={'white'}></TextInput>
            </View>
            <View style={styles.feed}>
                <View style={styles.fotos}>
                    <Image style={{ width: 130, height: 130, marginTop: 12, paddingLeft: 12 }} source={require('../assets/812.jpeg')}></Image>
                    <Image style={{ width: 130, height: 130, marginTop: 12 }} source={require('../assets/eibol.jpg')}></Image>
                    <Image style={{ width: 130, height: 130, marginTop: 12 }} source={require('../assets/Jordyn.jpg')}></Image>

                </View>

            </View>
            <View style={styles.feed2}>
                <View style={styles.fotos}>
                    <Image style={{ width: 130, height: 130, marginTop: 12, paddingLeft: 12 }} source={require('../assets/eibol.jpg')}></Image>
                    <Image style={{ width: 130, height: 130, marginTop: 12 }} source={require('../assets/dSTARWAR.jpg')}></Image>
                    <Image style={{ width: 130, height: 130, marginTop: 12 }} source={require('../assets/PSG.jpg')}></Image>
                </View>
            </View>

            <View style={styles.feed3}>
                <View style={styles.fotos}>
                    <Image style={{ width: 130, height: 130, marginTop: 12, paddingLeft: 12 }} source={require('../assets/Mera.jpg')}></Image>
                    <Image style={{ width: 130, height: 130, marginTop: 12 }} source={require('../assets/eibol.jpg')}></Image>
                    <Image style={{ width: 130, height: 130, marginTop: 12 }} source={require('../assets/P1.jpg')}></Image>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: 'black',
        marginTop: 30
    },
    busqueda: {
        width: '100%',
        height: 35,
        /*borderColor: 'white',
        borderWidth: 1,*/
        marginTop: 20,
        flexDirection: 'flex-start',
        justifyContent: 'start',
    },
    feed: {
        width: '100%',
        height: 300,
        /*borderColor: 'white',
        borderWidth: 1,*/
        marginTop: 50,
    },
    feed2: {
        width: '100%',
        height: 300,
        /*borderColor: 'white',
        borderWidth: 1,*/
        marginTop: -168,
    },
    feed3: {
        width: '100%',
        height: 300,
        /*borderColor: 'white',
        borderWidth: 1,*/
        marginTop: -168,
    },
    fotos: {
        width: '100%',
        height: 190,
        /*  borderColor: 'white',
          borderWidth: 1,*/
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }


});