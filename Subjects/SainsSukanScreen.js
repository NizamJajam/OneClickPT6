import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class SainsSukanScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/jUz7ZdFDTEeHc7zHRmOj_arb43F4t8PBeUG1l",
            
            url1: "https://drive.google.com/file/d/1MFPKybgn9hU_yJ8noXlsw6M71nQ2Io10/view",

            url2: "https://drive.google.com/file/d/1lJ1-VNfXZhHsSVmKNe66Vg3YYZ7TKbSC/view",

            url3: "https://drive.google.com/file/d/1yhPIZrWnqzrHyDHun9Je7g_3lU9uuvNs/view",

            url4: "https://drive.google.com/file/d/1n5z6E1q8CPqNEMYK8v7FIX9xEiLZF1Ac/view",

            url5: "https://www.youtube.com/watch?v=Hx9shcaaNjs",

            url6: "https://www.youtube.com/watch?list=PLcXQX9szE1NGyWA-POoetbAtWNnr8_AQK&v=W80f8oeD-AU",

            url7: "https://www.youtube.com/watch?list=PLcXQX9szE1NGyWA-POoetbAtWNnr8_AQK&v=mzsbzpGi3aY",

            url8: "https://www.youtube.com/watch?list=PLcXQX9szE1NHNgdv2GhkxOSNHrcbIat-t&v=PilvhpW0umQ&feature=emb_title",

            facebookLink: "https://www.facebook.com/PustemSMKLimbanak",
            youtubeLink: "https://www.youtube.com/c/PT6SMKLimbanak/featured",
            emailLink: "mailto:naed3030@gmail.com",
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
                        >One Stop Sains Sukan STPM
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'black',
                            }}
                        >Pusat T6 SMK Limbanak Penampang, Sabah
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
                        <Text style={styles.buttonText}>SUKATAN PELAJARAN Sains Sukan STPM 966</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>Nota Komprehensif Sains Sukan Sem 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>Nota Komprehensif Sains Sukan Sem 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>Nota Komprehensif Sains Sukan Sem 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>Bengkel Teknik Menjawab Sem 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>Bengkel Teknik Menjawab Sem 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>YouTube Pembentangan Sem 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>YouTube Pembentangan Sem 2</Text>
                    </TouchableOpacity>
                    
                    
                    

                </View>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '50%', height: '40%' }}>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.facebookLink) }}>
                            <Icon name="envelope" size={30} color="black" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => { this.openLink(this.state.youtubeLink) }}>
                            <Icon name="youtube" size={30} color="white" />
                        </TouchableOpacity> */}


                    </View>
                    {/* <View>
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
        backgroundColor: '#4F7CFE',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    bottom: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})