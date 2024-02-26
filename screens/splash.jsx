import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Image } from 'react-native';



Splash = () => {
    const navigation = useNavigation();

    useEffect(()=> {
        const timeoutid = setTimeout(()=>{
            navigation.navigate('Tab');
        }, 3000);
        return()=> clearTimeout(timeoutid);
    },[navigation])


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            <Image style={{
                width: 300,
                height: 310
            }} source={require('../assets/insta.png')} />
        </View>
    )
}

export default Splash;