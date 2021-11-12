import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"
const windowHeight = Dimensions.get('window').height;

export default class KMKScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // backgroundImage:"https://i.pinimg.com/originals/11/cb/20/11cb20be833235319c98dffa7475252e.png",
            logo: "https://d1fdloi71mui9q.cloudfront.net/JJOfJFcbSuaFLjaG1TtB_83SXACpzJ2o3JHL2",
            
            url1: "https://www.youtube.com/watch?v=5nTDbFODXE4&feature=emb_title",

            url2: "https://www.youtube.com/watch?time_continue=1727&v=Np0qW1bj05M&feature=emb_title",

            url3: "https://www.youtube.com/watch?list=PLJ6FuEUhF7NrgjlQ7wVd1ZeCpjKVh35Sw&v=miUG0zQynw0&feature=emb_title",

            url4: "https://www.youtube.com/watch?list=PLJ6FuEUhF7NrgjlQ7wVd1ZeCpjKVh35Sw&v=ajkxBjc1bTs&feature=emb_title",

            url5: "https://www.youtube.com/watch?list=PLJ6FuEUhF7NrgjlQ7wVd1ZeCpjKVh35Sw&v=6KARso2CL4Y&feature=emb_title",

            url6: "https://www.youtube.com/watch?list=PLJ6FuEUhF7NrgjlQ7wVd1ZeCpjKVh35Sw&v=ayGYC91JcNA&feature=emb_title",

            // url7: "https://www.youtube.com/watch?list=PLcXQX9szE1NGyWA-POoetbAtWNnr8_AQK&v=mzsbzpGi3aY",

            // url8: "https://www.youtube.com/watch?list=PLcXQX9szE1NHNgdv2GhkxOSNHrcbIat-t&v=PilvhpW0umQ&feature=emb_title",
            
            youtubeLink: "https://www.youtube.com/c/ConnieLaurencoMarlag",
            emailLink: "mailto:g-96255948@moe.dl.edu.my",
            telegramLink:"https://t.me/@connielm",
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
                        >@Cikgu Connie
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'black',
                            }}
                        >Ketua Unit KMK, Pusat Tingkatan 6 SMK Limbanak, Penampang
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
                        <Text style={styles.buttonText}>Teknik Menjawab KMK Semester 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url2) }}>
                        <Text style={styles.buttonText}>Kelas Live KMK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url3) }}>
                        <Text style={styles.buttonText}>KMK SEMESTER 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url4) }}>
                        <Text style={styles.buttonText}>TEKNIK MENJAWAB KMK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>KMK SEMESTER 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => { this.openLink(this.state.url5) }}>
                        <Text style={styles.buttonText}>KMK SEMESTER 3</Text>
                    </TouchableOpacity>
                    
                    
                    

                </View>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '50%', height: '40%' }}>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.youtubeLink) }}>
                            <Icon name="youtube" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.emailLink) }}>
                            <Icon name="envelope" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.openLink(this.state.telegramLink) }}>
                            <Icon name="telegram" size={30} color="black" />
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
        borderColor: 'grey',
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