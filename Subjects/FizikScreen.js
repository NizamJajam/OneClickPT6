import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class FizikScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/k8XsiwRlQsaxWXJOrnE9_h5he2d3hE3I4yb0Y",
            
            url1: "https://docs.google.com/presentation/d/1Cf4KlipUg8yXxOnTYSe5-RKHm8sti-9sAVP2bezb-2M/edit",
            
            facebookLink: "https://www.facebook.com/PustemSMKLimbanak",
            youtubeLink: "https://www.youtube.com/c/PT6SMKLimbanak/featured",
        }
    }
    async openLink(url) {
        await Linking.openURL(url)
    }
    render() {
        return (
            <ImageBackground style={styles.main} >
                
            
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
                        >@Qulaarboot1975
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
                        <Text style={styles.buttonText}>Chapter 16</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
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
                    </TouchableOpacity> */}
                    
                    
                    

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
        backgroundColor: 'lightblue',
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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    buttonText: {
        fontWeight: 'bold',
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