import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class GeografiScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/uw8ObCxyRXOewa6UtEi7_DbXc5373Wq31fSPr",
            
            url1: "https://drive.google.com/file/d/1j7ZFS7FaPWYRUS0Im-ojXLg-w39CvxO9/view",
            url2: "https://drive.google.com/file/d/12bcc5o1acPtmUqzcUJ1veiYDzFu6fU6C/view",
            url3: "https://drive.google.com/drive/folders/1Ao4CGw-Kvdkiic-r6y6dtWzs9JHy2dgX",
            url4: "https://drive.google.com/drive/folders/1iquIq0p-pnFhaTwfnmQEc5pn-uIa2CoA?usp=sharing",
            url5: "https://drive.google.com/drive/folders/1LD8bCv9PWYfdI_g9nCdK4A98NAUg2Ner?usp=sharing",
            url6: "https://drive.google.com/drive/folders/1h8FrxNqenaYz3h_76NOYOlf5ObB97YNw",
            url7: "https://drive.google.com/drive/folders/103CXTM_buAsTgTKa8Zfo5Ltnli9YZ0MP",
            url8: "https://drive.google.com/drive/folders/1obIgg4t2Bb9zkDKJAPDZ0hsdbMnjo1-q?usp=sharing",
            facebookLink: "https://www.facebook.com/PustemSMKLimbanak",
            youtubeLink: "https://www.youtube.com/c/PT6SMKLimbanak/featured",
        }
    }
    async openLink(url) {
        await Linking.openURL(url)
    }
    render() {
        return (
            <ImageBackground style={styles.main}>
                
            
                <View style={styles.top}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{ uri: this.state.logo }}
                            style={{
                                width: 100,
                                height: 100,
                                flex: 1,
                            }}
                            resizeMode="contain"
                        />

                    </View>
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'black',
                                fontSize: 17
                            }}
                        >@jjon
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'black',
                            }}
                        >Geografi942 PUSTEM SMKLimbanak
                        </Text>
                        {/* <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >and Lecturers of PT6 SMK Limbanak
                        </Text> */}
                    </View>



                </View>
                <View style={styles.mid}>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url1) }}>
                        <Text style={styles.buttonText}>SUKATAN PELAJARAN GEOGRAFI STPM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>MODUL PENUH GEOGRAFI STPM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>NOTA RINGKAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>KOLEKSI SOALAN TAHUN LEPAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>SKEMA JAWAPAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>PBL GEO SEM 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>PBL GEO SEM 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>PBL GEO SEM 3</Text>
                    </TouchableOpacity>
                    
                    
                    

                </View>
                <View style={styles.bottom}>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '50%', height: '40%' }}>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.facebookLink) }}>
                            <Icon name="facebook" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.youtubeLink) }}>
                            <Icon name="youtube" size={30} color="white" />
                        </TouchableOpacity>


                    </View>
                    <View>
                        <Text style={{ fontSize: 10 }}>Powered by SMK LIMBANAK @ 2021</Text>
                    </View> */}

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F8F0E3',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    top: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

    },
    mid: {
        flex: 3,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10
    },
    buttons: {
        width: '90%',
        height: '12%',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
    },
    bottom: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})