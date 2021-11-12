import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class ICTScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/vaLCPmT1TTuQ6axoNmYg_0eFJ6SXyJFoZCK3E",
            
            url1: "https://www.youtube.com/watch?v=t7Vc1VKuhSE&feature=youtu.be",

            url2: "https://www.youtube.com/playlist?list=PLLqc7Vw4lG2dZfMBF0TyeLNw1EuvgLKl1",

            url3: "https://www.youtube.com/playlist?list=PLLqc7Vw4lG2fQ5NIryNAKo1jMrRaK2Lfd",

            url4: "https://drive.google.com/drive/folders/1HqRGL-fBREI8EiXiXWX0Dc3pWdutwEo9?usp=sharing",

            url5: "https://drive.google.com/drive/folders/1jJjUvQ3THi9jWggIylrSP8Wv4UjgJjS_",

            url6: "https://drive.google.com/drive/folders/1qBZxQfeaBL5WhkWHAK4qmgT0UKMV-sW1",

            url7: "https://online.fliphtml5.com/fahry/cjwi/",

            url8: "https://online.fliphtml5.com/fahry/zppn/",
            
            youtubeLink: "https://www.youtube.com/channel/UCFs995zaUBGRaPMXq1mRCrw",
            emailLink: "mailto:comel.net@gmail.com",
            telegramLink:"https://t.me/suriehatimu",
        }
    }
    async openLink(url) {
        await Linking.openURL(url)
    }
    render() {
        return (
            <ImageBackground style={styles.main} source={{uri: "https://c4.wallpaperflare.com/wallpaper/1021/744/891/blurred-colorful-vertical-portrait-display-wallpaper-preview.jpg"}}>
                
            
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
                                color: 'white',
                                fontSize: 17
                            }}
                        >@cikguictcomel
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'white',
                            }}
                        >One-Click ICT958 di Pusat Tingkatan Enam SMK Limbanak
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
                        <Text style={styles.buttonText}>Teknik Menjawab Soalan ICT Kertas 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>C Programming PBL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>ICT & Multimedia PBL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>KOLEKSI SOALAN STPM ICT958</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>MODUL ICT958</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>NOTA ICT958 STPM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>SUKATAN PELAJARAN ICT958</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>KEPUTUSAN PEPERIKSAAN STPM ICT</Text>
                    </TouchableOpacity>
                    
                    
                    

                </View>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '50%', height: '40%' }}>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.youtubeLink) }}>
                            <Icon name="youtube" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.emailLink) }}>
                            <Icon name="envelope" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.telegramLink) }}>
                            <Icon name="telegram" size={30} color="white" />
                        </TouchableOpacity>


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
        backgroundColor: '#E0FAEE',
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
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    bottom: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})