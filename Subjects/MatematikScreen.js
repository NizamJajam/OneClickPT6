import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class MatematikScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/c8qEPkJTvy3SEpyhU53N_ccV343t7y6kHn42K",
            
            url1: "https://drive.google.com/file/d/1AYw1XtdXCOQ8uJBcFOwH0YI2nUGxAIg_/view",
            url2: "https://anyflip.com/gzarl/cdqe/",
            url3: "https://drive.google.com/drive/folders/1pW5xbf40nqxOF9pMcVgmv3tKtUXw-QCB?usp=sharing",
            url4: "https://drive.google.com/drive/folders/1JMo41FQW2hzBwxFDG5vt6mLj-xhxTw3R",
            url5: "https://www.youtube.com/playlist?list=PLy2-VicxoK0kdNbtJE9Xb7YkROgTI0ABc",
            facebookLink: "https://www.facebook.com/PustemSMKLimbanak",
            youtubeLink: "https://www.youtube.com/c/PT6SMKLimbanak/featured",
        }
    }
    async openLink(url) {
        await Linking.openURL(url)
    }
    render() {
        return (
            <ImageBackground style={styles.main} source={{ uri: this.state.backgroundImage }}>
                
            
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
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: 17
                            }}
                        >@AhBeh
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >Unit Matematik T SMK Limbanak
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
                        <Text style={styles.buttonText}>SP Mathematics T 954</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>TERM 1 SUMMARY NOTES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>Koleksi Soalan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>COURSEWORK MATH T STPM 2018-2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>YouTube Lesson: Derivatives</Text>
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
        // backgroundColor: '#333333',
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
        height: '14%',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
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