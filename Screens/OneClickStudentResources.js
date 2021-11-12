import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class OneClickStudentResources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "https://d1fdloi71mui9q.cloudfront.net/2vZ0yXmnQpeGqBiJQwau_6aSOvmVXM4T0RttM",
            url1: "https://drive.google.com/drive/folders/1e5MN6PWq_1PtESgUOZSZZCgTZ7F0wcr0",
            url2: "https://docs.google.com/forms/d/e/1FAIpQLSfI5qzaro8wuvxmH3qmukM7lSGv56OY2LxZmrVmHxUjDsYxPg/viewform",
            url3: "https://datastudio.google.com/u/0/reporting/93ca746f-61c7-4b7a-99a1-c06af0a7d886",
            url4: "https://online.fliphtml5.com/fahry/xehh/",
            url5: "https://online.fliphtml5.com/fahry/kpqa/",
            url6: "https://online.fliphtml5.com/fahry/ubyy/#p=1",
            url7: "https://online.fliphtml5.com/fahry/ovmd/",
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
                                color: 'black',
                                fontSize: 17
                            }}
                        >1Click STUDENT Resources
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'black',
                            }}
                        >Resources Pool For Students
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
                        <Text style={styles.buttonText}>SENARAI PENGGILIRAN KELAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>Isi Kehadiran (Jika Belum Scan QRCode)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>Data Kehadiran dan Bacaan Suhu Harian</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>Jadual Pensyarah Bertugas Minggu 40</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>Senarai Pelajar Kohort 8 Sesi 2020/2021</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url6) }}>
                        <Text style={styles.buttonText}>Jadual Waktu Kelas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url7) }}>
                        <Text style={styles.buttonText}>Jadual Waktu Pensyarah</Text>
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
        backgroundColor: 'white',
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