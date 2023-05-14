import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlaylistSection from './components/PlaylistSection'
import ShuffleSection from './components/ShuffleSection'
import LikedSongsSection from './components/likedSection'
import Navbar from './components/navbar'

const App = () => {

    return (
        <>
            <ImageBackground style={{ flex: 2 }} source={require('./Assets/highklassified.jpeg')}>
                <Text style={{ alignSelf: "center", position: "absolute", bottom: 0, fontSize: 40, fontWeight: "bold", color: "white", fontFamily: "Circular" }}>high klassified</Text>
            </ImageBackground>
            <View style={{ flex: 3, backgroundColor: "#1d1d1d" }}>
                <ShuffleSection numbers={"166.307"} />
                <LikedSongsSection likedSongs={5} name={"high klassified"} />

                <Text style={{ color: "#ebebea", padding: 10, fontFamily: "Circular", fontSize: 20, fontWeight: "bold" }}>Okudumile</Text>

                <PlaylistSection number={1} name={"I'm Fine - IMANU Remix"} listens={"823,428"} />
                <PlaylistSection number={2} name={"I'm Fine - IMANU Remix"} listens={"823,428"} />
                <PlaylistSection number={3} name={"I'm Fine - IMANU Remix"} listens={"823,428"} />

                <Navbar />
            </View>
        </>
    )
}

export default App;