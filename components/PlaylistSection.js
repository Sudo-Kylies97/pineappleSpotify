import React from "react"
import { Image, Text, View } from 'react-native';

const style = require("../styles")
const PlaylistSection = ( {number,name, listens}) => {

    return (
        <View style={style.container}>
            <Text style={[ style.lightText, { alignSelf: "center", fontSize: 20 }]}>{number}</Text>
            <Image style={style.playlistImage} source={require("../Assets/highklassified.jpeg")} />
            <View style={{ width: "70%" }}>
                <Text style={style.lightText}>{name}</Text>
                <Text style={style.darkText}>{listens}</Text>
            </View>
            <Text style={[ style.darkText,{fontSize: 15, fontWeight: "900"}]}> . . .</Text>
        </View>
    )

}

export default PlaylistSection