import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
// import Wpp from '../../assets/whatsapp.png'
// import Facebook from '../../assets/facebook.png'
// import Instagram from '../../assets/instagramm.jpeg'
// import CopyLink from '../../assets/copylink.png'

const SocialMedias = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box}>
                {/* <Wpp /> */}
                <Text style={styles.text}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                {/* <Facebook /> */}
                <Text style={styles.text}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                {/* <Instagram /> */}
                <Text style={styles.text}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                {/* <CopyLink /> */}
                <Text style={styles.text}>Copiar enlace</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SocialMedias;

const styles = StyleSheet.create({
    container: {
        width: wp('88%'),
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 15,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        color: '#555',
        paddingTop: 3,
        fontSize: 12
    }
})