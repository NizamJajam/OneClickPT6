import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class OneClickStudentResources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "https://d1fdloi71mui9q.cloudfront.net/zDYT7SQRc9cDya2CCYA5_J6WbNLJSTQgRBUE5",
            url1: "https://online.fliphtml5.com/fahry/xehh/#p=1",
            url2: "https://datastudio.google.com/u/0/reporting/93ca746f-61c7-4b7a-99a1-c06af0a7d886/page/RgBcC",
            url3: "https://datastudio.google.com/u/0/reporting/a4a97bb6-5521-431d-85ca-dbb48f8e0867/page/tY5bC",
            url4: "https://online.fliphtml5.com/fahry/ubkc/",
            url5: "https://online.fliphtml5.com/fahry/kpqa/",
            url6: "https://online.fliphtml5.com/fahry/ovmd/",
            url7: "https://online.fliphtml5.com/fahry/ubyy/",
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
                        >1Click TEACHER Resources
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >Management Resources For Teachers
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
                        <Text style={styles.buttonText}>JADUAL PENSYARAH BERTUGAS MINGGUAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>Data Kehadiran Pelajar dan Bacaan Suhu Harian</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>Rekod Kehadiran Harian</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>Senarai Pelajar 6A (Kohort 7)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>Senarai Pelajar 6R (Kohort 8)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url6) }}>
                        <Text style={styles.buttonText}>JADUAL WAKTU GURU (Nov)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url7) }}>
                        <Text style={styles.buttonText}>JADUAL WAKTU KELAS (Nov)</Text>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        // backgroundColor: '#333333',
        backgroundColor: 'black',
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
        flex: 3,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10
    },
    buttons: {
        width: '90%',
        height: '13%',
        backgroundColor: '#333333',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
    bottom: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})