import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class OneClickLearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/lZB9eblIQAuj1DolTLFT_k2NS8ze7YS884m03",
            
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdNlTRpU7FR-BJWZMghPROarnD5Bpq90LVNiOhMgWvZ4mVjCw/viewform",
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
                        >One Click Learning
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >Teaching and Learning Resource Pool 
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >for STPM Subjects in PT6 SMK Limbanak
                        </Text>
                    </View>



                </View>
                <View style={styles.mid}>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("Matematik")}}>
                        <Text style={styles.buttonText}>MATEMATIK - T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("Fizik")}}>
                        <Text style={styles.buttonText}>FIZIK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("Geografi")}}>
                        <Text style={styles.buttonText}>GEOGRAFI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("SainsSukan")}}>
                        <Text style={styles.buttonText}>SAINS SUKAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("KMK")}}>
                        <Text style={styles.buttonText}>KMK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("ICT")}}>
                        <Text style={styles.buttonText}>ICT</Text>
                    </TouchableOpacity>
                    
                    

                </View>
                <View style={styles.bottom}>
                    

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