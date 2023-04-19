import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Wpp from '../../assets2/whatsapp.png'
import Facebook from '../../assets2/facebook.png'
import Instagram from '../../assets2/instagramm.jpeg'
import CopyLink from '../../assets2/copylink.png'

const SocialMedias = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box}>
                <Image style={styles.backgroundImage} source={Wpp} />
                <Text style={styles.text}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Image style={styles.backgroundImage} source={Facebook} />
                <Text style={styles.text}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Image style={styles.backgroundImage} source={Instagram} />
                <Text style={styles.text}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Image style={styles.backgroundImage} source={CopyLink} />
                <Text style={styles.text}>Enlace</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SocialMedias;

const styles = StyleSheet.create({
    container: {
        width: wp('75%'),
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 15,
    },
    box: {
        width: wp('16%'),
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#555',
        paddingTop: 3,
        fontSize: 12
    },
    backgroundImage: {
        width: wp(10),
        height: hp(5),
        marginTop:10,
        // resizeMode: 'cover',
        // opacity: 0.56,
        backgroundColor: "#fff",
      },
})