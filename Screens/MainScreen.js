import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "https://d1fdloi71mui9q.cloudfront.net/72OGfDkNRU63v1sM2myw_dZ2s9Es49amZ6G0U",
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
            <View style={styles.main}>
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
                        >One Click PT6
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >Resources Pool For Students
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >and Lecturers of PT6 SMK Limbanak
                        </Text>
                    </View>



                </View>
                <View style={styles.mid}>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("Learning")}}>
                        <Text style={styles.buttonText}>1Click LEARNING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("StudentResources")}}>
                        <Text style={styles.buttonText}>1Click STUDENT Resources</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.navigation.navigate("TeacherResources")}}>
                        <Text style={styles.buttonText}>1Click TEACHER Resources</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url) }}>
                        <Text style={styles.buttonText}>PETI ADUAN DIGITAL</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '50%', height: '40%' }}>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.facebookLink) }}>
                            <Icon name="facebook" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.youtubeLink) }}>
                            <Icon name="youtube" size={30} color="white" />
                        </TouchableOpacity>


                    </View>
                    <View>
                        <Text style={{ fontSize: 10 }}>Powered by SMK LIMBANAK @ 2021</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    top: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
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
        flex: 2,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10
    },
    buttons: {
        width: '90%',
        height: '20%',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15,
    },
    bottom: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})